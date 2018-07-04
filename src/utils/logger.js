const logger = process.env.NODE_ENV === 'dev'
    ? {
        error: (origin, ...params) => console.error(origin, ...params),
        info: (origin, ...params) => console.info(origin, ...params),
        log: (origin, ...params) => console.log(origin, ...params),
        warn: (origin, ...params) => console.warn(origin, ...params)
    }
    : {
        error: (origin, ...params) => null,
        info: (origin, ...params) => null,
        log: (origin, ...params) => null,
        warn: (origin, ...params) => null
    }

const error = logger.error;
const info = logger.info;
const log = logger.log;
const warn = logger.warn;

export {error, info, log, warn}