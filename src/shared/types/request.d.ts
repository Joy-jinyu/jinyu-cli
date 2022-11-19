import { AxiosInstance, AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse } from 'axios'

/* eslint-disable no-unused-vars */
declare namespace OvoRequest {
    interface ResponseData {
        // 目标数据集
        data?: any
        // 错误是什么
        error?: string
        // 是否成功
        success?: boolean

        // 错误信息
        message?: string
        // 错误码
        status?: number
    }

    interface Config {
        timeout?: number // 请求超时时间5分钟
        baseURL?: string // api的base_url
    }


    interface SystemAxiosInsance extends AxiosInstance {
        interceptors: {
            request: AxiosInterceptorManager<AxiosRequestConfig>
            response: AxiosInterceptorManager<SystemAxiosResponse>
        }
        get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<T> | Promise<R>;
        post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> | Promise<R>;
    }


    type Method =
        | 'get'
        | 'delete'
        | 'post'
        | 'put'
}
