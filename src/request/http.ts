import base from './base';
import axios, { AxiosRequestConfig } from 'axios';

// timeout
const instance = axios.create({
    timeout: 1000 * 10,
});
// 設置公共路徑
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

    return new Promise((resolve: (value: []) => void, reject) => {
        instance({
            url,
            method,
            data,
            params,
            headers,
        }).then((res) => {
            resolve(res.data)
        }).catch((err) => {
            reject(err);
        });
    });
};

export default Fetch;
