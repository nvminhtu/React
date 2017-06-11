import {createStore} from 'redux';
import Reducer from './Reducer.jsx';
let Store = createStore(Reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default Store;
