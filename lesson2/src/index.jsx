import React from 'react';
import ReactDOM from 'react-dom';
// import style from '../style/style.css';

const ChangeColorComponent = ({ backgroundColor }) => (
  <div className={'rectangle'} style={ {backgroundColor} }>
  </div>
);

const BaseComponent = () => (
  <div>
    <ChangeColorComponent backgroundColor={'yellow'} />
    <ChangeColorComponent backgroundColor={'green'} />
    <ChangeColorComponent backgroundColor={'blue'} />
    <ChangeColorComponent backgroundColor={'orange'} />
  </div>
);

ReactDOM.render(<BaseComponent />, document.getElementById('wrapper'));
