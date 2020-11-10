import React from 'react';
import { configure } from 'enzyme';
import App from '../components/App';
import Data from '../components/Data';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
// import { render, screen } from './testUtils';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore();

configure({ adapter: new Adapter() });

const data = {
    ticker: 'AAPL',
    exchange: 'NASDAQ',
    price: '109.79',
    change: '161.21',
    change_percent: '0.55',
    last_trade_time: '2020-11-10T12:53:18.000Z',
    dividend: '0.54',
    yield: '1.86',
};
const initialState = {
    ticker: { data: data},
};
const store = mockStore(initialState);

describe('Testing Components', () => {
    test('Data snapshot', () => {
        const tree = renderer.create(<Data data={data} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Renders the connected app with initialState', () => {
        const tree = renderer.create(<Provider store={store}><App  /> </Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
