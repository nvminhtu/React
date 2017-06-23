import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Demo from './components/Demo.jsx';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Demo />, document.getElementById('root'));
registerServiceWorker();
