import React from 'react';
import ReactDOM from 'react-dom';


import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import BookDetail from './pages/Bai12.js';


ReactDOM.render(
	 <Router>
        <Route path="/" component={ BookDetail } />
    </Router>,
    document.getElementById('app')
);
