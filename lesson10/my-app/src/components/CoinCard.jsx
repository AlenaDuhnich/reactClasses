import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { CRYPTO_COMPARE_URL } from '../constants';
import withLogProps from '../HOC/withLogProps';
import './Coins.css';

const CoinCard = ({ coin, history }) => (
    <div className="col-sm-4">
        <div className="coin-card card bg-light mb-3">
            <div className="card-body">
                <h4 className="card-title" onClick={(e) => {history.push(`/coins/${coin.Id}`)}}>{coin.CoinName}</h4>
                {coin.ImageUrl && <img src={`${CRYPTO_COMPARE_URL}${coin.ImageUrl}`} alt={coin.CoinName} />}
            </div>
        </div>
    </div>
);

CoinCard.propTypes = {
    coin: PropTypes.object.isRequired,
    history: PropTypes.object,
};

export default withRouter(withLogProps(CoinCard));
