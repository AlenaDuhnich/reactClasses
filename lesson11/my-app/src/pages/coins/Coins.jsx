import React, {Component} from 'react';
import CoinHeader from '../../components/CoinHeader';
import CoinsList from '../../components/CoinsList';
import PropTypes from 'prop-types';
import Input from '../../components/Input';
import { connect } from 'react-redux';
import { searchCoinsAction } from '../../actions/SearchActions';

class Coins extends Component {
    static propTypes = {
        coinsList: PropTypes.array.isRequired,
        search: PropTypes.string.isRequired,
        searchCoinsAction: PropTypes.func.isRequired,
    };

    handleSearchChange = (search) => {
        this.props.searchCoinsAction(search);
    };

    filterListBySearchTerm = (list, searchTerm) => (
        list.filter(coin => coin.CoinName.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    render() {
        const { coinsList, search } = this.props;
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

const mapStateToProps = state => ({
    search: state.searchReducer.search,
});

const mapDispatchToProps = {
    searchCoinsAction,
};

const CoinsComponent = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Coins);

export default CoinsComponent;
