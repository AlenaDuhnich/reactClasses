import React from 'react';
import NewSingle from './NewSingle';

const NewsList = ({handler}) => (
    <div className="row">
        {handler().map(news => (
            <NewSingle news={news} key={news.Id} />
        ))}
    </div>
);

export default NewsList;
