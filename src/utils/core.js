export const isFunc = obj => typeof obj === 'function';
export const isNil = obj => typeof obj === 'undefined' || obj === null;
export const isNilOrWhiteSpace = obj => isNil(obj) || obj
    .replace(/ /g, '')
    .length === 0;