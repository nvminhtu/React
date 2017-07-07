// We declare routes here

import React from 'react';
import { Router, Route } from 'react-router';

// declare and import other components to App
import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

// review: arrow function in ES6
const Routes = (props) => (
    
    // v3
    // <Router {...props}>
    //     <Route path="/" component={App} />
    //     <Route path="/about" component={About} />
    //     <Route path="*" component={NotFound} />
    // </Router>
    
    
    <Router {...props}>
        <Route path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
    </Router>

    //v4
//    <BrowserRouter>
//         <div>
//             <Route path="/" component={App} />
//             <Route path="/about" component={About} />
//             <Route path="*" component={NotFound} />
//         </div>
//     </BrowserRouter>
);
export default Routes;
