import axios from 'axios';
import { message } from 'antd';
import HOST_NAME from '../../api_host';
const TIMEOUT = 10000,
    SUCCESS_STATUS = 200;

let axiosIns = axios.create({
    timeout: TIMEOUT
})
const PREFIX = '/api';
interface IParams {
    url: string;
    query?: any;
    config?: any
    isDownLoad?: any
}
// @ts-ignore
function request({ method, url, options, config = {}, isDownLoad = false }) {
    return new Promise(function (resolve, reject) {
        // @ts-ignore
        axiosIns[method](`${HOST_NAME}${PREFIX}${url}`, options, config).then(function (res) {
            let result = res.data,
                error;

            if (res && res.status === SUCCESS_STATUS) {
                const data = res.data;
                res.data = typeof data === 'undefined' ? {} : data;
                if (res.data.code === 99) {
                    throw res.data.message
                }
                if (isDownLoad) {
                    const filename = res.headers['content-disposition']?.match(
                        /filename=(.*)/
                    )[1];
                    const blob = new Blob([res.data], { type: 'text/csv' });
                    let elink = document.createElement("a");
                    elink.style.display = "none";
                    elink.href = window.URL.createObjectURL(blob);
                    elink.download = filename;
                    elink.click();
                    URL.revokeObjectURL(elink.href);
                    // document.body.removeChild(elink);
                }
                resolve(res.data);
            } else {
                error = new Error()
                error.message = result.message
                // @ts-ignore
                error.data = res.data
                // @ts-ignore
                error.code = res.status;
                throw error;
            }
            // @ts-ignore
        }).catch(function (error) {
            message.error(error);
            if (!axios.isCancel(error)) {
                reject(error);
            }
        });
    });
}
// @ts-ignore
function get(params: IParams) {
    const { url, query, config, isDownLoad } = params;
    return request({
        method: 'get',
        url,
        options: query || {},
        config,
        isDownLoad
    });
}

function post(params: IParams) {
    const { url, query, config, isDownLoad } = params;
    return request({
        method: 'post',
        url,
        options: Object.assign({
            ...query
        }, config),
        isDownLoad
    });
}

export default {
    get: get,
    post: post
}