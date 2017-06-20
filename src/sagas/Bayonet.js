/**
 * create by weijq 170613
 */

import { fork, put, call, take, select ,takeEvery} from 'redux-saga/effects';

import { BAYONET_SERCH_SUBMIT, BAYONET_SERCH_SUCCESS, BAYONET_SERCH_FAIL ,BayonetActionType} from '../actions/Bayonet';
import { BayonetService } from '../dataFetch/Bayonet';

function* queryBayonetData() {

    try {
        //获取状态参数
        let params = yield select(state => state.Bayonet.queryObj);

        try {
            //请求数据   
            // debugger;
            const response = yield call(BayonetService.bayonetDataRequest, params);
            // debugger;
            if (response) {
                //请求失败执行失败action
                if (response.data.ret === 0)
                    yield put({ type: BAYONET_SERCH_FAIL });
                //请求成功执行成功action
                else yield put({ type: BAYONET_SERCH_SUCCESS,respData:response.data});
            }
        } catch (error) {
            // debugger;
            yield put({ type: BAYONET_SERCH_FAIL });

        }
    } catch (e) {

    }
}

function* addBayonetData() {

    try {
        //获取状态参数
        let params = yield select(state => state.Bayonet.addObj);

        try {
            //请求数据   
            // debugger;
            const response = yield call(BayonetService.addBayonetRequest, params);
             debugger;
            if (response) {
                //请求失败执行失败action
                if (response.data.ret === 0)
                
                    yield put({ type:BayonetActionType.BAYONET_ADD_FAIL,respData:response.data});
                //请求成功执行成功action
                else yield put({ type:BayonetActionType.BAYONET_ADD_SUCCESS,respData:response.data});
            }
        } catch (error) {
            // debugger;
            yield put({ type: BayonetActionType.BAYONET_ADD_FAIL });

        }
    } catch (e) {

    }
}

function* editBayonetData() {

    try {
        //获取状态参数
        debugger;
        let params = yield select(state => state.Bayonet.editObj);

        try {
            //请求数据   
            // debugger;
            const response = yield call(BayonetService.editBayonetRequest, params);
             debugger;
            if (response) {
                //请求失败执行失败action
                if (response.data.ret === 0)
                
                    yield put({ type:BayonetActionType.BAYONET_EDIT_FAIL,respData:response.data});
                //请求成功执行成功action
                else yield put({ type:BayonetActionType.BAYONET_EDIT_SUCCESS,respData:response.data});
            }
        } catch (error) {
            // debugger;
            yield put({ type: BayonetActionType.BAYONET_EDIT_FAIL });

        }
    } catch (e) {

    }
}

function* deleteBayonetData() {

    try {
        //获取状态参数
        debugger;
        let params = yield select(state => state.Bayonet.deleteId);

        try {
            //请求数据   
            // debugger;
            const response = yield call(BayonetService.deleteBayonetRequest, params);
             debugger;
            if (response) {
                //请求失败执行失败action
                if (response.data.ret === 0)
                
                    yield put({ type:BayonetActionType.BAYONET_DELETE_FAIL,respData:response.data});
                //请求成功执行成功action
                else yield put({ type:BayonetActionType.BAYONET_DELETE_SUCCESS,respData:response.data});
            }
        } catch (error) {
            // debugger;
            yield put({ type: BayonetActionType.BAYONET_DELETE_FAIL });

        }
    } catch (e) {

    }
}



export default function* rootSaga(){

    yield takeEvery(BAYONET_SERCH_SUBMIT,queryBayonetData);
    yield takeEvery(BayonetActionType.BAYONET_ADD_SUBMIT,addBayonetData);
    yield takeEvery(BayonetActionType.BAYONET_EDIT_SUBMIT,editBayonetData);    
    yield takeEvery(BayonetActionType.BAYONET_DELETE_SUBMIT,deleteBayonetData);    
     
}


