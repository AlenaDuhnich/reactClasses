import React, { Component } from 'react';
import NewsList from '../../components/NewsList';
import PropTypes from 'prop-types';

class News extends Component {
    static propTypes = {
        newsList: PropTypes.array.isRequired,
    };

    state = {
        search: '',
    };

    handleSearchChange = (event) => {
        this.setState({ search: event.target.value });
    };

    filterListBySearchTerm = (list, searchTerm) => (
        list.filter(news => news.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    render() {
        const { search } = this.state;
        const { newsList } = this.props;
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
