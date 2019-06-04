import React from 'react';
import { CRYPTO_COMPARE_URL } from '../constants';

const CoinCard = ({coin}) => (
    <div className="col-sm-4">
        <div className="card bg-light mb-3">
            <div className="card-body">
                <h5 className="card-title">{coin.CoinName}</h5>
                <img src={`${CRYPTO_COMPARE_URL}${coin.ImageUrl}`} alt={coin.CoinName}/>
            </div>
        </div>
    </div>
);

export default CoinCard;
