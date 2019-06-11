import React, { Component } from 'react';
import NewsList from '../../components/NewsList';
import newsData from '../../data/newsList.json';

class News extends Component {
    state = {
        newsList: Object.keys(newsData.Data).slice(0, 20).map(key => newsData.Data[key]),
        search: '',
    };

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
