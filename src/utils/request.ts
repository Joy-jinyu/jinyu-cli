import axios from 'axios';
import { message } from 'antd';
import HOST_NAME from '../../api_host';

const TIMEOUT = 10000,
    SUCCESS_STATUS = 200;

const axiosIns = axios.create({
    baseURL: HOST_NAME,
    timeout: TIMEOUT
});

const PREFIX = '/api';

interface IParams {
    url: string;
    query?: { [name: string]: unknown };
    config?: { [name: string]: unknown };
    isDownLoad?: boolean;
}

interface IRequest {
    method: 'get' | 'post';
    url: string;
    options?: { [name: string]: unknown };
    config?: { [name: string]: unknown };
    isDownLoad?: boolean;
}
interface ErrnoException extends Error {
    data?: unknown;
    code?: number;
}

function request({
    method,
    url,
    options,
    config = {},
    isDownLoad = false
}: IRequest) {
    return new Promise(function (resolve, reject) {
        axiosIns[method](`${PREFIX}${url}`, options, config)
            .then(function (res) {
                const result = res.data;

                if (res && res.status === SUCCESS_STATUS) {
                    const data = res.data;
                    res.data = typeof data === 'undefined' ? {} : data;
                    if (res.data.code === 99) {
                        throw res.data.message;
                    }
                    if (isDownLoad) {
                        const contentDisposition =
                            res.headers['content-disposition'];
                        const filename = contentDisposition
                            ? contentDisposition.match(/filename=(.*)/)![1]
                            : 'download.csv';
                        const blob = new Blob([res.data], { type: 'text/csv' });
                        const elink = document.createElement('a');
                        elink.style.display = 'none';
                        elink.href = window.URL.createObjectURL(blob);
                        elink.download = filename;
                        elink.click();
                        URL.revokeObjectURL(elink.href);
                    }

                    resolve(res.data);
                } else {
                    const error: ErrnoException = new Error();
                    error.message = result.message;
                    error.data = res.data;
                    error.code = res.status;
                    throw error;
                }
            })
            .catch(function (error) {
                message.error(error);
                if (!axios.isCancel(error)) {
                    reject(error);
                }
            });
    });
}
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
        options: Object.assign(
            {
                ...query
            },
            config
        ),
        isDownLoad
    });
}

export default {
    get: get,
    post: post
};
