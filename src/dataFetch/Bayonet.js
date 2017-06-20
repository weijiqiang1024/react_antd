/**
 * bayonet fetch date create by weijq on 170613
 */

import axios from 'axios';
import { config } from './baseConfig';

export const BayonetService = {

    //数据查询
    bayonetDataRequest: (paramsData) => {
        debugger;
        return new Promise(function (resolve, reject) {
            axios.post('/api/sysSet/equipment/kaDevice/list', paramsData, config)
                .then(function (res) {
                    // debugger;
                    resolve(res);
                })
                .catch(function (err) {
                    // debugger;
                    reject(err);
                })
        });
    },

    //添加卡口
    addBayonetRequest: (paramsData) => {
        debugger;
        return new Promise(function (resolve, reject) {
            axios.post('/api/sysSet/equipment/kaDevice/add', paramsData, config)
                .then(function (res) {
                    // debugger;
                    resolve(res);
                })
                .catch(function (err) {
                    // debugger;
                    reject(err);
                })
        });
    },

    //添加卡口
    editBayonetRequest: (paramsData) => {
        debugger;
        return new Promise(function (resolve, reject) {
            axios.post('/api/sysSet/equipment/kaDevice/update', paramsData, config)
                .then(function (res) {
                    // debugger;
                    resolve(res);
                })
                .catch(function (err) {
                    // debugger;
                    reject(err);
                })
        });
    },

    //添加卡口
    deleteBayonetRequest: (paramsData) => {
        debugger;
        return new Promise(function (resolve, reject) {
            axios.post('/api/sysSet/equipment/kaDevice/delete', paramsData, config)
                .then(function (res) {
                    // debugger;
                    resolve(res);
                })
                .catch(function (err) {
                    // debugger;
                    reject(err);
                })
        });
    }
}