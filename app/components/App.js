import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import PropTypes from 'prop-types';
import Data from './Data';

import '../styles/application.scss';
import { recieveDataAction } from '../actions/action';

const App = ({recieveData, data}) => {
    let socket;
    const stockSymbol = 'AAPL';
    /* fixes warning in test case: Cannot read property '_cookieJar' of null*/
    if (process.env.NODE_ENV !== 'test')  socket = io('http://localhost:4000');
    useEffect(() => {
        if(process.env.NODE_ENV !== 'test') {
            socket.on('connect', () => {
                console.log('connected to ws');
                socket.on(stockSymbol, (_data) => {
                    recieveData(_data);
                });
                socket.emit('ticker', stockSymbol);
            });
            return () => {
                socket.on('disconnect', () => {
                    console.log('disconnected');
                });
            };
        }
        return () => null;
    }, []);
    return (
        <div className="stock-ticker">
            <h1>Price Ticker</h1>
            <Data data={data} />
        </div>
    );
};

const mapStateToProps = state => ({
    data: state.ticker.data
});

const mapDispatchToProps = dispatch => ({
    recieveData: (data) => dispatch(recieveDataAction(data))
});

App.propTypes = {
    data: PropTypes.object,
    recieveData: PropTypes.func
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
