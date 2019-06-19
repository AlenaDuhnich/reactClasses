import React, {Component} from 'react';
import CoinHeader from '../../components/CoinHeader';
import CoinsList from '../../components/CoinsList';
import PropTypes from 'prop-types';
import Input from '../../components/Input';

class Coins extends Component {
    static propTypes = {
        coinsList: PropTypes.array.isRequired,
    };

    state = {
        search: '',
    };

    handleSearchChange = (search) => {
        this.setState({ search });
    };

    filterListBySearchTerm = (list, searchTerm) => (
        list.filter(coin => coin.CoinName.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    render() {
        const { search } = this.state;
        const { coinsList } = this.props;
        const searchRes = this.filterListBySearchTerm(coinsList, search);

        return (
            <div className="container">

                <CoinHeader/>
                <div>
                    <div>
                        <Input value={search} onChange={this.handleSearchChange} />
                    </div>
                    <div className="coin-list">
                    { <CoinsList result={searchRes} /> }
                    </div>
                </div>
                </div>
        );
    }
}

export default Coins;
