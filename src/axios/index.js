/* eslint-disable */
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3002/";
axios.defaults.timeout = 500000;
//请求拦截器
//请求拦截器,加上token登陆参数
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
//返回拦截器

//get请求
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            });
    });
}
//post请求
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, data)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            });
    });
}