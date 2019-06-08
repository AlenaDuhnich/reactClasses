import React, {Component} from 'react';
import coinsData from '../../data/coinsList.json';
import CoinHeader from '../../components/CoinHeader';
import CoinsList from '../../components/CoinsList';

class Coins extends Component {
    state = {
        coinsList: Object.keys(coinsData.Data).slice(0, 20).map(key => coinsData.Data[key]),
        search: '',
    };

    handleSearchChange = (event) => {
        this.setState({ search: event.target.value }); // setState is async
        // this.setState({ search: event.target.value }, (oldState, newState) => {
        //         //     we can subscrube in this callback, but it's not good, it's better to check before
        //         // })
    };

    filterCoinsListBySearch = () => {
        const { coinsList, search } = this.state;
        return coinsList.filter(coin => coin.CoinName.toLowerCase().includes(search.toLowerCase()));
    };

    render() {
        const { search } = this.state;

        return (
            <div className="container">
                <CoinHeader/>
                <div>
                    <label htmlFor="search">
                        Search
                        {/*<MyInput value={} handler={}></MyInput>*/}
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Type to search"
                            value={search}
                            onChange={this.handleSearchChange}
                            // onClick={this.saveChanges}
                        />
                    </label>
                </div>
                <div className="row">
                    <CoinsList coins={this.state.coinsList} handler={this.filterCoinsListBySearch}/>
                </div>
                    {/*{this.filterCoinsListBySearch().map(coin => (*/}
                        {/*<CoinCard coin={coin} key={coin.Id} />*/}
                    {/*))}*/}
            </div>
        );
    }
}

export default Coins;
