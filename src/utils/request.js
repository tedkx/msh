import axios, {CancelToken} from 'axios'
import {CANCEL} from 'redux-saga'

import {ServiceResultTypes} from './enums'
import {error} from './logger'

export const REQ_GET = 'get';
export const REQ_PUT = 'put';
export const REQ_POST = 'post';
export const REQ_CANCEL = 'REQ_CANCEL';

// Default axios configuration
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.timeout = 150000;

const cth = 'content-type'
const jsonct = 'application/json'

const constructUrl = (resource) => `${WPGLOBAL_SERVER_BASE_URL}${resource}`;

// Set the cancellation token to the request config
const configWithCancellation = (configObj = {}, cancellationToken) => ({
    ...configObj,
    cancelToken: cancellationToken
})

const doRequest = (type, resource, config, data, {anonymous, json}) => {
    try {
        let source = CancelToken.source(),
            formattedConfig = configWithCancellation(config, source.token),
            request = type === REQ_POST
                ? axios.post(constructUrl(resource), data, formattedConfig)
                : axios.get(constructUrl(resource), formattedConfig);
        request[CANCEL] = () => source.cancel()

        if (json === true) {
            request = request.then((resp) => {
                if (resp.headers && resp.headers[cth] && resp.headers[cth] && resp.headers[cth].match(jsonct)) {
                    let resultType = resp.data && resp.data.Result;
                    if (resultType === ServiceResultTypes.Success || resultType === ServiceResultTypes.SuccessWithWarning) 
                        return {
                            ...resp.data.Data,
                            Version: resp.data.Version
                        };
                    
                    throw new Error({
                        message: (resp.data && resp.data.Messages) || 'Empty response',
                        response: resp
                    });
                }

                throw new Error({message: 'Invalid response format', response: resp});
            }).catch(e => {
                throw e;
            });
        }

        return request;
    } catch (ex) {
        error("ERROR", ex);
        return null;
    }
}

const getJson = (resource, config) => doRequest(REQ_GET, resource, config, null, {json: true});
const postJson = (resource, data, config) => doRequest(REQ_POST, resource, config, data, {json: true});

export {constructUrl, getJson, postJson}