import React, {Component} from 'react';
import coinsData from '../../data/coinsList.json';
import CoinHeader from '../../components/CoinHeader';
import CoinsList from '../../components/CoinsList';

class Coins extends Component {
    state = {
        coinsList: Object.keys(coinsData.Data).slice(0, 20).map(key => coinsData.Data[key]),
    };

    render() {
        return (
            <div className="container">
                <CoinHeader/>
                <div className="row">
                    <CoinsList coins={this.state} />
                </div>
            </div>
        )
    }
}

export default Coins;
