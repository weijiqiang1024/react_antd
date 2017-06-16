/**
 * Created by zll on 2017/6/7.
 */
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loginSubmit} from '../actions/Login';
import Login from '../pages/Login';

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        loading: state.Login.loading,
        msg: state.Login.msg,
        userInfo: state.Login.userInfo,
        isSuccess:state.Login.isSuccess,
        isFail:state.Login.isFail
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    //debugger;
    return {
        onIncreaseClick: (n,p) => {
            dispatch(loginSubmit(n,p))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);