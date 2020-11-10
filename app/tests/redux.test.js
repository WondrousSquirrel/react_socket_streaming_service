import { recieveDataAction } from '../actions/action';
import { RECIEVE_DATA } from '../actions/types';
import tickerReducer from '../reducers/tickerReducer';


describe('actions', () => {
    it('should create an action to add a todo', () => {
        const data = 'test case';
        /*
        const expectedAction = {
            type: 'RECIEVE_DATA',
            payload: data
        };
        */
        expect(recieveDataAction(data)).toMatchSnapshot();
    });
});

describe('reducers', () => {
    describe('Initial State', () => {
        test('always pass', () => {
            const action = {type: 'EMPTY_ACTION'};
            const initialState = { price: 0 };
            expect(tickerReducer(initialState, action)).toMatchSnapshot();
        });
    });
    describe('recieve Ddata', () => {
        test('returns the correct state', () => {
            const action = { type: RECIEVE_DATA, payload: 1 };
            // const expectedState = { data: 1 };
            expect(tickerReducer(undefined, action)).toMatchSnapshot();
        });
    });
});
