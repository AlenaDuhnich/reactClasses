import React from 'react';

const NewSingle = ({news}) => (
    <div className="col-sm-4">
        <div className="card bg-light mb-3">
            <div className="card-body">
                <h5 className="card-title">{news.title}</h5>
                <img src={news.imageurl} alt={news.title}/>
            </div>
        </div>
    </div>
);

export default NewSingle;
