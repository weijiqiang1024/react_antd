/**
 * bayonet container create by weijq on 170612
 */
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Bayonet from '../pages/Bayonet';
import { bayonetSerchAction, BayonetActionFunc } from '../actions/Bayonet';

function mapStateToProps(state) {
    debugger;
    return {
        msg: state.Bayonet.msg,
        // eqId:state.Bayonet.eqId,
        queryObj: state.Bayonet.queryObj,
        addObj: state.Bayonet.addObj,
        editObj: state.Bayonet.editObj,
        deleteId:state.Bayonet.deleteId,
        bayonetData: state.Bayonet.bayonetData
    }
}

function mapDispatchToProps(dispatch) {
    debugger;
    return {
        onSerchData: (obj) => {
            dispatch(bayonetSerchAction(obj));
        },
        addBayonet: (obj) => {
            dispatch(BayonetActionFunc.bayonetAddAction(obj));
        },
        editBayonet: (obj) => {
            dispatch(BayonetActionFunc.bayonetEditAction(obj));
        },
        deleteBayonet: (id) => {
            dispatch(BayonetActionFunc.bayonetDeleteAction(id));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bayonet);
