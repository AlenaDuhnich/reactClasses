import React, {Component} from 'react';
import NewSingle from './NewSingle';
import newsData from '../data/newsList.json';

class NewList extends Component {
    state = {
        newsList: Object.keys(newsData.Data).slice(0, 20).map(key => newsData.Data[key]),
    };

    render() {
        return (
            <div className="row">
                {this.state.Data.map(news => {
                    <NewSingle news={news} key={news.id}/>
                })}
            </div>
        )
    }
}

export default NewsList;
