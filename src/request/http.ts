import axios, { AxiosRequestConfig } from 'axios';
import jsSHA from 'jssha'
import base from './base';
import config from './config'
// timeout
const instance = axios.create({
    timeout: 1000 * 10,
});
// 設置公共路徑
instance.defaults.baseURL = base.baseurl;

interface AxiosConfig extends AxiosRequestConfig {
    loading?: boolean;
}
const getAuthorizationHeader = () => {
    const AppID = config.AppID
    const AppKey = config.AppKey
    const GMTString = new Date().toUTCString()
    const ShaObj = new jsSHA('SHA-1', 'TEXT')
    ShaObj.setHMACKey(AppKey, 'TEXT')
    ShaObj.update('x-date: ' + GMTString)
    const HMAC = ShaObj.getHMAC('B64')
    const Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"'
    return { 'Authorization': Authorization, 'X-Date': GMTString } //如果要將js運行在伺服器，可額外加入 'Accept-Encoding': 'gzip'，要求壓縮以減少網路傳輸資料量
}
const Fetch = ({
    url = '',
    method = 'GET',
    data = {},
    params = {},
    headers = getAuthorizationHeader(),
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
        })
    })
}
export default Fetch
