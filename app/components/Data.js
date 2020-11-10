import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}

const Data = ({data}) => {
    const prevPrice = data ? usePrevious(data.price) : 0;
    const priceDiff = prevPrice === 0 ? 0 : data.price - prevPrice;
    return (
        data ?
            <div className="card">
                <div className="card-body">
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Ticker</th>
                                <th scope="col">Exchange</th>
                                <th scope="col">Price</th>
                                <th scope="col">Change</th>
                                <th scope="col">Change Percent</th>
                                <th scope="col">Last Trade Time</th>
                                <th scope="col">Dividend</th>
                                <th scope="col">Yield</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{data.ticker}</th>
                                <th scope="row">{data.exchange}</th>
                                <th scope="row">{data.price}</th>
                                <th scope="row">{data.change}</th>
                                <th scope="row">{data.change_percent}</th>
                                <th scope="row">{data.last_trade_time}</th>
                                <th scope="row">{data.dividend}</th>
                                <th scope="row">{data.yield}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="diff-info">
                    <p className={priceDiff > 0 ? 'green-text' : 'red-text'}>{priceDiff.toFixed(2)}</p>
                    {priceDiff > 0 ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}
                </div>
            </div>
            : <p>Loading...</p>
    );
};

Data.propTypes = {
    data: PropTypes.object,
};

export default Data;
