import { AnyAction, createSlice, Dispatch } from '@reduxjs/toolkit';
import request from 'request';

export const nfrDetailSlice = createSlice({
    name: 'nfrDetail',
    initialState: {
        list: [],
        pageInfo: {
            pageStart: 1,
            pageSize: 10,
            totalElements: 10,
            totalPages: 1
        },
        detail: {}
    },
    reducers: {
        updateDetail(state, { payload = {} }) {
            state.detail = payload || {};
        },
        updateList(state, { payload = {} }) {
            const {
                responseList = [],
                pageStart,
                pageSize,
                totalElements,
                totalPages
            } = payload;
            state.list = responseList.map((item: any) => ({
                key: item.createTime,
                ...item
            }));
            state.pageInfo = { pageStart, pageSize, totalElements, totalPages };
        },
        updatePage(state, { payload }) {
            const { pageInfo } = payload;
            state.pageInfo = { ...pageInfo, ...payload };
        },
        getInitState(state) {
            Object.assign(state, {
                list: [],
                pageInfo: {
                    pageStart: 1,
                    pageSize: 10,
                    totalElements: 10,
                    totalPages: 1
                },
                detail: {}
            });
        }
    }
});

export const { updateList, updatePage, getInitState, updateDetail } =
    nfrDetailSlice.actions;
// 修改table
export const changTable =
    (page: number, pageSize: number, hash: string) =>
    async (dispatch: Dispatch<AnyAction | any>) => {
        dispatch(updatePage({ pageStart: page, pageSize }));
        dispatch(asyncGetPageList(hash));
    };
// 获取页面总览数据
export const asyncGetPageList =
    (id = '') =>
    (
        dispatch: Dispatch<AnyAction>,
        getState: () => { main: any; nfrDetail: any }
    ) => {
        const { main, nfrDetail } = getState();
        const { pageInfo } = nfrDetail;
        const nfrIds = id ? id : main.routeParam.type;
        return request
            .post({
                url: '/transactions/queryByPage',
                query: { nfrIds, ...pageInfo }
            })
            .then((res: any) => {
                return dispatch(updateList(res?.data));
            })
            .catch(e => {
                console.log(e);
            });
    };
// 获取nfr数据
export const asyncGetNfrDetail =
    (id = '', address = '') =>
    (dispatch: Dispatch<AnyAction>, getState: () => { main: any }) => {
        const { main } = getState();
        const { type, address: contract } = main.routeParam;
        const tokenId = id ? id : type;
        const contractAddress = address ? address : contract;
        return request
            .post({
                url: '/nfr/queryInfo',
                query: { tokenId, contractAddress }
            })
            .then((res: any) => {
                return dispatch(updateDetail(res?.data || {}));
            })
            .catch(e => {
                console.log(e);
            });
    };

// export const downTrans =
//     () =>
//     (dispatch: Dispatch<AnyAction>, getState: () => { nfrDetail: any }) => {
//         const { nfrDetail } = getState();
//         const { pageInfo, detail } = nfrDetail;
//         const { pageStart, pageSize } = pageInfo;
//         request.post({
//             url: '/sys/file/downloadFileByPage',
//             query: {
//                 file: {
//                     mapperId: 'transactionsService'
//                 },
//                 content: {
//                     nfrIds: detail.nfrId,
//                     pageStart,
//                     pageSize
//                 }
//             },
//             isDownLoad: true
//         });
//     };

export default nfrDetailSlice.reducer;
