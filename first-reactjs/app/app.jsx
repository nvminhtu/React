
import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import {Provider} from 'react-redux';
import Store from './Store.jsx'
ReactDOM.render(
    <Provider store={Store}>
        <List />
    </Provider>,
    document.getElementById('root')
);
var values = { a: 1 };
function impureFunction ( items ) {
  var b = 1;
  items.a = items.a * b + 2;
  return items.a;
}
var c = impureFunction( values );
console.log('impureFunction',c);
function pureFunction ( a ) {
  var b = 1;

  a = a * b + 2;

  return a;
}

var d = pureFunction( values.a );

console.log('pureFunction',d);
