/**
 * Created by zll on 2017/6/7.
 */
import {LOGIN_SUBMIT,LOGIN_FAIL,LOGIN_SUCCESS} from '../actions/Login';

const initState = {
    loading: false,
    name:'zll',
    pwd:'123',
    msg: '',
    userInfo:{},
    isSuccess:false,
    isFail:'none'
};

export default function Login(state = initState, action) {

    switch (action.type) {
        case LOGIN_SUBMIT:
            return  {
                ...state,
                name: action.name,
                pwd:action.pwd,
                loading:true
            };
        case LOGIN_SUCCESS:
            debugger;
            return  {
                ...state,
                loading: false,
                userInfo:action.userInfo,
                isSuccess:true
            };
        case LOGIN_FAIL:
            debugger;
            return  {
                ...state,
                loading: false,
                isFail:'block',
                isSuccess:false,
                msg:action.msg
            };
        default:
            return state;
    }
}