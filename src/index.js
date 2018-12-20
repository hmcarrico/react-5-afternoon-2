import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import store from './ducks/store';
import {Provider} from 'react-redux';
import {BrowserRouter as HashRouter} from 'react-router-dom';

ReactDOM.render(
 <Provider store={store}>
    <HashRouter>
        <App />
    </HashRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();

