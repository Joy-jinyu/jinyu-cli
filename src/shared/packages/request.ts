/* eslint-disable no-underscore-dangle */
import axios, { AxiosResponse } from 'axios'
import qs from 'qs'
import { OvoRequest } from '../types/request'

function requestFulfilled(config: any) {
    if (['get', 'delete'].includes(config.method)) {
        // eslint-disable-next-line no-param-reassign
        config.paramsSerializer = (params: any) => qs.stringify(params, { arrayFormat: 'repeat' })
    }
    return config
}

function requestRejected(error: any) {
    Promise.reject(error)
}

function responseFulfilled(response: AxiosResponse) {
    const {
        data: { code, data, message },
        status
    } = response
    const { isOrigin, isDownLoad } = response.config.headers || {}

    if (status === 200) {
        if (isOrigin) {
            return response
        } else if (code === 99) {
            return Promise.reject(message)
        } else if (isDownLoad) {
            const contentDisposition =
                response.headers['content-disposition'];
            const filename = contentDisposition
                ? contentDisposition.match(/filename=(.*)/)![1]
                : 'download.csv';
            const blob = new Blob([response.data], { type: 'text/csv' });
            const elink = document.createElement('a');
            elink.style.display = 'none';
            elink.href = window.URL.createObjectURL(blob);
            elink.download = filename;
            elink.click();
            URL.revokeObjectURL(elink.href);
        }
    } else {
        return Promise.reject({
            message,
            data,
            status
        })
    }
    return data
}

function responseRejected(error: any) {
    const { response } = error
    console.log(error)
    return Promise.reject(response)
}

function loadConfig(config: OvoRequest.Config = {}) {
    const { timeout = 5 * 60 * 1000, baseURL = '' } = config
    console.log(baseURL)
    const axiosInstance = axios.create({
        baseURL,
        timeout
    }) as OvoRequest.SystemAxiosInsance

    axiosInstance.interceptors.request.use(requestFulfilled, requestRejected)
    axiosInstance.interceptors.response.use(responseFulfilled, responseRejected)
    return axiosInstance
}

class SingleAxios {
    static _axios: OvoRequest.SystemAxiosInsance

    static getInstance(config: OvoRequest.Config) {
        if (!this._axios) {
            this._axios = loadConfig(config)
        }
        return this._axios
    }
}

export default SingleAxios
