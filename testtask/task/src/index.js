import "core-js/stable";
import "regenerator-runtime/runtime";
import "react-app-polyfill/ie11";

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';


import App from './components/app';
import Erorb from './components/erorb';
import {MyProvider} from './components/context';
import MainServise from './servisec';
import store from './store';

const mainServise = new MainServise();

ReactDOM.render(
    <Provider store = {store}>
        <Erorb>
            <MyProvider value={mainServise}>
                <Router>
                    <App/>
                </Router>
            </MyProvider>
        </Erorb>
    </Provider>, document.getElementById('root')
)

