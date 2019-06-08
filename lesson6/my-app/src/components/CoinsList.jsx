import React from 'react';
import CoinCard from './CoinCard';

const CoinsList = ({handler}) => (
    <div className="row">
        {handler().map(coin => (
            <CoinCard coin={coin} key={coin.Id} />
        ))}
    </div>
);

export default CoinsList;
