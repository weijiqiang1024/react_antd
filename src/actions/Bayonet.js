/**
 * bayonet action create by weijq 170312
 */

export const BAYONET_SERCH_SUBMIT = 'BAYONET_SERCH_SUBMIT';

export const BAYONET_SERCH_SUCCESS = 'BAYONET_SERCH_SUCCESS';

export const BAYONET_SERCH_FAIL = 'BAYONET_SERCH_FAIL';

export function bayonetSerchAction(paramsObj) {
    return {
        type: BAYONET_SERCH_SUBMIT,
        params: paramsObj
    }
}

export function serchSuccessAction(repsData) {
    return {
        type: BAYONET_SERCH_SUCCESS,
        respData: repsData
    }
}

export function serchFailAction(msg) {
    return {
        type: BAYONET_SERCH_FAIL,
        msg: msg
    }
}

export const BayonetActionType = {

    BAYONET_ADD_SUBMIT: 'BAYONET_ADD_SUBMIT',

    BAYONET_ADD_SUCCESS: 'BAYONET_ADD_SUCCESS',

    BAYONET_ADD_FAIL: 'BAYONET_ADD_FAIL',

    BAYONET_EDIT_SUBMIT:'BAYONET_EDIT_SUBMIT',

    BAYONET_EDIT_SUCCESS:'BAYONET_EDIT_SUCCESS',

    BAYONET_EDIT_FAIL:'BAYONET_EDIT_FAIL',

    BAYONET_DELETE_SUBMIT:'BAYONET_DELETE_SUBMIT',

    BAYONET_DELETE_SUCCESS:'BAYONET_DELETE_SUCCESS',

    BAYONET_DELETE_FAIL:'BAYONET_DELETE_FAIL',


}

export const BayonetActionFunc = {

    bayonetAddAction: (paramsObj) => {
        return {
            type: BayonetActionType.BAYONET_ADD_SUBMIT,
            params: paramsObj
        }
    },

    addSuccessAction: (repsData) => {
        return {
            type: BayonetActionType.BAYONET_ADD_SUCCESS,
            respData: repsData
        }
    },
    addFailAction: (msg) => {
        return {
            type: BayonetActionType.BAYONET_ADD_FAIL,
            msg: msg
        }
    },

     bayonetEditAction: (paramsObj) => {
        return {
            type: BayonetActionType.BAYONET_EDIT_SUBMIT,
            params: paramsObj
        }
    },

    editSuccessAction: (repsData) => {
        return {
            type: BayonetActionType.BAYONET_EDIT_SUCCESS,
            respData: repsData
        }
    },
    editFailAction: (msg) => {
        return {
            type: BayonetActionType.BAYONET_EDIT_FAIL,
            msg: msg
        }
    },
    bayonetDeleteAction: (paramsObj) => {
        return {
            type: BayonetActionType.BAYONET_DELETE_SUBMIT,
            params: paramsObj
        }
    },

    deleteSuccessAction: (repsData) => {
        return {
            type: BayonetActionType.BAYONET_DELETE_SUCCESS,
            respData: repsData
        }
    },
    deleteFailAction: (msg) => {
        return {
            type: BayonetActionType.BAYONET_DELETE_FAIL,
            msg: msg
        }
    }


}

