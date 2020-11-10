const { RECIEVE_DATA } = require('./types');

export const recieveDataAction = data => ({
    type: RECIEVE_DATA,
    payload: data
});
