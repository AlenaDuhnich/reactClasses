import React from 'react';
import CoinCard from './CoinCard';
import coinsData from '../data/coinsList.json';

const CoinsList = () => (
    <div className="row">
        {Object.values(coinsData.Data).slice(0, 9).map(coin => {
            return <CoinCard coin={coin} key={coin.Id} />
        })}
    </div>
);

export default CoinsList;
