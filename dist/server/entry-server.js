"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var ReactDOMServer = require("react-dom/server");
var server = require("react-router-dom/server");
var reactRouterDom = require("react-router-dom");
var jsxRuntime = require("react/jsx-runtime");
var React = require("react");
var antd = require("antd");
var icons = require("@ant-design/icons");
var axios = require("axios");
var reactRedux = require("react-redux");
var toolkit = require("@reduxjs/toolkit");
var plots = require("@ant-design/plots");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var ReactDOMServer__default = /* @__PURE__ */ _interopDefaultLegacy(ReactDOMServer);
var React__default = /* @__PURE__ */ _interopDefaultLegacy(React);
var axios__default = /* @__PURE__ */ _interopDefaultLegacy(axios);
function Header() {
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    className: "page-header",
    children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
      to: "/",
      children: "Free Chain"
    })
  });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    className: "footer",
    children: [/* @__PURE__ */ jsxRuntime.jsx("p", {
      className: "footer-title",
      children: "FreeScan"
    }), /* @__PURE__ */ jsxRuntime.jsx("p", {
      className: "footer-content",
      children: "Block explorer for FreeChain, a new blockchain built for the next generation of NFR"
    })]
  });
}
var index$b = "";
function __variableDynamicImportRuntime0__(path) {
  switch (path) {
    default:
      return new Promise(function(resolve, reject) {
        (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
          reject.bind(null, new Error("Unknown variable dynamic import: " + path))
        );
      });
  }
}
function Layout(props) {
  const {
    routes
  } = props;
  return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Routes, {
    children: routes.map((route2) => {
      const {
        path = "",
        PageComponent,
        exact = true,
        redirect
      } = route2;
      if (redirect) {
        return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Navigate, {
          replace: true,
          to: redirect
        });
      }
      const Component = PageComponent && (typeof PageComponent === "string" ? /* @__PURE__ */ jsxRuntime.jsx(React__default["default"].Suspense, {
        fallback: /* @__PURE__ */ jsxRuntime.jsx("p", {
          children: "loading"
        }),
        children: React__default["default"].lazy(() => __variableDynamicImportRuntime0__(`../../pages/${PageComponent}.tsx`))
      }) : PageComponent);
      const MyRender = (props2) => /* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: "page-layout",
        children: [/* @__PURE__ */ jsxRuntime.jsx(Header, {}), /* @__PURE__ */ jsxRuntime.jsx("div", {
          className: "content",
          children: /* @__PURE__ */ jsxRuntime.jsx(Component, {
            ...props2
          })
        }), /* @__PURE__ */ jsxRuntime.jsx(Footer, {})]
      });
      return /* @__PURE__ */ React.createElement(reactRouterDom.Route, {
        ...props,
        path,
        key: path,
        element: /* @__PURE__ */ jsxRuntime.jsx(MyRender, {})
      });
    })
  });
}
function CopyText(props) {
  function copy(data) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(data);
    } else {
      const textarea = document.createElement("textarea");
      textarea.setAttribute("readonly", "readonly");
      textarea.value = data;
      document.body.appendChild(textarea);
      textarea.select();
      if (document.execCommand) {
        document.execCommand("copy");
      }
      textarea.style.display = "none";
    }
    antd.message.success("\u590D\u5236\u6210\u529F");
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    children: [/* @__PURE__ */ jsxRuntime.jsx("span", {
      style: {
        marginRight: 8
      },
      children: props.children
    }), /* @__PURE__ */ jsxRuntime.jsx(icons.CopyOutlined, {
      onClick: () => {
        copy(props.text);
      }
    })]
  });
}
const APIHOST = {
  local: "http://localhost:8888",
  uat: "http://192.168.0.198:8888"
};
let HOST_NAME = "";
const NODE_ENV = typeof process !== "undefined" ? process.env.NODE_ENV : window.LOCAL_ENV;
HOST_NAME = APIHOST[NODE_ENV.toLocaleLowerCase()];
var HOST_NAME$1 = HOST_NAME;
const TIMEOUT = 1e4, SUCCESS_STATUS = 200;
const axiosIns = axios__default["default"].create({
  baseURL: HOST_NAME$1,
  timeout: TIMEOUT
});
const PREFIX = "/api";
function request({
  method,
  url,
  options,
  config = {},
  isDownLoad = false
}) {
  return new Promise(function(resolve, reject) {
    axiosIns[method](`${PREFIX}${url}`, options, config).then(function(res) {
      const result = res.data;
      if (res && res.status === SUCCESS_STATUS) {
        const data = res.data;
        res.data = typeof data === "undefined" ? {} : data;
        if (res.data.code === 99) {
          throw res.data.message;
        }
        if (isDownLoad) {
          const contentDisposition = res.headers["content-disposition"];
          const filename = contentDisposition ? contentDisposition.match(/filename=(.*)/)[1] : "download.csv";
          const blob = new Blob([res.data], { type: "text/csv" });
          const elink = document.createElement("a");
          elink.style.display = "none";
          elink.href = window.URL.createObjectURL(blob);
          elink.download = filename;
          elink.click();
          URL.revokeObjectURL(elink.href);
        }
        resolve(res.data);
      } else {
        const error = new Error();
        error.message = result.message;
        error.data = res.data;
        error.code = res.status;
        throw error;
      }
    }).catch(function(error) {
      antd.message.error(error);
      if (!axios__default["default"].isCancel(error)) {
        reject(error);
      }
    });
  });
}
function get(params) {
  const { url, query, config, isDownLoad } = params;
  return request({
    method: "get",
    url,
    options: query || {},
    config,
    isDownLoad
  });
}
function post(params) {
  const { url, query, config, isDownLoad } = params;
  return request({
    method: "post",
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
var request$1 = {
  get,
  post
};
function useSearchNavigate() {
  const navigate = reactRouterDom.useNavigate();
  const jumpToAddress = React.useCallback((address) => {
    request$1.post({
      url: "/dashboard/search",
      query: {
        address
      }
    }).then((res) => {
      const {
        code,
        address: address2,
        message = ""
      } = (res == null ? void 0 : res.data) || {};
      switch (code) {
        case 0:
          navigate(`/walletDetail/${address2}`);
          break;
        case 1:
          navigate(`/contractDetail/${address2}`);
          break;
        case 2:
          navigate(`/transaction/${address2}`);
          break;
        case 3:
          navigate(`/blockHeight/${address2}`);
          break;
        default:
          return "";
      }
    }).catch((e) => {
    });
  }, []);
  return jumpToAddress;
}
var index$a = "";
const Search = antd.Input.Search;
function CommonSearch(props) {
  const jumpToAddress = useSearchNavigate();
  const {
    type = ""
  } = reactRouterDom.useParams();
  const onSearch = React.useCallback((address) => {
    if (type === address) {
      return;
    }
    jumpToAddress(address);
  }, [type]);
  return /* @__PURE__ */ jsxRuntime.jsx(Search, {
    className: "common-search-btn",
    placeholder: "\u641C\u7D22\u94B1\u5305\u5730\u5740/\u8F6C\u8D26\u54C8\u5E0C/\u5408\u7EA6/\u533A\u5757\u9AD8\u5EA6",
    onSearch
  });
}
const formatSeconds = (value) => {
  let second = Math.floor(value);
  let minute = 0;
  let hour = 0;
  if (second > 60) {
    minute = Math.floor(second / 60);
    second = Math.floor(second % 60);
    if (minute > 60) {
      hour = Math.floor(minute / 60);
      minute = Math.floor(minute % 60);
    }
  }
  let result = "" + Math.floor(second) + "s";
  if (minute > 0) {
    result = "" + Math.floor(minute) + "m" + result;
  }
  if (hour > 0) {
    result = "" + Math.floor(hour) + "h" + result;
  }
  return result;
};
const isEmptyObj = (obj = {}) => {
  return !Object.keys(obj).length;
};
const TEXT_MAX_LEN = 12;
const TEXT_SPLIT_LEN = 6;
const overLenTextShow = (text = "", replaceStr = "...") => {
  if (text.length > TEXT_MAX_LEN) {
    return text.replace(text.slice(TEXT_SPLIT_LEN, text.length - TEXT_SPLIT_LEN), replaceStr);
  }
  return text;
};
const SCENDS = 1e3;
const scendsTakenTo = (times) => {
  return Math.ceil((new Date().getTime() - times) / SCENDS);
};
function NavigateAddress(props) {
  const {
    address
  } = props;
  const jumpToAddress = useSearchNavigate();
  const handleBtn = React.useCallback(() => {
    jumpToAddress(address);
  }, [address]);
  return /* @__PURE__ */ jsxRuntime.jsx(antd.Button, {
    style: {
      paddingLeft: 0
    },
    ...props,
    type: "link",
    onClick: handleBtn,
    children: overLenTextShow(address)
  });
}
const mainSlice = toolkit.createSlice({
  name: "main",
  initialState: {
    routeParam: {},
    pathname: ""
  },
  reducers: {
    updateRoute(state, { payload }) {
      const { params, pathname } = payload;
      state.routeParam = params;
      state.pathname = pathname;
    }
  }
});
const { updateRoute } = mainSlice.actions;
var main = mainSlice.reducer;
const homeSlice = toolkit.createSlice({
  name: "home",
  initialState: {
    countDetail: {},
    lastBlock: [],
    lastTransactions: []
  },
  reducers: {
    getCountDetail(state, { payload = {} }) {
      state.countDetail = payload;
    },
    getLastBlock(state, { payload = {} }) {
      const { responseList = [] } = payload;
      console.log(responseList);
      state.lastBlock = responseList.map((item) => ({
        ...item,
        scendsTakenTo: scendsTakenTo(
          new Date(item.createTime).getTime()
        )
      }));
    },
    getLastTransactions(state, { payload = {} }) {
      const { responseList = [] } = payload;
      state.lastTransactions = responseList.map((item) => ({
        ...item,
        scendsTakenTo: scendsTakenTo(
          new Date(item.createTime).getTime()
        )
      }));
    },
    getInitState(state) {
      Object.assign(state, {
        countDetail: {},
        lastBlock: [],
        lastTransactions: []
      });
    }
  }
});
const {
  getInitState: getInitState$6,
  getCountDetail,
  getLastBlock,
  getLastTransactions
} = homeSlice.actions;
const asyncGetCountDetail = () => (dispatch) => {
  return request$1.get({ url: "/dashboard/countDetail" }).then((res) => {
    return dispatch(getCountDetail(res == null ? void 0 : res.data));
  }).catch((e) => {
    console.log(e);
  });
};
const asyncGetLastBlock = () => (dispatch) => {
  return request$1.get({ url: "/block/getLastBlock" }).then((res) => {
    return dispatch(getLastBlock(res == null ? void 0 : res.data));
  }).catch((e) => {
    console.log(e);
  });
};
const asyncGetLastTransactions = () => (dispatch) => {
  return request$1.get({ url: "/transactions/getLastTransactions" }).then((res) => {
    return dispatch(getLastTransactions(res == null ? void 0 : res.data));
  }).catch((e) => {
    console.log(e);
  });
};
var home = homeSlice.reducer;
const BLOCK_TYPE$1 = "recentBlock";
const recentInfoSlice = toolkit.createSlice({
  name: "recentInfo",
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
      const { responseList = [], pageStart, pageSize, totalElements, totalPages } = payload;
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
const { updateList: updateList$4, getInitState: getInitState$5, updatePage: updatePage$4 } = recentInfoSlice.actions;
const changTable$4 = (page, pageSize, pageType) => async (dispatch) => {
  dispatch(updatePage$4({ pageStart: page, pageSize }));
  dispatch(asyncGetPageList$4(pageType));
};
const asyncGetPageList$4 = (pageType = "") => (dispatch, getState) => {
  const { main: main2, recentInfo: recentInfo2 } = getState();
  const { pageInfo } = recentInfo2;
  const { pageSize, pageStart } = pageInfo;
  const type = pageType ? pageType : main2.routeParam.type;
  const url = type === BLOCK_TYPE$1 ? "/block/queryByPage" : "/transactions/queryByPage";
  return request$1.post({ url, query: { pageSize, pageStart } }).then((res) => {
    return dispatch(updateList$4(res == null ? void 0 : res.data));
  }).catch((e) => {
    console.log(e);
  });
};
var recentInfo = recentInfoSlice.reducer;
const blockHeightSlice = toolkit.createSlice({
  name: "blockHeight",
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
    updateList(state, { payload = {} }) {
      const { responseList = [], pageStart, pageSize, totalElements, totalPages } = payload;
      state.list = responseList.map((item) => ({ key: item.createTime, ...item }));
      state.pageInfo = { pageStart, pageSize, totalElements, totalPages };
    },
    updatePage(state, { payload = {} }) {
      const { pageInfo } = payload;
      state.pageInfo = { ...pageInfo, ...payload };
    },
    updateInfo(state, { payload = {} }) {
      state.info = payload;
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
const { updateList: updateList$3, updatePage: updatePage$3, updateInfo: updateInfo$2, getInitState: getInitState$4 } = blockHeightSlice.actions;
const changTable$3 = (page, pageSize, hash) => async (dispatch) => {
  dispatch(updatePage$3({ pageStart: page, pageSize }));
  dispatch(asyncGetPageList$3(hash));
};
const asyncGetPageList$3 = (hash = "") => (dispatch, getState) => {
  const { main: main2, blockHeight: blockHeight2 } = getState();
  const { pageInfo } = blockHeight2;
  const height = hash ? hash : main2.routeParam.type;
  return request$1.post({ url: "/transactions/queryByPage", query: { blockHeight: height, ...pageInfo } }).then((res) => {
    return dispatch(updateList$3(res == null ? void 0 : res.data));
  }).catch((e) => {
    console.log(e);
  });
};
const asyncGetDetail$1 = (id2 = "") => async (dispatch, getState) => {
  const { main: main2 } = getState();
  const address = id2 ? id2 : main2.routeParam.type;
  const res = await request$1.post({ url: "/dashboard/search", query: { address } });
  dispatch(updateInfo$2((res == null ? void 0 : res.data) || {}));
};
const downTrans$3 = () => (dispatch, getState) => {
  const { blockHeight: blockHeight2 } = getState();
  const { pageInfo, info } = blockHeight2;
  const { pageStart, pageSize } = pageInfo;
  request$1.post({
    url: "/sys/file/downloadFileByPage",
    query: {
      file: {
        mapperId: "transactionsService"
      },
      content: {
        blockHeight: info.address,
        pageStart,
        pageSize
      }
    },
    isDownLoad: true
  });
};
var blockHeight = blockHeightSlice.reducer;
const contractDetailSlice = toolkit.createSlice({
  name: "contractDetail",
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
      const { responseList = [], pageStart, pageSize, totalElements, totalPages } = payload;
      state.list = responseList.map((item) => ({ key: item.createTime, ...item }));
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
const { updateList: updateList$2, updatePage: updatePage$2, getInitState: getInitState$3, updateInfo: updateInfo$1 } = contractDetailSlice.actions;
const changTable$2 = (page, pageSize, hash) => async (dispatch) => {
  dispatch(updatePage$2({ pageStart: page, pageSize }));
  dispatch(asyncGetPageList$2(hash));
};
const asyncGetPageList$2 = (id2 = "") => (dispatch, getState) => {
  const { main: main2, contractDetail: contractDetail2 } = getState();
  const { pageInfo } = contractDetail2;
  const nfrIds = id2 ? id2 : main2.routeParam.type;
  return request$1.post({ url: "/transactions/queryByPage", query: { address: nfrIds, ...pageInfo } }).then((res) => {
    return dispatch(updateList$2((res == null ? void 0 : res.data) || {}));
  }).catch((e) => {
    console.log(e);
  });
};
const asyncGetContractDetail = (id2 = "") => async (dispatch, getState) => {
  const { main: main2 } = getState();
  const nfrIds = id2 ? id2 : main2.routeParam.type;
  const res = await request$1.post({ url: "/dashboard/search", query: { address: nfrIds } });
  dispatch(updateInfo$1((res == null ? void 0 : res.data) || {}));
};
const downTrans$2 = () => (dispatch, getState) => {
  const { blockHeight: blockHeight2 } = getState();
  const { pageInfo, info } = blockHeight2;
  const { pageStart, pageSize } = pageInfo;
  request$1.post({
    url: "/sys/file/downloadFileByPage",
    query: {
      file: {
        mapperId: "transactionsService"
      },
      content: {
        blockHeight: info.address,
        pageStart,
        pageSize
      }
    },
    isDownLoad: true
  });
};
var contractDetail = contractDetailSlice.reducer;
const walletDetailSlice = toolkit.createSlice({
  name: "walletDetail",
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
      const { responseList = [], pageStart, pageSize, totalElements, totalPages } = payload;
      state.list = responseList.map((item) => ({ key: item.createTime, ...item }));
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
const { updateList: updateList$1, getInitState: getInitState$2, updatePage: updatePage$1, updateInfo } = walletDetailSlice.actions;
const changTable$1 = (page, pageSize, hash) => async (dispatch) => {
  dispatch(updatePage$1({ pageStart: page, pageSize }));
  dispatch(asyncGetPageList$1(hash));
};
const asyncGetPageList$1 = (id2 = "") => (dispatch, getState) => {
  const { main: main2, walletDetail: walletDetail2 } = getState();
  const { pageInfo } = walletDetail2;
  const { pageStart, pageSize } = pageInfo;
  const nfrIds = id2 ? id2 : main2.routeParam.type;
  return request$1.post({ url: "/transactions/queryByPage", query: { address: nfrIds, pageStart, pageSize } }).then((res) => {
    return dispatch(updateList$1(res == null ? void 0 : res.data));
  }).catch((e) => {
    console.log(e);
  });
};
const asyncGetNfrDetail$1 = (id2 = "") => async (dispatch, getState) => {
  const { main: main2 } = getState();
  const walletId = id2 ? id2 : main2.routeParam.type;
  const info = await request$1.post({ url: "/dashboard/search", query: { address: walletId } });
  dispatch(updateInfo((info == null ? void 0 : info.data) || {}));
};
const downTrans$1 = () => (dispatch, getState) => {
  const { blockHeight: blockHeight2 } = getState();
  const { pageInfo, info } = blockHeight2;
  const { pageStart, pageSize } = pageInfo;
  request$1.post({
    url: "/sys/file/downloadFileByPage",
    query: {
      file: {
        mapperId: "transactionsService"
      },
      content: {
        blockHeight: info.address,
        pageStart,
        pageSize
      }
    },
    isDownLoad: true
  });
};
var walletDetail = walletDetailSlice.reducer;
const nfrDetailSlice = toolkit.createSlice({
  name: "nfrDetail",
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
      const { responseList = [], pageStart, pageSize, totalElements, totalPages } = payload;
      state.list = responseList.map((item) => ({ key: item.createTime, ...item }));
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
const { updateList, updatePage, getInitState: getInitState$1, updateDetail: updateDetail$1 } = nfrDetailSlice.actions;
const changTable = (page, pageSize, hash) => async (dispatch) => {
  dispatch(updatePage({ pageStart: page, pageSize }));
  dispatch(asyncGetPageList(hash));
};
const asyncGetPageList = (id2 = "") => (dispatch, getState) => {
  const { main: main2, nfrDetail: nfrDetail2 } = getState();
  const { pageInfo } = nfrDetail2;
  const nfrIds = id2 ? id2 : main2.routeParam.type;
  return request$1.post({ url: "/transactions/queryByPage", query: { nfrIds, ...pageInfo } }).then((res) => {
    return dispatch(updateList(res == null ? void 0 : res.data));
  }).catch((e) => {
    console.log(e);
  });
};
const asyncGetNfrDetail = (id2 = "") => (dispatch, getState) => {
  const { main: main2, nfrDetail: nfrDetail2 } = getState();
  const nfrIds = id2 ? id2 : main2.routeParam.type;
  return request$1.post({ url: "/nfr/queryInfo", query: { tokenId: nfrIds } }).then((res) => {
    return dispatch(updateDetail$1(res == null ? void 0 : res.data));
  }).catch((e) => {
    console.log(e);
  });
};
const downTrans = () => (dispatch, getState) => {
  const { nfrDetail: nfrDetail2 } = getState();
  const { pageInfo, detail } = nfrDetail2;
  const { pageStart, pageSize } = pageInfo;
  request$1.post({
    url: "/sys/file/downloadFileByPage",
    query: {
      file: {
        mapperId: "transactionsService"
      },
      content: {
        nfrIds: detail.nfrId,
        pageStart,
        pageSize
      }
    },
    isDownLoad: true
  });
};
var nfrDetail = nfrDetailSlice.reducer;
const transactionSlice = toolkit.createSlice({
  name: "transaction",
  initialState: {
    detail: {}
  },
  reducers: {
    updateDetail(state, { payload }) {
      state.detail = payload;
    },
    getInitState(state) {
      Object.assign(state, {
        detail: {}
      });
    }
  }
});
const { updateDetail, getInitState } = transactionSlice.actions;
const asyncGetDetail = (id2 = "") => (dispatch, getState) => {
  const { main: main2, transaction: transaction2 } = getState();
  const txnHash = id2 ? id2 : main2.routeParam.type;
  return request$1.post({ url: "/transactions/queryInfo", query: { txnHash } }).then((res) => {
    return dispatch(updateDetail((res == null ? void 0 : res.data) || {}));
  }).catch((e) => {
    console.log(e);
  });
};
var transaction = transactionSlice.reducer;
var store = {
  home,
  main,
  recentInfo,
  blockHeight,
  nfrDetail,
  contractDetail,
  walletDetail,
  transaction
};
const getServerStore = () => toolkit.configureStore({
  reducer: store
});
var index$9 = "";
const GUTTER$1 = 16;
const SPAN = 6;
function Overview(props) {
  const {
    detail = {}
  } = props;
  const {
    recentTransactionsMap
  } = detail;
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    setData(recentTransactionsMap);
  }, [(recentTransactionsMap || []).length]);
  const config = {
    data,
    xField: "date",
    yField: "count",
    height: 116,
    xAxis: {
      tickCount: 5
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    className: "overview",
    children: [/* @__PURE__ */ jsxRuntime.jsx("h2", {
      children: "\u603B\u89C8"
    }), /* @__PURE__ */ jsxRuntime.jsxs(antd.Row, {
      gutter: GUTTER$1,
      children: [/* @__PURE__ */ jsxRuntime.jsxs(antd.Col, {
        span: 16,
        className: "left-info",
        children: [/* @__PURE__ */ jsxRuntime.jsxs(antd.Row, {
          gutter: GUTTER$1,
          children: [/* @__PURE__ */ jsxRuntime.jsxs(antd.Col, {
            span: SPAN,
            children: [/* @__PURE__ */ jsxRuntime.jsx("p", {
              className: "title",
              children: "\u4EA4\u6613\u6BD4\u6570"
            }), /* @__PURE__ */ jsxRuntime.jsx("p", {
              className: "introduc-content",
              children: detail.txnCount
            })]
          }), /* @__PURE__ */ jsxRuntime.jsxs(antd.Col, {
            span: SPAN,
            children: [/* @__PURE__ */ jsxRuntime.jsx("p", {
              className: "title",
              children: "\u533A\u5757\u9AD8\u5EA6"
            }), /* @__PURE__ */ jsxRuntime.jsx("p", {
              className: "introduc-content",
              children: detail.blockHeight
            })]
          }), /* @__PURE__ */ jsxRuntime.jsxs(antd.Col, {
            span: SPAN,
            children: [/* @__PURE__ */ jsxRuntime.jsx("p", {
              className: "title",
              children: "\u5E73\u5747\u6BCF\u79D2\u4EA4\u6613"
            }), /* @__PURE__ */ jsxRuntime.jsx("p", {
              className: "introduc-content",
              children: detail.avgTxnCount
            })]
          }), /* @__PURE__ */ jsxRuntime.jsxs(antd.Col, {
            span: SPAN,
            children: [/* @__PURE__ */ jsxRuntime.jsx("p", {
              className: "title",
              children: "\u94B1\u5305\u5730\u5740\u603B\u91CF"
            }), /* @__PURE__ */ jsxRuntime.jsx("p", {
              className: "introduc-content",
              children: detail.addressCount
            })]
          })]
        }), /* @__PURE__ */ jsxRuntime.jsxs(antd.Row, {
          gutter: GUTTER$1,
          children: [/* @__PURE__ */ jsxRuntime.jsxs(antd.Col, {
            span: SPAN,
            children: [/* @__PURE__ */ jsxRuntime.jsx("p", {
              className: "title",
              children: "\u6700\u8FD124H\u4EA4\u6613\u6BD4\u6570"
            }), /* @__PURE__ */ jsxRuntime.jsx("p", {
              className: "introduc-content",
              children: detail.recentTxnCount
            })]
          }), /* @__PURE__ */ jsxRuntime.jsxs(antd.Col, {
            span: SPAN,
            children: [/* @__PURE__ */ jsxRuntime.jsx("p", {
              className: "title",
              children: "\u8FD124H\u51FA\u5757\u91CF"
            }), /* @__PURE__ */ jsxRuntime.jsx("p", {
              className: "introduc-content",
              children: detail.recentBlockCount
            })]
          }), /* @__PURE__ */ jsxRuntime.jsxs(antd.Col, {
            span: SPAN,
            children: [/* @__PURE__ */ jsxRuntime.jsx("p", {
              className: "title",
              children: "\u5E73\u5747\u51FA\u5757\u65F6\u95F4"
            }), /* @__PURE__ */ jsxRuntime.jsx("p", {
              className: "introduc-content",
              children: detail.avgBlockTime
            })]
          }), /* @__PURE__ */ jsxRuntime.jsxs(antd.Col, {
            span: SPAN,
            children: [/* @__PURE__ */ jsxRuntime.jsx("p", {
              className: "title",
              children: "\u667A\u80FD\u5408\u7EA6\u91CF"
            }), /* @__PURE__ */ jsxRuntime.jsx("p", {
              className: "introduc-content",
              children: detail.contractCount
            })]
          })]
        })]
      }), /* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
        span: 8,
        children: /* @__PURE__ */ jsxRuntime.jsx(plots.Line, {
          ...config
        })
      })]
    })]
  });
}
var index$8 = "";
function InfoList(props) {
  const {
    lastBlock = [],
    lastTransactions = []
  } = props;
  reactRouterDom.useNavigate();
  const BLOCK_TYPE2 = "recentBlock";
  const TRANS_TYPE2 = "recentTrans";
  const overLenText = React.useCallback(overLenTextShow, []);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    className: "info-list",
    children: [/* @__PURE__ */ jsxRuntime.jsx(antd.List, {
      className: "list",
      bordered: true,
      header: /* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: "list-head",
        children: [/* @__PURE__ */ jsxRuntime.jsx("span", {
          children: "\u6700\u65B0\u51FA\u5757"
        }), /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
          to: `recentInfo/${BLOCK_TYPE2}`,
          children: "\u66F4\u591A"
        })]
      }),
      dataSource: lastBlock,
      renderItem: (item) => {
        var _a;
        return /* @__PURE__ */ jsxRuntime.jsxs(antd.List.Item, {
          children: [/* @__PURE__ */ jsxRuntime.jsx(antd.List.Item.Meta, {
            title: /* @__PURE__ */ jsxRuntime.jsx(antd.Popover, {
              content: item.blockHeight,
              children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
                to: `/blockHeight/${item.blockHeight}`,
                children: `# ${overLenText(item.blockHeight)}`
              })
            }),
            description: `${item.scendsTakenTo} scends ago`
          }), /* @__PURE__ */ jsxRuntime.jsx("span", {
            children: `${(_a = item == null ? void 0 : item.transactionsList) == null ? void 0 : _a.length} \u6BD4\u4EA4\u6613`
          })]
        }, item.hash);
      }
    }), /* @__PURE__ */ jsxRuntime.jsx(antd.List, {
      className: "list",
      bordered: true,
      header: /* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: "list-head",
        children: [/* @__PURE__ */ jsxRuntime.jsx("span", {
          children: "\u6700\u65B0\u4EA4\u6613"
        }), /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
          to: `recentInfo/${TRANS_TYPE2}`,
          children: "\u66F4\u591A"
        })]
      }),
      dataSource: lastTransactions,
      renderItem: (item) => /* @__PURE__ */ jsxRuntime.jsxs(antd.List.Item, {
        children: [/* @__PURE__ */ jsxRuntime.jsx(antd.List.Item.Meta, {
          title: /* @__PURE__ */ jsxRuntime.jsx(antd.Popover, {
            content: item.txnHash,
            children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
              to: `/transaction/${item.txnHash}`,
              children: `# ${overLenText(item.txnHash)}`
            })
          }),
          description: `${item.scendsTakenTo} scends ago`
        }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: "briefly-wrap",
          children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
            className: "briefly",
            children: [/* @__PURE__ */ jsxRuntime.jsx("span", {
              children: "From"
            }), /* @__PURE__ */ jsxRuntime.jsx(antd.Popover, {
              content: item.fromAddress,
              children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
                to: `/walletDetail/${item.fromAddress}`,
                children: `${overLenText(item.fromAddress)}`
              })
            })]
          }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
            className: "briefly",
            children: [/* @__PURE__ */ jsxRuntime.jsx("span", {
              children: "To"
            }), /* @__PURE__ */ jsxRuntime.jsx(antd.Popover, {
              content: item.toAddress,
              children: /* @__PURE__ */ jsxRuntime.jsx(NavigateAddress, {
                address: item.toAddress
              })
            })]
          })]
        })]
      }, item.txnHash)
    })]
  });
}
var index$7 = "";
function Home() {
  const {
    countDetail,
    lastBlock,
    lastTransactions
  } = reactRedux.useSelector((state) => state.home);
  const dispatch = reactRedux.useDispatch();
  React.useEffect(() => {
    if (isEmptyObj(countDetail)) {
      dispatch(asyncGetCountDetail());
      dispatch(asyncGetLastBlock());
      dispatch(asyncGetLastTransactions());
    }
    return () => {
      dispatch(getInitState$6());
    };
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "search-content",
      children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: "search-content-left",
        children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: "title",
          children: [/* @__PURE__ */ jsxRuntime.jsx(antd.Image, {
            width: 50,
            height: 50,
            preview: false,
            src: "cc.jpeg"
          }), /* @__PURE__ */ jsxRuntime.jsx("span", {
            className: "title-text",
            children: "Free Blockchain Explorer"
          })]
        }), /* @__PURE__ */ jsxRuntime.jsx("div", {
          className: "search-wrap",
          children: /* @__PURE__ */ jsxRuntime.jsx(CommonSearch, {})
        })]
      }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: "search-content-right",
        children: [/* @__PURE__ */ jsxRuntime.jsx("p", {
          children: "\u514D\u8D39\u53D1\u578B\u6570\u5B57\u85CF\u54C1"
        }), /* @__PURE__ */ jsxRuntime.jsx("p", {
          children: "\u53EF\u514D\u8D39\u4F7F\u7528\u798F\u745E\u94FE,\u7531\u56FD\u5185\u9886\u5148\u3001\u81EA\u4E3B\u7814\u53D1\u7684\u798F\u745E\u94FE\u4F5C\u4E3A\u5E95\u5C42\u533A\u5757\u94FE\u6280\u672F\u652F\u6491\uFF0C\u5728\u4FDD\u8BC1\u5B89\u5168\u548C\u6027\u80FD\u7684\u540C\u65F6\uFF0C\u80FD\u6EE1\u8DB3\u5404\u7C7B\u590D\u6742\u7684\u4E1A\u52A1\u573A\u666F\u3002\u57280\u6210\u672C\u7684\u521B\u4F5C\u548C\u4EA4\u6613\u4E2D\u4F53\u9A8CNFR\u751F\u6001\u3002"
        }), /* @__PURE__ */ jsxRuntime.jsx(antd.Button, {
          ghost: true,
          className: "experience-btn",
          type: "primary",
          children: "\u7ACB\u5373\u4F53\u9A8C"
        })]
      })]
    }), /* @__PURE__ */ jsxRuntime.jsx(Overview, {
      detail: countDetail
    }), /* @__PURE__ */ jsxRuntime.jsx(InfoList, {
      lastBlock,
      lastTransactions
    })]
  });
}
Home.getInitialProps = () => {
  return [asyncGetCountDetail(), asyncGetLastBlock(), asyncGetLastTransactions()];
};
const columns$3 = [{
  title: "\u65F6\u95F4",
  dataIndex: "createTime"
}, {
  title: "\u4EA4\u6613\u54C8\u5E0C",
  dataIndex: "txnHash",
  render: (txnHash) => /* @__PURE__ */ jsxRuntime.jsx(antd.Popover, {
    content: txnHash,
    children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
      to: `/transaction/${txnHash}`,
      children: overLenTextShow(txnHash)
    })
  })
}, {
  title: "\u53D1\u9001\u65B9",
  dataIndex: "fromAddress",
  render: (fromAddress) => /* @__PURE__ */ jsxRuntime.jsx(antd.Popover, {
    content: fromAddress,
    children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
      to: `/walletDetail/${fromAddress}`,
      children: overLenTextShow(fromAddress)
    })
  })
}, {
  title: "\u63A5\u6536\u65B9",
  dataIndex: "toAddress",
  render: (toAddress) => /* @__PURE__ */ jsxRuntime.jsx(antd.Popover, {
    content: toAddress,
    children: /* @__PURE__ */ jsxRuntime.jsx(NavigateAddress, {
      address: toAddress
    })
  })
}, {
  title: "\u7C7B\u578B",
  dataIndex: "methodName"
}, {
  title: "NFR",
  dataIndex: "nfrList",
  render(nfrList = []) {
    if (nfrList.length === 1) {
      const nfr = nfrList[0];
      return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
        to: `/nfrDetail/${nfr.id}`,
        children: nfr.name
      });
    }
    return "--";
  }
}, {
  title: "NFRID",
  dataIndex: "nfrList",
  render(nfrList = []) {
    if (nfrList.length === 1) {
      const nfr = nfrList[0];
      return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
        to: `/nfrDetail/${nfr.id}`,
        children: nfr.id
      });
    }
    return "--";
  }
}];
var index$6 = "";
function BlockHeight() {
  const {
    type = ""
  } = reactRouterDom.useParams();
  const dispatch = reactRedux.useDispatch();
  const {
    list = [],
    pageInfo,
    info = {}
  } = reactRedux.useSelector((state) => state.blockHeight);
  console.log(list, pageInfo, info);
  const {
    address = "",
    searchData = {}
  } = info;
  React.useEffect(() => {
    if (isEmptyObj(info)) {
      dispatch(asyncGetPageList$3(type));
      dispatch(asyncGetDetail$1(type));
    }
    return () => {
      dispatch(getInitState$4());
    };
  }, [type]);
  const handleDown = React.useCallback(() => {
    dispatch(downTrans$3());
  }, []);
  const pageChange = React.useCallback((page, pageSize) => {
    dispatch(changTable$3(page, pageSize, type));
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    className: "block-height",
    children: [/* @__PURE__ */ jsxRuntime.jsx("div", {
      className: "common-search",
      children: /* @__PURE__ */ jsxRuntime.jsx(CommonSearch, {
        borderd: true
      })
    }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "title-wrap",
      children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: "head-title",
        children: [/* @__PURE__ */ jsxRuntime.jsx("span", {
          className: "address",
          children: `# ${address}`
        }), /* @__PURE__ */ jsxRuntime.jsx(icons.ClockCircleOutlined, {}), /* @__PURE__ */ jsxRuntime.jsx("span", {
          className: "time",
          children: searchData.createTime
        })]
      }), /* @__PURE__ */ jsxRuntime.jsx("p", {
        children: searchData.hash
      })]
    }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "table-title",
      children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
        className: "title",
        children: "\u8BE5\u9AD8\u5EA6\u4E0B\u4EA4\u6613"
      }), /* @__PURE__ */ jsxRuntime.jsxs(antd.Button, {
        type: "link",
        block: true,
        onClick: handleDown,
        children: ["\u5BFC\u51FA\u4E3ACSV", /* @__PURE__ */ jsxRuntime.jsx(icons.DownloadOutlined, {
          className: "title-icon"
        })]
      })]
    }), /* @__PURE__ */ jsxRuntime.jsx(antd.Table, {
      dataSource: list,
      pagination: {
        total: pageInfo.totalElements,
        current: pageInfo.pageStart,
        pageSize: pageInfo.pageSize,
        onChange: pageChange
      },
      columns: columns$3,
      rowKey: (record) => record.txnHash
    })]
  });
}
BlockHeight.getInitialProps = () => {
  return [asyncGetPageList$3(), asyncGetDetail$1()];
};
const columns$2 = [{
  title: "\u65F6\u95F4",
  dataIndex: "createTime"
}, {
  title: "\u4EA4\u6613\u54C8\u5E0C",
  dataIndex: "txnHash",
  render: (text) => /* @__PURE__ */ jsxRuntime.jsx(antd.Popover, {
    content: text,
    children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
      to: `/transaction/${text}`,
      children: overLenTextShow(text)
    })
  })
}, {
  title: "\u53D1\u9001\u65B9",
  dataIndex: "fromAddress",
  render: (fromAddress) => /* @__PURE__ */ jsxRuntime.jsx(antd.Popover, {
    content: fromAddress,
    children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
      to: `/walletDetail/${fromAddress}`,
      children: overLenTextShow(fromAddress)
    })
  })
}, {
  title: "\u63A5\u6536\u65B9",
  dataIndex: "toAddress",
  render: (toAddress) => /* @__PURE__ */ jsxRuntime.jsx(antd.Popover, {
    content: toAddress,
    children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
      to: `/walletDetail/${toAddress}`,
      children: overLenTextShow(toAddress)
    })
  })
}, {
  title: "\u7C7B\u578B",
  dataIndex: "methodName"
}];
var index$5 = "";
function NfrDetail() {
  const {
    type = ""
  } = reactRouterDom.useParams();
  const dispatch = reactRedux.useDispatch();
  const {
    list = [],
    pageInfo,
    detail = {}
  } = reactRedux.useSelector((state) => state.nfrDetail);
  console.log(detail, list);
  React.useEffect(() => {
    if (isEmptyObj(detail)) {
      dispatch(asyncGetPageList(type));
      dispatch(asyncGetNfrDetail(type));
    }
    return () => {
      dispatch(getInitState$1());
    };
  }, []);
  const handleDown = React.useCallback(() => {
    dispatch(downTrans());
  }, []);
  const pageChange = React.useCallback((page, pageSize) => {
    dispatch(changTable(page, pageSize, id));
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    className: "nfr-detail",
    children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
      className: "title",
      children: "NFR\u8BE6\u60C5"
    }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "detail-header",
      children: [/* @__PURE__ */ jsxRuntime.jsx("span", {
        className: "name",
        children: detail.name
      }), /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
        to: "",
        children: detail.contractAddress
      }), /* @__PURE__ */ jsxRuntime.jsx("span", {
        className: "contrat",
        children: `# ${detail.nfrId}`
      })]
    }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "detail-info",
      children: [/* @__PURE__ */ jsxRuntime.jsxs(antd.Row, {
        gutter: 24,
        children: [/* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          className: "label",
          span: 2,
          children: /* @__PURE__ */ jsxRuntime.jsx("span", {
            children: "NFR\u96C6\u5408"
          })
        }), /* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          span: 22,
          children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
            to: `/contractDetail/${detail.contractAddress}`,
            children: detail.contractAddress
          })
        })]
      }), /* @__PURE__ */ jsxRuntime.jsxs(antd.Row, {
        gutter: 24,
        children: [/* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          className: "label",
          span: 2,
          children: /* @__PURE__ */ jsxRuntime.jsx("span", {
            children: "NFRID"
          })
        }), /* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
            to: "",
            children: detail.nfrId
          })
        })]
      }), /* @__PURE__ */ jsxRuntime.jsxs(antd.Row, {
        gutter: 24,
        children: [/* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          className: "label",
          span: 2,
          children: /* @__PURE__ */ jsxRuntime.jsx("span", {
            children: "\u6301\u6709\u8005"
          })
        }), /* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
            to: `/walletDetail/${detail.ownerAddress}`,
            children: detail.ownerAddress
          })
        })]
      }), /* @__PURE__ */ jsxRuntime.jsxs(antd.Row, {
        gutter: 24,
        children: [/* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          className: "label",
          span: 2,
          children: /* @__PURE__ */ jsxRuntime.jsx("span", {
            children: "\u751F\u6210\u8005"
          })
        }), /* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
            to: `/contractDetail/${detail.creatorAddress}`,
            children: detail.creatorAddress
          })
        })]
      }), /* @__PURE__ */ jsxRuntime.jsxs(antd.Row, {
        gutter: 24,
        children: [/* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          className: "label",
          span: 2,
          children: /* @__PURE__ */ jsxRuntime.jsx("span", {
            children: "\u7C7B\u578B"
          })
        }), /* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          children: detail.nfrProtocol
        })]
      })]
    }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "table-title",
      children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
        className: "title",
        children: "\u4EA4\u6613\u8BB0\u5F55"
      }), /* @__PURE__ */ jsxRuntime.jsxs(antd.Button, {
        type: "link",
        block: true,
        onClick: handleDown,
        children: ["\u5BFC\u51FA\u4E3ACSV", /* @__PURE__ */ jsxRuntime.jsx(icons.DownloadOutlined, {
          className: "title-icon"
        })]
      })]
    }), /* @__PURE__ */ jsxRuntime.jsx(antd.Table, {
      dataSource: list,
      pagination: {
        total: pageInfo.totalElements,
        current: pageInfo.pageStart,
        pageSize: pageInfo.pageSize,
        onChange: pageChange
      },
      columns: columns$2,
      rowKey: (record) => record.txnHash
    })]
  });
}
NfrDetail.getInitialProps = () => {
  return [asyncGetPageList(), asyncGetNfrDetail()];
};
const columns$1 = [{
  title: "\u65F6\u95F4",
  dataIndex: "createTime"
}, {
  title: "\u4EA4\u6613\u54C8\u5E0C",
  dataIndex: "txnHash",
  render: (txnHash) => /* @__PURE__ */ jsxRuntime.jsx(antd.Popover, {
    content: txnHash,
    children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
      to: `/transaction/${txnHash}`,
      children: overLenTextShow(txnHash)
    })
  })
}, {
  title: "\u53D1\u9001\u65B9",
  dataIndex: "fromAddress",
  render: (fromAddress) => /* @__PURE__ */ jsxRuntime.jsx(antd.Popover, {
    content: fromAddress,
    children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
      to: `/walletDetail/${fromAddress}`,
      children: overLenTextShow(fromAddress)
    })
  })
}, {
  title: "\u63A5\u6536\u65B9",
  dataIndex: "toAddress",
  render: (toAddress) => /* @__PURE__ */ jsxRuntime.jsx(antd.Popover, {
    content: toAddress,
    children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
      to: `/walletDetail/${toAddress}`,
      children: overLenTextShow(toAddress)
    })
  })
}, {
  title: "\u7C7B\u578B",
  dataIndex: "methodName"
}, {
  title: "NFR",
  dataIndex: "nfrList",
  render(nfrList = []) {
    if (nfrList.length === 1) {
      const nfr = nfrList[0];
      return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
        to: `/nfrDetail/${nfr.id}`,
        children: nfr.name
      });
    }
    return "--";
  }
}, {
  title: "NFRID",
  dataIndex: "nfrList",
  render(nfrList = []) {
    if (nfrList.length === 1) {
      const nfr = nfrList[0];
      return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
        to: `/nfrDetail/${nfr.id}`,
        children: nfr.id
      });
    }
    return "--";
  }
}];
var index$4 = "";
function ContractDetail() {
  const {
    type = ""
  } = reactRouterDom.useParams();
  const dispatch = reactRedux.useDispatch();
  const {
    list = [],
    pageInfo,
    info = {}
  } = reactRedux.useSelector((state) => state.contractDetail);
  const {
    tokenCount,
    walletCount,
    transactionCount
  } = info.searchData || {};
  React.useEffect(() => {
    if (isEmptyObj(info)) {
      dispatch(asyncGetPageList$2(type));
      dispatch(asyncGetContractDetail(type));
    }
    return () => {
      dispatch(getInitState$3());
    };
  }, []);
  const handleDown = React.useCallback(() => {
    dispatch(downTrans$2());
  }, []);
  const pageChange = React.useCallback((page, pageSize) => {
    dispatch(changTable$2(page, pageSize, type));
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    className: "contract-detail",
    children: [/* @__PURE__ */ jsxRuntime.jsx("div", {
      className: "contract-title",
      children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
        to: "",
        children: `\u5408\u7EA6\uFF1A${info.address}`
      })
    }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "detail-info",
      children: [/* @__PURE__ */ jsxRuntime.jsxs(antd.Row, {
        gutter: 24,
        children: [/* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          className: "label",
          span: 2,
          children: "\u603B\u91CF"
        }), /* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          span: 22,
          children: tokenCount
        })]
      }), /* @__PURE__ */ jsxRuntime.jsxs(antd.Row, {
        gutter: 24,
        children: [/* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          className: "label",
          span: 2,
          children: /* @__PURE__ */ jsxRuntime.jsx("span", {
            children: "\u6301\u6709\u94B1\u5305"
          })
        }), /* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          children: walletCount
        })]
      }), /* @__PURE__ */ jsxRuntime.jsxs(antd.Row, {
        gutter: 24,
        children: [/* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          className: "label",
          span: 2,
          children: /* @__PURE__ */ jsxRuntime.jsx("span", {
            children: "\u4EA4\u6613\u7B14\u6570"
          })
        }), /* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          children: transactionCount
        })]
      }), /* @__PURE__ */ jsxRuntime.jsxs(antd.Row, {
        gutter: 24,
        children: [/* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          className: "label",
          span: 2,
          children: /* @__PURE__ */ jsxRuntime.jsx("span", {
            children: "\u5408\u7EA6"
          })
        }), /* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
            to: "",
            children: info.address
          })
        })]
      })]
    }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "table-title",
      children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
        className: "title",
        children: "\u4EA4\u6613\u8BB0\u5F55"
      }), /* @__PURE__ */ jsxRuntime.jsxs(antd.Button, {
        type: "link",
        block: true,
        onClick: handleDown,
        children: ["\u5BFC\u51FA\u4E3ACSV", /* @__PURE__ */ jsxRuntime.jsx(icons.DownloadOutlined, {
          className: "title-icon"
        })]
      })]
    }), /* @__PURE__ */ jsxRuntime.jsx(antd.Table, {
      dataSource: list,
      pagination: {
        total: pageInfo.totalElements,
        current: pageInfo.pageStart,
        pageSize: pageInfo.pageSize,
        onChange: pageChange
      },
      columns: columns$1
    })]
  });
}
ContractDetail.getInitialProps = () => {
  return [asyncGetPageList$2(), asyncGetContractDetail()];
};
const columns = [{
  title: "\u65F6\u95F4",
  dataIndex: "createTime",
  key: "createTime"
}, {
  title: "\u4EA4\u6613\u54C8\u5E0C",
  dataIndex: "txnHash",
  key: "txnHash",
  render: (text) => /* @__PURE__ */ jsxRuntime.jsx(antd.Popover, {
    content: text,
    children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
      to: `/transaction/${text}`,
      children: overLenTextShow(text)
    })
  })
}, {
  title: "\u53D1\u9001\u65B9",
  dataIndex: "fromAddress",
  key: "fromAddress",
  render: (text) => /* @__PURE__ */ jsxRuntime.jsx(antd.Popover, {
    content: text,
    children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
      to: `/walletDetail/${text}`,
      children: overLenTextShow(text)
    })
  })
}, {
  title: "\u63A5\u6536\u65B9",
  dataIndex: "toAddress",
  key: "toAddress",
  render: (text) => /* @__PURE__ */ jsxRuntime.jsx(antd.Popover, {
    content: text,
    children: /* @__PURE__ */ jsxRuntime.jsx(NavigateAddress, {
      address: text
    })
  })
}, {
  title: "\u7C7B\u578B",
  dataIndex: "methodName",
  key: "methodName"
}, {
  title: "NFR",
  dataIndex: "nfrIds",
  key: "nfrIds",
  render(nfrIds = []) {
    if (nfrIds.length === 1) {
      const nfr = nfrIds[0];
      return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
        to: `/nfrDetail/${nfr.id}`,
        children: nfr.name
      });
    }
    return "--";
  }
}, {
  title: "NFRID",
  dataIndex: "nfrIds",
  key: "nfrId",
  render(nfrIds = []) {
    if (nfrIds.length === 1) {
      const nfr = nfrIds[0];
      return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
        to: `/nfrDetail/${nfr.id}`,
        children: nfr.id
      });
    }
    return "--";
  }
}];
var index$3 = "";
function WalletDetail() {
  const {
    type = ""
  } = reactRouterDom.useParams();
  const dispatch = reactRedux.useDispatch();
  const {
    list = [],
    pageInfo,
    info = {}
  } = reactRedux.useSelector((state) => state.walletDetail);
  React.useEffect(() => {
    if (isEmptyObj(info)) {
      dispatch(asyncGetPageList$1(type));
      dispatch(asyncGetNfrDetail$1(type));
    }
    return () => {
      dispatch(getInitState$2());
    };
  }, []);
  const handleDown = React.useCallback(() => {
    dispatch(downTrans$1());
  }, []);
  const {
    nfrCount,
    nfrUriList
  } = info.searchData || {};
  const pageChange = React.useCallback((page, pageSize) => {
    dispatch(changTable$1(page, pageSize, type));
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    className: "wallet-detail",
    children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
      className: "title",
      children: "\u94B1\u5305\u5730\u5740"
    }), /* @__PURE__ */ jsxRuntime.jsx("p", {
      className: "address",
      children: info.address
    }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "detail-info",
      children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
        className: "title",
        children: "\u7528\u6237\u603B\u89C8"
      }), /* @__PURE__ */ jsxRuntime.jsxs("p", {
        children: ["\u5171\u6301\u6709NFR\uFF1A ", nfrCount]
      }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: "table-title",
        children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
          className: "title",
          children: "\u4EA4\u6613\u8BB0\u5F55"
        }), /* @__PURE__ */ jsxRuntime.jsxs(antd.Button, {
          type: "link",
          block: true,
          onClick: handleDown,
          children: ["\u5BFC\u51FA\u4E3ACSV", /* @__PURE__ */ jsxRuntime.jsx(icons.DownloadOutlined, {
            className: "title-icon"
          })]
        })]
      }), /* @__PURE__ */ jsxRuntime.jsx(antd.Table, {
        dataSource: list,
        pagination: {
          total: pageInfo.totalElements,
          current: pageInfo.pageStart,
          pageSize: pageInfo.pageSize,
          onChange: pageChange
        },
        columns
      })]
    })]
  });
}
WalletDetail.getInitialProps = () => {
  return [asyncGetPageList$1(), asyncGetNfrDetail$1()];
};
const CREATE = "create";
const MINT = "mint";
const MINT_BATCH = "mintBatch";
const TRANSFER = "transfer";
const TRANSFER_BATCH = "transferBatch";
const BURN = "burn";
const BURN_BATCH = "burnBatch";
const transactionEnum = {
  [CREATE]: {
    title: "\u521B\u5EFA"
  },
  [MINT]: {
    title: "\u94F8\u9020"
  },
  [MINT_BATCH]: {
    title: "\u6279\u91CF\u94F8\u9020"
  },
  [TRANSFER]: {
    title: "\u8F6C\u8D26",
    label: "\u53D1\u9001\u81F3"
  },
  [TRANSFER_BATCH]: {
    title: "\u6279\u91CF\u53D1\u9001",
    label: "\u53D1\u9001\u81F3"
  },
  [BURN]: {
    title: "\u9500\u6BC1",
    label: "\u9500\u6BC1\u5408\u7EA6"
  },
  [BURN_BATCH]: {
    title: "\u6279\u91CF\u9500\u6BC1",
    label: "\u9500\u6BC1\u5408\u7EA6"
  }
};
const MAX_SHOW = 5;
function TransResult(props) {
  var _a;
  const {
    toAddress,
    method,
    nfrList = []
  } = props;
  const [showAll, setShowAll] = React.useState(nfrList <= MAX_SHOW);
  console.log(toAddress, method, nfrList);
  function toggleShow() {
    setShowAll(!showAll);
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    children: [/* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
      to: `/walletDetail/${toAddress}`,
      children: toAddress
    }), method !== CREATE ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: "direct-title",
        children: [/* @__PURE__ */ jsxRuntime.jsx(icons.ArrowDownOutlined, {}), /* @__PURE__ */ jsxRuntime.jsx("span", {
          children: `${(_a = transactionEnum[method]) == null ? void 0 : _a.title} ${nfrList.length}\u4E2ANFT`
        })]
      }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
        children: [nfrList.map((item, index2) => {
          if (!showAll && index2 > MAX_SHOW - 1) {
            return null;
          }
          return /* @__PURE__ */ jsxRuntime.jsxs("div", {
            className: "flow-wrap",
            children: [/* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
              to: `/nfrDetail/${item.id}`,
              children: `[${item.name || item.id}]`
            }), method !== MINT && method !== MINT_BATCH ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
              children: [/* @__PURE__ */ jsxRuntime.jsx(icons.SwapRightOutlined, {
                className: "direct-icon"
              }), /* @__PURE__ */ jsxRuntime.jsx("span", {
                children: transactionEnum[method].label
              }), /* @__PURE__ */ jsxRuntime.jsx(antd.Popover, {
                content: item.to,
                children: /* @__PURE__ */ jsxRuntime.jsx(NavigateAddress, {
                  address: item.to
                })
              })]
            }) : ""]
          }, item.id + Math.random());
        }), nfrList.length > MAX_SHOW ? /* @__PURE__ */ jsxRuntime.jsxs("div", {
          children: [/* @__PURE__ */ jsxRuntime.jsx("span", {
            children: `...\u7B49${nfrList.length - MAX_SHOW}\u4E2A`
          }), /* @__PURE__ */ jsxRuntime.jsx(antd.Button, {
            type: "link",
            onClick: toggleShow,
            children: showAll ? "\u6536\u8D77" : "\u5C55\u5F00"
          })]
        }) : null]
      })]
    }) : null]
  });
}
var index$2 = "";
const GUTTER = 24;
const LABEL_SPAN = 2;
const CONTENT_SPAN = 22;
function Transaction() {
  const {
    type = ""
  } = reactRouterDom.useParams();
  const dispatch = reactRedux.useDispatch();
  const {
    detail = {}
  } = reactRedux.useSelector((state) => state.transaction);
  console.log(detail);
  React.useEffect(() => {
    if (isEmptyObj(detail)) {
      dispatch(asyncGetDetail(type));
    }
    return () => {
      dispatch(getInitState());
    };
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    className: "transaction-detail",
    children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "title-wrap",
      children: [/* @__PURE__ */ jsxRuntime.jsxs("h3", {
        children: ["\u4EA4\u6613\u54C8\u5E0C", /* @__PURE__ */ jsxRuntime.jsx(antd.Tag, {
          color: "green",
          children: "\u4EA4\u6613\u6210\u529F"
        })]
      }), /* @__PURE__ */ jsxRuntime.jsx("span", {
        children: detail.txnHash
      })]
    }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "detail-wrap",
      children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
        className: "title",
        children: "\u4EA4\u6613\u8BE6\u60C5"
      }), /* @__PURE__ */ jsxRuntime.jsxs(antd.Row, {
        gutter: GUTTER,
        children: [/* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          className: "label",
          span: LABEL_SPAN,
          children: "\u53D1\u9001\u65B9"
        }), /* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          span: CONTENT_SPAN,
          children: /* @__PURE__ */ jsxRuntime.jsx(CopyText, {
            text: `${detail.fromAddress}`,
            children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
              to: `/walletDetail/${detail.fromAddress}`,
              children: detail.fromAddress
            })
          })
        })]
      }), /* @__PURE__ */ jsxRuntime.jsxs(antd.Row, {
        gutter: GUTTER,
        children: [/* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          className: "label",
          span: LABEL_SPAN,
          children: "\u63A5\u6536/\u4EA4\u4E92\u65B9"
        }), /* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          span: CONTENT_SPAN,
          children: /* @__PURE__ */ jsxRuntime.jsx(CopyText, {
            text: `${detail.toAddress}`,
            children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
              to: `/contractDetail/${detail.toAddress}`,
              children: detail.toAddress
            })
          })
        })]
      }), /* @__PURE__ */ jsxRuntime.jsxs(antd.Row, {
        gutter: GUTTER,
        children: [/* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          className: "label",
          span: LABEL_SPAN,
          children: "\u533A\u5757\u9AD8\u5EA6"
        }), /* @__PURE__ */ jsxRuntime.jsxs(antd.Col, {
          span: CONTENT_SPAN,
          children: [/* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
            to: `/blockHeight/${detail.blockHeight}`,
            children: `# ${detail.blockHeight}`
          }), /* @__PURE__ */ jsxRuntime.jsx(icons.ClockCircleOutlined, {
            style: {
              marginRight: 12,
              marginLeft: 12
            }
          }), /* @__PURE__ */ jsxRuntime.jsx("span", {
            children: `${formatSeconds(scendsTakenTo(new Date(detail.createTime).getTime()))} ago(${detail.createTime})`
          })]
        })]
      }), /* @__PURE__ */ jsxRuntime.jsxs(antd.Row, {
        gutter: GUTTER,
        children: [/* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          className: "label",
          span: LABEL_SPAN,
          children: "\u4EA4\u6613\u7ED3\u679C"
        }), /* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          span: CONTENT_SPAN,
          children: /* @__PURE__ */ jsxRuntime.jsx(TransResult, {
            toAddress: detail.toAddress,
            method: detail.method,
            nfrList: detail == null ? void 0 : detail.nfrList
          })
        })]
      }), /* @__PURE__ */ jsxRuntime.jsxs(antd.Row, {
        gutter: GUTTER,
        children: [/* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          className: "label",
          span: LABEL_SPAN,
          children: "\u7C7B\u578B"
        }), /* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          span: CONTENT_SPAN,
          children: detail.type
        })]
      }), /* @__PURE__ */ jsxRuntime.jsxs(antd.Row, {
        gutter: GUTTER,
        children: [/* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          className: "label",
          span: LABEL_SPAN,
          children: "\u4EA4\u6613\u624B\u7EED\u8D39"
        }), /* @__PURE__ */ jsxRuntime.jsx(antd.Col, {
          span: CONTENT_SPAN,
          children: detail.transFee
        })]
      })]
    })]
  });
}
Transaction.getInitialProps = () => {
  return [asyncGetDetail()];
};
const BLOCK_TYPE = "recentBlock";
const TRANS_TYPE = "recentTrans";
const PAGE_CONFIG = {
  [BLOCK_TYPE]: {
    title: "\u6700\u8FD1\u51FA\u5757",
    tableColumns: [{
      title: "\u533A\u5757\u9AD8\u5EA6",
      dataIndex: "blockHeight",
      render: (text) => {
        return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
          to: `/blockHeight/${text}`,
          children: text
        });
      }
    }, {
      title: "\u65F6\u95F4",
      dataIndex: "createTime"
    }, {
      title: "\u51FA\u5757\u8282\u70B9",
      dataIndex: "miner",
      render: (text) => /* @__PURE__ */ jsxRuntime.jsx(antd.Popover, {
        content: text,
        children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
          to: `/walletDetail/${text}`,
          children: overLenTextShow(text)
        })
      })
    }, {
      title: "\u4EA4\u6613\u6BD4\u6570",
      dataIndex: "transactions",
      render: (transactions) => (transactions || []).length
    }]
  },
  [TRANS_TYPE]: {
    title: "\u6700\u8FD1\u4EA4\u6613",
    tableColumns: [{
      title: "\u533A\u5757\u9AD8\u5EA6",
      dataIndex: "blockHeight",
      render: (text) => {
        return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
          to: `/blockHeight/${text}`,
          children: text
        });
      }
    }, {
      title: "\u65F6\u95F4",
      dataIndex: "createTime"
    }, {
      title: "\u4EA4\u6613\u54C8\u5E0C",
      dataIndex: "txnHash",
      render: (text) => /* @__PURE__ */ jsxRuntime.jsx(antd.Popover, {
        content: text,
        children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
          to: `/transaction/${text}`,
          children: overLenTextShow(text)
        })
      })
    }, {
      title: "\u53D1\u9001\u65B9",
      dataIndex: "fromAddress",
      render: (text) => /* @__PURE__ */ jsxRuntime.jsx(antd.Popover, {
        content: text,
        children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
          to: `/walletDetail/${text}`,
          children: overLenTextShow(text)
        })
      })
    }, {
      title: "\u63A5\u6536\u65B9",
      dataIndex: "toAddress",
      render: (text) => /* @__PURE__ */ jsxRuntime.jsx(antd.Popover, {
        content: text,
        children: /* @__PURE__ */ jsxRuntime.jsx(NavigateAddress, {
          address: text
        })
      })
    }, {
      title: "\u7C7B\u578B",
      dataIndex: "methodName"
    }, {
      title: "NFR",
      dataIndex: "nfrList",
      render(nfrList = []) {
        if (nfrList.length === 1) {
          const nfr = nfrList[0];
          return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
            to: `/nfrDetail/${nfr.id}`,
            children: nfr.name
          });
        }
        return "--";
      }
    }, {
      title: "NFRID",
      dataIndex: "nfrList",
      render(nfrList = []) {
        if (nfrList.length === 1) {
          const nfr = nfrList[0];
          return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
            to: `/nfrDetail/${nfr.id}`,
            children: nfr.id
          });
        }
        return "--";
      }
    }]
  }
};
var index$1 = "";
function RecentInfo() {
  const {
    type = BLOCK_TYPE
  } = reactRouterDom.useParams();
  const dispatch = reactRedux.useDispatch();
  const {
    list = [],
    pageInfo
  } = reactRedux.useSelector((state) => state.recentInfo);
  console.log(list);
  React.useEffect(() => {
    if (!list.length) {
      dispatch(asyncGetPageList$4(type));
    }
    return () => {
      dispatch(getInitState$5());
    };
  }, []);
  const pageChange = React.useCallback((page, pageSize) => {
    dispatch(changTable$4(page, pageSize, type));
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    className: "recent-info",
    children: [/* @__PURE__ */ jsxRuntime.jsx("div", {
      className: "common-search",
      children: /* @__PURE__ */ jsxRuntime.jsx(CommonSearch, {
        borderd: true
      })
    }), /* @__PURE__ */ jsxRuntime.jsx("h3", {
      className: "title",
      children: PAGE_CONFIG[type].title
    }), /* @__PURE__ */ jsxRuntime.jsx(antd.Table, {
      columns: PAGE_CONFIG[type].tableColumns,
      dataSource: list,
      pagination: {
        total: pageInfo.totalElements,
        current: pageInfo.pageStart,
        pageSize: pageInfo.pageSize,
        onChange: pageChange
      },
      rowKey: ({
        txnHash,
        blockHeight: blockHeight2
      }) => txnHash || blockHeight2
    })]
  });
}
RecentInfo.getInitialProps = () => {
  return [asyncGetPageList$4()];
};
var routeConfig = [
  { path: "home", PageComponent: Home },
  { path: "recentInfo/:type", PageComponent: RecentInfo },
  { path: "blockHeight/:type", PageComponent: BlockHeight },
  { path: "nfrDetail/:type", PageComponent: NfrDetail },
  { path: "contractDetail/:type", PageComponent: ContractDetail },
  { path: "walletDetail/:type", PageComponent: WalletDetail },
  { path: "transaction/:type", PageComponent: Transaction },
  { path: "*", PageComponent: Home }
];
var index = "";
(function dedupeRequire(dedupe) {
  const Module = require("module");
  const resolveFilename = Module._resolveFilename;
  Module._resolveFilename = function(request2, parent, isMain, options) {
    if (request2[0] !== "." && request2[0] !== "/") {
      const parts = request2.split("/");
      const pkgName = parts[0][0] === "@" ? parts[0] + "/" + parts[1] : parts[0];
      if (dedupe.includes(pkgName)) {
        parent = module;
      }
    }
    return resolveFilename(request2, parent, isMain, options);
  };
})(["react", "react-dom"]);
function updateContext(context, routeMatch, store2) {
  context.status = routeMatch ? 200 : 400;
  context.preloadedState = store2.getState();
}
async function getServerData(routeMatch, dispatch) {
  if (routeMatch) {
    const {
      route,
      params,
      pathname
    } = routeMatch[routeMatch.length - 1];
    dispatch(updateRoute({
      params,
      pathname
    }));
    const {
      PageComponent
    } = route;
    const getInitialProps = PageComponent == null ? void 0 : PageComponent.getInitialProps;
    if (getInitialProps) {
      await Promise.all(getInitialProps().map((action) => dispatch(action)));
    }
  }
  return null;
}
async function render(url, context) {
  const routeMatch = reactRouterDom.matchRoutes(routeConfig, url);
  const store2 = getServerStore();
  await getServerData(routeMatch, store2.dispatch);
  updateContext(context, routeMatch, store2);
  return ReactDOMServer__default["default"].renderToString(/* @__PURE__ */ jsxRuntime.jsx(server.StaticRouter, {
    location: url,
    children: /* @__PURE__ */ jsxRuntime.jsx(reactRedux.Provider, {
      store: store2,
      children: /* @__PURE__ */ jsxRuntime.jsx(Layout, {
        routes: routeConfig
      })
    })
  }));
}
exports.render = render;
