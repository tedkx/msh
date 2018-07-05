export const isFunc = obj => typeof obj === 'function';
export const isNil = obj => typeof obj === 'undefined' || obj === null;
export const isNilOrWhiteSpace = obj =>
  isNil(obj) || obj.replace(/ /g, '').length === 0;

export const getDeepProp = (obj, prop) => {
  if (!prop) return obj;
  const props = prop.split('.');
  while (props.length > 0) {
    obj = obj[props.shift()];
    if (!obj) break;
  }
  return obj;
};
