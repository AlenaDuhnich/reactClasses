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

    filterListBySearch = () => {
        const { newsList, search } = this.state;
        return newsList.filter(news => news.title.toLowerCase().includes(search.toLowerCase()));
    };

    render() {
        const { search } = this.state;

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
                    <NewsList news={this.state.newsList} handler={this.filterListBySearch}/>
                </div>
            </div>
        );
    }
}

export default News;
