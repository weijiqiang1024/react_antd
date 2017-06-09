/**
 * Created by zll on 2017/6/7.
 */
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export function loginSubmit(name,pwd) {
    return {
        type: LOGIN_SUBMIT,
        name:name,
        pwd:pwd
    }
}

export function loginSuccess(userInfo) {
    return {
        type: LOGIN_SUCCESS,
        userInfo:userInfo
    }
}

export function loginFail(msg) {
    return {
        type: LOGIN_FAIL,
        msg:msg
    }
}