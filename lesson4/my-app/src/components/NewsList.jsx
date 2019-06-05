import React from 'react';
import NewSingle from './NewSingle';
import newsData from '../data/newsList.json';

const NewsList = () => (
    <div className="row">
        {Object.values(newsData.Data).map(news => {
            return <NewSingle news={news} key={news.id} />
        })}
    </div>
);

export default NewsList;
