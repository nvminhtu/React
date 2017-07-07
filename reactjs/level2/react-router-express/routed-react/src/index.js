import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import Routes from './routes';

import './index.css';

//import App from './components/App'; // khai báo lại lệnh gọi đến Component App
ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);