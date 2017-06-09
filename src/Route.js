/**
 * Created by zll on 2017/6/7.
 */
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import Store from './Store';
import AppMaster from './components/AppMaster';
import Login from './containers/Login';
import Home from './Home';
export default class Routes extends Component {
    render() {
        return (
            <Provider store={Store()}>
                <BrowserRouter >
                    <div>
                        <Route exact strict path="/" component={Login}/>
                        <Route path="/Home" component={Home}/>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}