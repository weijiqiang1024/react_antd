/**
 * Created by zll on 2017/6/7.
 */
import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// import rootSaga from './sagas/Login';
 import rootSaga from './sagas/Bayonet';

import FullReducers from './reducers/FullReducers';
const loggerMiddleware = createLogger();
//创建saga middleware
//const sagaMiddleware = createSagaMiddleware(rootSaga());
const sagaMiddleware = createSagaMiddleware();

export default function Store(initialState) {
    const store = createStore(
        FullReducers,
        initialState,
        compose(
            applyMiddleware(sagaMiddleware, loggerMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ));
    //运行所有已经注册的saga
    sagaMiddleware.run(rootSaga);
    return store;

}