import { AnyAction, createSlice, Dispatch } from '@reduxjs/toolkit';
import request from 'request';
export const BLOCK_TYPE = 'recentBlock';
export const TRANS_TYPE = 'recentTrans';

export const recentInfoSlice = createSlice({
    name: 'recentInfo',
    initialState: {
        list: [],
        pageInfo: {
            pageStart: 1,
            pageSize: 10,
            totalElements: 10,
            totalPages: 1
        }
    },
    reducers: {
        updateList(state, { payload = {} }) {
            const {
                responseList = [],
                pageStart,
                pageSize,
                totalElements,
                totalPages
            } = payload;
            state.list = responseList;
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
                }
            });
        }
    }
});

export const { updateList, getInitState, updatePage } = recentInfoSlice.actions;
// 修改table
export const changTable =
    (page: number, pageSize: number, pageType: string) =>
    async (dispatch: Dispatch<AnyAction | any>) => {
        dispatch(updatePage({ pageStart: page, pageSize }));
        dispatch(asyncGetPageList(pageType));
    };
// 获取页面总览数据
export const asyncGetPageList =
    (pageType = '') =>
    (
        dispatch: Dispatch<AnyAction>,
        getState: () => { main: any; recentInfo: any }
    ) => {
        const { main, recentInfo } = getState();
        const { pageInfo } = recentInfo;
        const { pageSize, pageStart } = pageInfo;
        const type = pageType ? pageType : main.routeParam.type;
        const url =
            type === BLOCK_TYPE
                ? '/block/queryByPage'
                : '/transactions/queryByPage';
        return request
            .post({ url, query: { pageSize, pageStart } })
            .then((res: any) => {
                return dispatch(updateList(res?.data));
            })
            .catch(e => {
                console.log(e);
            });
    };

export default recentInfoSlice.reducer;
