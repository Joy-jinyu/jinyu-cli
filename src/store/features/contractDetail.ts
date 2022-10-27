import { AnyAction, createSlice, Dispatch } from '@reduxjs/toolkit';
import request from 'request';

export const contractDetailSlice = createSlice({
    name: 'contractDetail',
    initialState: {
        list: [],
        pageInfo: {
            pageStart: 1,
            pageSize: 10,
            totalElements: 10,
            totalPages: 1
        },
        detail: {},
        info: {}
    },
    reducers: {
        updateInfo(state, { payload }) {
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
                detail: {},
                info: {}
            });
        }
    }
});

export const { updateList, updatePage, getInitState, updateInfo } =
    contractDetailSlice.actions;
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
        getState: () => { main: any; contractDetail: any }
    ) => {
        const { main, contractDetail } = getState();
        const { pageInfo } = contractDetail;
        const nfrIds = id ? id : main.routeParam.type;
        return request
            .post({
                url: '/transactions/queryByPage',
                query: { address: nfrIds, ...pageInfo }
            })
            .then((res: any) => {
                return dispatch(updateList(res?.data || {}));
            })
            .catch(e => {
                console.log(e);
            });
    };
// 获取nfr数据
export const asyncGetContractDetail =
    (id = '') =>
    async (dispatch: Dispatch<AnyAction>, getState: () => { main: any }) => {
        const { main } = getState();
        const nfrIds = id ? id : main.routeParam.type;
        const res: any = await request.post({
            url: '/dashboard/search',
            query: { address: nfrIds }
        });
        dispatch(updateInfo(res?.data || {}));
    };

// export const downTrans =
//     () =>
//     (dispatch: Dispatch<AnyAction>, getState: () => { blockHeight: any }) => {
//         const { blockHeight } = getState();
//         const { pageInfo, info } = blockHeight;
//         const { pageStart, pageSize } = pageInfo;
//         request.post({
//             url: '/sys/file/downloadFileByPage',
//             query: {
//                 file: {
//                     mapperId: 'transactionsService'
//                 },
//                 content: {
//                     blockHeight: info.address,
//                     pageStart,
//                     pageSize
//                 }
//             },
//             isDownLoad: true
//         });
//     };

export default contractDetailSlice.reducer;
