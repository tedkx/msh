export const createAction = (type, data, error) => {
    let action = {
        type
    };
    if (data) 
        action.data = data;
    if (error) 
        action.error = error;
    return action;
}