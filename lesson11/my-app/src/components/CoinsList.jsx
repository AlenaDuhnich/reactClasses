import React from 'react';
import CoinCard from './CoinCard';

const CoinsList = ({result}) => (
    <div className="row">
        {result.map(coin => (
            <CoinCard coin={coin} key={coin.Id}/>
        ))}
    </div>
);

export default CoinsList;
