/**
 * Created by zll on 2017/6/8.
 */

import Qs from 'qs';
export const config={
    // 基础url前缀
    baseURL: 'http://192.168.10.139:3300',
    // transformRequest: [function (data) {
    //     // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
    //     data = Qs.stringify({});
    //     return data;
    // }],
    transformRequest: [function (data) {
        // Do whatever you want to transform the data
        let ret = '';
        for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
    }],


    transformResponse: [function (data) {
        // 这里提前处理返回的数据
        return data;
    }],

    // 请求头信息
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },

    //parameter参数
    params: {
        ID: 12345
    },
    mode : 'cors' ,
    //设置超时时间
    timeout: 5000,
    //返回数据类型
    responseType: 'json', // default
    withCredentials:true

};