import base from './base';
import axios, { AxiosRequestConfig } from 'axios';

//timeout
const instance = axios.create({
    timeout: 1000 * 10,
});
// 设置公共路径 和 Content-Type
instance.defaults.baseURL = base.baseurl;

interface AxiosConfig extends AxiosRequestConfig {
    loading?: boolean;
}

const Fetch = ({
    url = '',
    method = 'GET',
    data = {},
    params = {},
    headers = {
        'Content-Type': 'application/json',
    },
    loading = true,
}: AxiosConfig) => {
    if (loading) {
        // loading
    }

    return new Promise((resolve, reject) => {
        instance({
            url,
            method,
            data,
            params,
            headers,
        }).then((res) => {
            resolve(res.data.data);
        }).catch((err) => {
            reject(err);
        });
    });
};

export default Fetch;
