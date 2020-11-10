import React from 'react';
import { configure } from 'enzyme';
import Data from '../components/Data';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

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

describe('Testing Components', () => {
    test('Data snapshot', () => {
        const tree = renderer.create(<Data data={data} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
