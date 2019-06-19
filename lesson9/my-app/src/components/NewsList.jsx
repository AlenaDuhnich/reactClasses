import React from 'react';
import NewSingle from './NewSingle';

const NewsList = ({result}) => (
    <div className="row">
        {result.map(news => (
            <NewSingle news={news} key={news.Id} />
        ))}
    </div>
);

export default NewsList;
