import React from 'react';
import { CRYPTO_COMPARE_URL } from '../constants';
import PropTypes from 'prop-types';

const CoinCard = ({coin}) => (
    <div className="col-sm-4">
        <div className="coin-card card bg-light mb-3">
            <div className="card-body">
                <h5 className="card-title">{coin.CoinName}</h5>
                <img src={`${CRYPTO_COMPARE_URL}${coin.ImageUrl}`} alt={coin.CoinName}/>
            </div>
        </div>
    </div>
);

CoinCard.propTypes = {
    coin: PropTypes.object.isRequired,
};

export default CoinCard;
