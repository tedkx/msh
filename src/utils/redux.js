import { takeEvery, call, put } from 'redux-saga/effects';
import { notify } from 'store/app/actions';
import { isFunc, isNil, isNilOrWhiteSpace, getDeepProp } from 'utils/core';
import { NotificationTypes, ResponseErrorTypes } from 'utils/enums';
import { error } from 'utils/logger';

export const createAction = (type, data, error) => {
  let action = {
    type,
  };
  if (data) action.payload = data;
  if (error) action.error = error;
  return action;
};

export const createLinkedActions = (actionName, clear) => {
  const actionsObj = {
    [actionName]: actionName,
    [`${actionName}_SUCCESS`]: `${actionName}_SUCCESS`,
    [`${actionName}FAIL`]: `${actionName}_FAIL`,
  };
  if (clear === true) {
    const actionParts = actionName.split('_');
    const clearKey =
      actionParts.length === 1
        ? 'CLEAR_' + actionName
        : actionParts.map((part, i) => (i === 0 ? 'CLEAR' : part)).join('_');
    actionsObj[clearKey] = clearKey;
  }
  return actionsObj;
};
export const createDefaultStateSlice = (reducerKey, data, pending, error) => ({
  [reducerKey]: data || null,
  [`${reducerKey}Error`]: error || null,
  [`${reducerKey}Pending`]: pending === true,
});

export const extractSagaError = (exception, presetErrorMessage) => {
  if (isNil(exception)) exception = {};

  const hasResponse = !!exception && !!exception.response,
    responseData = hasResponse ? exception.response.data : {},
    statusCode =
      exception.response && exception.response.status
        ? Math.floor(exception.response.status / 100)
        : 0;
  return {
    type:
      statusCode === 0
        ? ResponseErrorTypes.UserInterface
        : statusCode === 5
          ? ResponseErrorTypes.System
          : exception.response.status === 401
            ? ResponseErrorTypes.Unauthenticated
            : statusCode === 4
              ? ResponseErrorTypes.Unauthorized
              : statusCode === 2
                ? ResponseErrorTypes.Validation
                : ResponseErrorTypes.Other,
    message: presetErrorMessage || responseData.Message || exception.message,
    stack: exception.stack,
  };
};

//const createStateGetter = key => state => state.app[key];

const defaultFlowOpts = {
  errorMessage: null, // string or function
  ignoreUnauthenticated: false,
  suppressNotification: false,
  successMessage: null,
};

export const createDefaultSagaFlow = (actionName, apiMethod, opts) => {
  let options = {
    ...defaultFlowOpts,
    ...opts,
  };
  return takeEvery(actionName, function* defaultSagaFlow(action) {
    try {
      const content = yield call(apiMethod, action.payload);
      if (isFunc(options.successMessage))
        yield put(
          notify(options.successMessage.apply(null, [content]), 'Success', 5000)
        );
      else if (isNilOrWhiteSpace(options.successMessage))
        yield put(
          notify(options.successMessage, NotificationTypes.Success, 5000)
        );

      yield put(createAction(`${actionName}_SUCCESS`, content));
    } catch (e) {
      let err = extractSagaError(e, options.errorMessage);

      error('saga error', e, '->', err);
      if (!options.suppressNotification)
        yield put(notify(err.message, NotificationTypes.Error));
      yield put(createAction(`${actionName}_FAIL`, null, err));
    }
  });
};
