import React, {Component} from 'react';
import CoinHeader from '../../components/CoinHeader';
import CoinsList from '../../components/CoinsList';

class Coins extends Component {
    state = {
        coinsList: [],
        search: '',
    };

    componentDidMount() {
        fetch('https://min-api.cryptocompare.com/data/all/coinlist').then(function(response) {
            return response.json();
        }).then(json => {
            let res = Object.keys(json.Data).slice(0, 20).map(key => json.Data[key]);
            this.setState( { coinsList: res } );
        });
    }

    handleSearchChange = (event) => {
        this.setState({ search: event.target.value });
    };

    filterListBySearchTerm = (list, searchTerm) => (
        list.filter(coin => coin.CoinName.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    render() {
        const { coinsList, search } = this.state;
        const searchRes = this.filterListBySearchTerm(coinsList, search);

        return (
            <div className="container">
                <CoinHeader/>
                <div>
                    <label htmlFor="search">
                        Search
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Type to search"
                            value={search}
                            onChange={this.handleSearchChange}
                        />
                    </label>
                </div>
                <div className="row">
                    { <CoinsList result={searchRes} />}
                </div>
            </div>
        );
    }
}

export default Coins;
