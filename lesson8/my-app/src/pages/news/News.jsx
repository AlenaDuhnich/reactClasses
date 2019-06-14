import React, { Component } from 'react';
import NewsList from '../../components/NewsList';

class News extends Component {
    state = {
        newsList: [],
        search: '',
    };

    componentDidMount() {
        fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN').then(function(response) {
            return response.json();
        }).then(json => {
            let res = Object.keys(json.Data).slice(0, 20).map(key => json.Data[key]);
            this.setState( { newsList: res } );
        });
    }

    handleSearchChange = (event) => {
        this.setState({ search: event.target.value });
    };

    filterListBySearchTerm = (list, searchTerm) => (
        list.filter(news => news.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    render() {
        const { newsList, search } = this.state;
        const searchRes = this.filterListBySearchTerm(newsList, search);

        return (
            <div className="container">
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
                    { <NewsList result={searchRes} />}
                </div>
            </div>
        );
    }
}

export default News;
