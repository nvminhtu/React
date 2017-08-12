import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { Dog } from './Dog';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
var dog = new Dog();
console.log(dog.sum(3,4));
registerServiceWorker();
