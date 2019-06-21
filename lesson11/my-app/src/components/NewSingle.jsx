import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import withLogProps from '../HOC/withLogProps';

const NewSingle = ({ news, history }) => (
    <div className="col-sm-4">
        <div className="card bg-light mb-3">
            <div className="card-body">
                <h4 className="card-title" onClick={(e) => {history.push(`/news/${news.id}`)}}>{news.title}</h4>
                <img src={news.imageurl} alt={news.title}/>
            </div>
        </div>
    </div>
);

NewSingle.propTypes = {
    news: PropTypes.object.isRequired,
    history: PropTypes.object,
};

export default withRouter(withLogProps(NewSingle));
