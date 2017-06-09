/**
 * Created by zll on 2017/6/8.
 */
import axios from 'axios';
import {config} from './baseConfig';
//var paramData={};
export function loginSubmit(paramData) {
    return new Promise(function(resolve,reject){
        debugger;
        axios.post('/authLogin/login',paramData,config)
            .then(function(res){
                debugger;
                resolve(res);//在异步操作成功时调用
            })
            .catch(function(error){
                debugger;
                reject(error);//在异步操作失败时调用

            });
    });
}
