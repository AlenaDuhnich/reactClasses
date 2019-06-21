import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Coins from './pages/coins/Coins';
import News from './pages/news/News';
import ForOFor from './pages/404';
import CoinCard from './components/CoinCard';
import './App.css';
import NewSingle from "./components/NewSingle";

class App extends Component {
    state = {
        coinsList: [],
        newsList: [],
    };

    filterListById = (list, id) => (
        list.find(coin => coin.Id === id)
    );

    filterNewsById = (list, id) => (
        list.find(news => news.id === id)
    );

    componentDidMount() {
        fetch('https://min-api.cryptocompare.com/data/all/coinlist')
            .then(responce => responce.json())
            .then(responce => this.setState({ coinsList: Object.keys(responce.Data).slice(0, 10).map(key => responce.Data[key]) }))
            .catch(err => alert(err));

        fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')
            .then(responce => responce.json())
            .then(responce => this.setState({ newsList: Object.keys(responce.Data).slice(0, 10).map(key => responce.Data[key]) }))
            .catch(err => alert(err));
    }

    render() {
        const { coinsList, newsList } = this.state;

        return (
            <BrowserRouter>
                <div className="App">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <NavLink to="/" activeClassName="active" className="navbar-brand" exact>Bitcoin App</NavLink>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink to="/" activeClassName="active" exact className="nav-link">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/coins" activeClassName="active" className="nav-link" exact>Coins</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/news" activeClassName="active" className="nav-link" exact>News</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/coins" component={props => <Coins {...props} coinsList={coinsList} />} />
                        <Route
                            path="/coins/:id"
                            component={props => (
                                <CoinCard {...props} coin={this.filterListById(coinsList, props.match.params.id)} />
                            )}
                        />
                        <Route exact path="/news" component={props => <News {...props} newsList={newsList} />} />
                        <Route
                            path="/news/:id"
                            component={props => (
                                <NewSingle {...props} news={this.filterNewsById(newsList, props.match.params.id)} />
                            )}
                        />
                        <Route component={ForOFor} />
                    </Switch>
                </div>


            </BrowserRouter>
        );
    }
}

export default App;
