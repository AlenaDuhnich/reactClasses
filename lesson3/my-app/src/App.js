import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import Landing from './pages/landing/Landing';
import Coins from './pages/coins/Coins';
import News from './pages/news/News';
import ForOFor from './pages/404';

import './App.css';

const App = () => (
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
                <Route path="/" exact component={Landing}/>
                <Route path="/coins" component={Coins}/>
                <Route path="/news" component={News}/>
                <Route component={ForOFor}/>
            </Switch>
        </div>

    </BrowserRouter>
);

App.displayName = 'App';

export default App;
