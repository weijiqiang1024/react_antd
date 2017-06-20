/**
 * bayonet reducer create by weijq 170612
 */

import { BAYONET_SERCH_SUBMIT, BAYONET_SERCH_SUCCESS, BAYONET_SERCH_FAIL, BayonetActionType } from '../actions/Bayonet';

const initailState = {
    // msg: '',
    // pageIndex: 1,
    // eqId:'',
    // eqName:'',
    // orggId:'',
    queryObj: {},
    // respData:{},
    bayonetData: []
    // respObj: {}
};

export default function Bayonet(state = initailState, action) {
    debugger;
    switch (action.type) {
        case BAYONET_SERCH_SUBMIT:
            return {
                ...state,
                queryObj: action.params,
            };
        case BAYONET_SERCH_SUCCESS:
            return {
                ...state,
                bayonetData: action.respData
            };
        case BAYONET_SERCH_FAIL:
            return {
                ...state,
                msg: action.msg
            };
        case BayonetActionType.BAYONET_ADD_SUBMIT:
            return {
                ...state,
                addObj: action.params
            };
        case BayonetActionType.BAYONET_ADD_SUCCESS:
            return {
                ...state,
                addresp: action.respData
            };
        case BayonetActionType.BAYONET_ADD_FAIL:
            return {
                ...state,
                msg: action.msg
            };
        case BayonetActionType.BAYONET_EDIT_SUBMIT:
            return {
                ...state,
                editObj: action.params
            };
        case BayonetActionType.BAYONET_EDIT_SUCCESS:
            return {
                ...state,
                editResp: action.respData
            };
        case BayonetActionType.BAYONET_EDIT_FAIL:
            return {
                ...state,
                msg: action.msg
            };
            case BayonetActionType.BAYONET_DELETE_SUBMIT:
            return {
                ...state,
                deleteId: action.params
            };
        case BayonetActionType.BAYONET_DELETE_SUCCESS:
            return {
                ...state,
                deleteResp: action.respData
            };
        case BayonetActionType.BAYONET_DELETE_FAIL:
            return {
                ...state,
                msg: action.msg
            };
        default:
            return state;
    }
}
