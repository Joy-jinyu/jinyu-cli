import { AnyAction, createSlice, Dispatch } from '@reduxjs/toolkit';
import request from 'request';

export const walletDetailSlice = createSlice({
    name: 'walletDetail',
    initialState: {
        list: [],
        pageInfo: {
            pageStart: 1,
            pageSize: 10,
            totalElements: 10,
            totalPages: 1
        },
        info: {}
    },
    reducers: {
        updateInfo(state, { payload = {} }) {
            state.info = payload;
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
                info: {}
            });
        }
    }
});

export const { updateList, getInitState, updatePage, updateInfo } =
    walletDetailSlice.actions;
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
            getState: () => { main: any; walletDetail: any }
        ) => {
            const { main, walletDetail } = getState();
            const { pageInfo } = walletDetail;
            const { pageStart, pageSize } = pageInfo;
            const nfrIds = id ? id : main.routeParam.type;
            return request
                .post('/transactions/queryByPage',
                    { address: nfrIds, pageStart, pageSize }
                )
                .then((res: any) => {
                    return dispatch(updateList(res?.data));
                })
                .catch(e => {
                    console.log(e, 'err 11');
                });
        };
// 获取nfr数据
export const asyncGetNfrDetail =
    (id = '') =>
        async (dispatch: Dispatch<AnyAction>, getState: () => { main: any }) => {
            const { main } = getState();
            const walletId = id ? id : main.routeParam.type;
            const info: any = await request.post(
                '/dashboard/search',
                { address: walletId }
            );
            dispatch(updateInfo(info?.data || {}));
        };

// export const downTrans =
//     () =>
//     (dispatch: Dispatch<AnyAction>, getState: () => { walletDetail: any }) => {
//         const { walletDetail } = getState();
//         const { pageInfo, info } = walletDetail;
//         const { pageStart, pageSize } = pageInfo;
//         request.post({
//             url: '/sys/file/downloadFileByPage',
//             query: {
//                 file: {
//                     mapperId: 'transactionsService'
//                 },
//                 content: {
//                     address: info.address,
//                     pageStart,
//                     pageSize
//                 }
//             },
//             isDownLoad: true
//         });
//     };

export default walletDetailSlice.reducer;
