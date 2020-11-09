const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch(type) {
        case 'RECIEVE_DATA':
            return {
                ...state, data: payload
            };
        default:
            return state;
    }
};
