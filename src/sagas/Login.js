
import { fork,call, put, take, select } from 'redux-saga/effects';

import {LOGIN_SUBMIT,LOGIN_FAIL,LOGIN_SUCCESS} from '../actions/Login';
import {loginSubmit} from '../dataFetch/Login'
function* load() {
    try {
        //debugger;
        let param=  yield select(state => state.Login);
        debugger;
        try {
            const response = yield call(loginSubmit, {userName:param.name,pwd:param.pwd});
            debugger;
            if (response) {
                if(response.data.ret==0)
                    yield put({type:LOGIN_FAIL});
               else yield put({type:LOGIN_SUCCESS});
            }
        } catch (error) {
            debugger;
            console.error(error);
            yield put({type:LOGIN_FAIL});
        }

    } catch (e) {

    }
}
export default function* rootSaga() {
    while (true) {

        yield take(LOGIN_SUBMIT);
        debugger;
        yield fork(load);

    }
}

