// test-utils.js
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import tickerReducer from '../reducers/tickerReducer';

function render(
    ui,
    {
        initialState,
        store = createStore(tickerReducer, initialState),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>;
    }
    Wrapper.propTypes = {
        children: PropTypes.object,
    };
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
