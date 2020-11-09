import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

export const history = createBrowserHistory();
const middleware = routerMiddleware(history);

const initialState = {
    ticker: []
};

export const store = createStore(
    rootReducer(history),
    initialState,
    compose(
        applyMiddleware(thunkMiddleware, middleware),
        DevTools.instrument()
    )
);

export function configureStore() {
    return store;
}
