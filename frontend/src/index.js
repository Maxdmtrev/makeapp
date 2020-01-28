import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import {createStore} from 'redux';
import reducers from './redux/reducer';
import {Provider} from 'react-redux';
import '../src/app.css';
import {GetMapAC} from './redux/creators';



const store = createStore (reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ ());

window.onLoad = () => {
  store.dispatch(GetMapAC(window.ymaps))
}

ReactDOM.render (<Provider store={store}><Router/></Provider>, document.getElementById ('root'));