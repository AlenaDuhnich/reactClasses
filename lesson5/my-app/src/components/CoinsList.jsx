import React from 'react';
import CoinCard from './CoinCard';

const CoinsList = (list) => (
    <div className="row">
        {Object.values(list.coins.coinsList).map(coin => {
            return <CoinCard coin={coin} key={coin.id} />
        })}

    </div>
);

export default CoinsList;
