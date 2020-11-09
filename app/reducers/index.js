import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import tickerReducer from './tickerReducer';

const createRootReducer = (history) => combineReducers({
    ticker: tickerReducer,
    router: connectRouter(history),
});

export default createRootReducer;
