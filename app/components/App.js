import '../styles/application.scss';
import {connect as connectToWS} from '../services';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import Data from './Data';

connectToWS('AAPL');

const App = (data) => {
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

App.propTypes = {
    data: PropTypes.object,
};

export default connect(
    mapStateToProps,
    {}
)(App);
