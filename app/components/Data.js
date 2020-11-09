import React from 'react';
import PropTypes from 'prop-types';

const Data = ({data}) => {
    const ticker = data.data;
    return (
        ticker ? <p>{ticker.price}</p> : <p>Loading...</p>
    );
};

Data.propTypes = {
    data: PropTypes.object,
};

export default Data;
