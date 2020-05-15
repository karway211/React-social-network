import * as serviceWorker from './serviceWorker';
// import store from './redux/redux-store';
// import { rerenderEntireTree } from './render';
// import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyJSApp from './App';
// import App from './App';
// import StoreContext from './storeContext';
// import {Provider} from 'react-redux';




ReactDOM.render(<MyJSApp />, document.getElementById('root'));
        



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
