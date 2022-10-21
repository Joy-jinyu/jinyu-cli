import { createSlice } from '@reduxjs/toolkit';
import request from 'request';

export const nfrDetailSlice = createSlice({
    name: 'nfrDetail',
    initialState: {
        list: [],
        pageInfo: {
            pageStart: 1,
            pageSize: 10,
            totalElements: 10,
            totalPages: 1,
        },
        detail: {}
    },
    reducers: {
        updateDetail(state, { payload = {} }) {
            state.detail = payload || {};
        },
        updateList(state, { payload = {} }) {
            const { responseList = [], pageStart, pageSize, totalElements, totalPages } = payload;
            state.list = responseList.map(item => ({ key: item.createTime, ...item }));
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
                    totalPages: 1,
                },
                detail: {}
            });
        }
    },
});

export const { updateList, updatePage, getInitState, updateDetail } = nfrDetailSlice.actions;
// 修改table
export const changTable = (page, pageSize, hash) => async (dispatch) => {
    dispatch(updatePage({ pageStart: page, pageSize }));
    dispatch(asyncGetPageList(hash));
}
// 获取页面总览数据
export const asyncGetPageList = (id = '') => (dispatch: any, getState) => {
    const { main, nfrDetail } = getState();
    const { pageInfo } = nfrDetail;
    const nfrIds = id ? id : main.routeParam.type;
    return request.post({ url: '/transactions/queryByPage', query: { nfrIds, ...pageInfo } })
        .then(res => {
            return dispatch(updateList(res?.data));
        }).catch((e) => {
            console.log(e);
        })
}
// 获取nfr数据
export const asyncGetNfrDetail = (id = '') => (dispatch: any, getState) => {
    const { main, nfrDetail } = getState();
    const { pageInfo } = nfrDetail;
    const nfrIds = id ? id : main.routeParam.type;
    return request.post({ url: '/nfr/queryInfo', query: { tokenId: nfrIds } })
        .then(res => {
            return dispatch(updateDetail(res?.data));
        }).catch((e) => {
            console.log(e);
        })
}

export const downTrans = () => (dispatch: any, getState) => {
    const { nfrDetail } = getState();
    const { pageInfo, detail } = nfrDetail;
    const { pageStart, pageSize } = pageInfo;
    request.post({
        url: '/sys/file/downloadFileByPage',
        query: {
            file: {
                mapperId: "transactionsService",
            },
            content: {
                nfrIds: detail.nfrId,
                pageStart,
                pageSize
            }
        },
        isDownLoad: true
    })
}

export default nfrDetailSlice.reducer;