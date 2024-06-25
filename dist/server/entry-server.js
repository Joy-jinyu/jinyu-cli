"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var ReactDOMServer = require("react-dom/server");
var server = require("react-router-dom/server");
var reactRouterDom = require("react-router-dom");
var jsxDevRuntime = require("react/jsx-dev-runtime");
var React = require("react");
var antd = require("antd");
var icons = require("@ant-design/icons");
var axios = require("axios");
var qs = require("qs");
var moment = require("moment");
var reactRedux = require("react-redux");
var toolkit = require("@reduxjs/toolkit");
var plots = require("@ant-design/plots");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  var n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    Object.keys(e).forEach(function(k) {
      if (k !== "default") {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}
var ReactDOMServer__default = /* @__PURE__ */ _interopDefaultLegacy(ReactDOMServer);
var React__default = /* @__PURE__ */ _interopDefaultLegacy(React);
var axios__default = /* @__PURE__ */ _interopDefaultLegacy(axios);
var qs__default = /* @__PURE__ */ _interopDefaultLegacy(qs);
var moment__default = /* @__PURE__ */ _interopDefaultLegacy(moment);
var _jsxFileName$m = "/Users/joy/workspace/enterprise/ovo/old/baas-explorer/src/components/Header/index.tsx";
function Header() {
  return /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
    className: "page-header",
    children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
      to: "/",
      children: "Free Chain"
    }, void 0, false, {
      fileName: _jsxFileName$m,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName$m,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}
var _jsxFileName$l = "/Users/joy/workspace/enterprise/ovo/old/baas-explorer/src/components/Footer/index.tsx";
function Footer() {
  return /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
    className: "footer",
    children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("p", {
      className: "footer-title",
      children: "FreeScan"
    }, void 0, false, {
      fileName: _jsxFileName$l,
      lineNumber: 6,
      columnNumber: 13
    }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("p", {
      className: "footer-content",
      children: "Block explorer for FreeChain, a new blockchain built for the next generation of NFR"
    }, void 0, false, {
      fileName: _jsxFileName$l,
      lineNumber: 7,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$l,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}
var index$b = "";
var _jsxFileName$k = "/Users/joy/workspace/enterprise/ovo/old/baas-explorer/src/components/Layout/index.tsx";
function Layout(props) {
  const {
    routes: routes2
  } = props;
  return /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Routes, {
    children: routes2.map((route2) => {
      const {
        path = "",
        PageComponent,
        exact = true,
        redirect
      } = route2;
      if (redirect) {
        return /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Navigate, {
          replace: true,
          to: redirect
        }, path, false, {
          fileName: _jsxFileName$k,
          lineNumber: 22,
          columnNumber: 28
        }, this);
      }
      const Component = PageComponent && (typeof PageComponent === "string" ? /* @__PURE__ */ jsxDevRuntime.jsxDEV(React__default["default"].Suspense, {
        fallback: /* @__PURE__ */ jsxDevRuntime.jsxDEV("p", {
          children: "loading"
        }, void 0, false, {
          fileName: _jsxFileName$k,
          lineNumber: 28,
          columnNumber: 51
        }, this),
        children: React__default["default"].lazy(() => function(t) {
          return Promise.resolve().then(function() {
            return /* @__PURE__ */ _interopNamespace(require(t));
          });
        }(`@pages/${PageComponent}.tsx`))
      }, void 0, false, {
        fileName: _jsxFileName$k,
        lineNumber: 28,
        columnNumber: 25
      }, this) : PageComponent);
      const MyRender = (props2) => /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
        className: "page-layout",
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(Header, {}, void 0, false, {
          fileName: _jsxFileName$k,
          lineNumber: 44,
          columnNumber: 25
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
          className: "content",
          children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(Component, {
            ...props2
          }, void 0, false, {
            fileName: _jsxFileName$k,
            lineNumber: 46,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$k,
          lineNumber: 45,
          columnNumber: 25
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(Footer, {}, void 0, false, {
          fileName: _jsxFileName$k,
          lineNumber: 48,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$k,
        lineNumber: 43,
        columnNumber: 21
      }, this);
      return /* @__PURE__ */ React.createElement(reactRouterDom.Route, {
        ...props,
        path,
        key: path,
        element: /* @__PURE__ */ jsxDevRuntime.jsxDEV(MyRender, {}, void 0, false, {
          fileName: _jsxFileName$k,
          lineNumber: 57,
          columnNumber: 34
        }, this),
        __self: this,
        __source: {
          fileName: _jsxFileName$k,
          lineNumber: 53,
          columnNumber: 21
        }
      });
    })
  }, void 0, false, {
    fileName: _jsxFileName$k,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}
var _jsxFileName$j = "/Users/joy/workspace/enterprise/ovo/old/baas-explorer/src/components/CopyText/index.tsx";
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
  return /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
    children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("span", {
      style: {
        marginRight: 8
      },
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName$j,
      lineNumber: 25,
      columnNumber: 13
    }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(icons.CopyOutlined, {
      onClick: () => {
        copy(props.text);
      }
    }, void 0, false, {
      fileName: _jsxFileName$j,
      lineNumber: 26,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$j,
    lineNumber: 24,
    columnNumber: 9
  }, this);
}
const defaultServerOption = {
  hostname: "192.168.0.198",
  port: "8889"
};
function requestFulfilled(config) {
  if (["get", "delete"].includes(config.method)) {
    config.paramsSerializer = (params) => qs__default["default"].stringify(params, { arrayFormat: "repeat" });
  }
  return config;
}
function requestRejected(error) {
  Promise.reject(error);
}
function responseFulfilled(response) {
  const {
    data: { code, data, message },
    status
  } = response;
  const { isOrigin, isDownLoad } = response.config.headers || {};
  if (status === 200) {
    if (isOrigin) {
      return response;
    } else if (code === 99) {
      return Promise.reject(message);
    } else if (isDownLoad) {
      const contentDisposition = response.headers["content-disposition"];
      const filename = contentDisposition ? contentDisposition.match(/filename=(.*)/)[1] : "download.csv";
      const blob = new Blob([response.data], { type: "text/csv" });
      const elink = document.createElement("a");
      elink.style.display = "none";
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
    });
  }
  return data;
}
function responseRejected(error) {
  const { response } = error;
  console.log(error);
  return Promise.reject(response);
}
function loadConfig(config = {}) {
  const { timeout = 5 * 60 * 1e3, baseURL = "" } = config;
  console.log(baseURL);
  const axiosInstance = axios__default["default"].create({
    baseURL,
    timeout
  });
  axiosInstance.interceptors.request.use(requestFulfilled, requestRejected);
  axiosInstance.interceptors.response.use(responseFulfilled, responseRejected);
  return axiosInstance;
}
class SingleAxios {
  static getInstance(config) {
    if (!this._axios) {
      this._axios = loadConfig(config);
    }
    return this._axios;
  }
}
__publicField(SingleAxios, "_axios");
const ovoServerConfig = {
  server: {
    hostname: "127.0.0.1",
    port: "8889"
  }
};
const { hostname, port: SERVER_PORT } = ovoServerConfig.server || defaultServerOption;
var request = SingleAxios.getInstance({
  baseURL: `http://${hostname}:${SERVER_PORT}/api`,
  timeout: 1e4
});
function useSearchNavigate() {
  const navigate = reactRouterDom.useNavigate();
  const jumpToAddress = React.useCallback((address) => {
    request.post("/dashboard/search", {}, {
      params: {
        address
      }
    }).then((res) => {
      const {
        code,
        address: address2
      } = res["data"] || {};
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
      console.log(e, "err 1");
    });
  }, []);
  return jumpToAddress;
}
var index$a = "";
var _jsxFileName$i = "/Users/joy/workspace/enterprise/ovo/old/baas-explorer/src/components/CommonSearch/index.tsx";
const Search = antd.Input.Search;
function CommonSearch() {
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
  return /* @__PURE__ */ jsxDevRuntime.jsxDEV(Search, {
    className: "common-search-btn",
    placeholder: "\u641C\u7D22\u94B1\u5305\u5730\u5740/\u8F6C\u8D26\u54C8\u5E0C/\u5408\u7EA6/\u533A\u5757\u9AD8\u5EA6",
    onSearch
  }, void 0, false, {
    fileName: _jsxFileName$i,
    lineNumber: 22,
    columnNumber: 9
  }, this);
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
var _jsxFileName$h = "/Users/joy/workspace/enterprise/ovo/old/baas-explorer/src/components/NavigateAddress/index.tsx";
function NavigateAddress(props) {
  const {
    address,
    isWrapText = true
  } = props;
  const jumpToAddress = useSearchNavigate();
  const handleBtn = React.useCallback(() => {
    jumpToAddress(address);
  }, [address]);
  return /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Button, {
    style: {
      paddingLeft: 0
    },
    ...props,
    type: "link",
    onClick: handleBtn,
    children: isWrapText ? overLenTextShow(address) : address
  }, void 0, false, {
    fileName: _jsxFileName$h,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}
var _jsxFileName$g = "/Users/joy/workspace/enterprise/ovo/old/baas-explorer/src/components/DownloadCvs/index.tsx";
function DownloadCvs(props) {
  const {
    paramKey,
    paramValue
  } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const [imgStr, setImgStr] = React.useState("");
  const [uuid, setUuid] = React.useState("");
  const [form] = antd.Form.useForm();
  const {
    RangePicker
  } = antd.DatePicker;
  const formItemLayout = {
    labelCol: {
      sm: {
        span: 4
      }
    },
    wrapperCol: {
      sm: {
        span: 16
      }
    }
  };
  const handleExportBtn = () => {
    setIsOpen(!isOpen);
  };
  const requestCaptcha = React.useCallback(() => {
    request.get("/sys/file/captchaImage").then((data) => {
      const {
        uuid: uuid2,
        img
      } = data;
      setImgStr(img);
      setUuid(uuid2);
    }).catch((err) => {
      console.log("err:", err);
    });
  }, []);
  React.useEffect(() => {
    if (isOpen) {
      requestCaptcha();
    }
  }, [isOpen]);
  function handleSubmit() {
    form.validateFields().then((res) => {
      const {
        time,
        code
      } = res;
      const [startTime, endTime] = time;
      request.post("/sys/file/downloadFileByPage", {
        file: {
          mapperId: "transactionsService"
        },
        content: {
          [paramKey]: paramValue,
          startTime: startTime.valueOf(),
          endTime: endTime.valueOf()
        },
        captcha: {
          code,
          uuid
        }
      }, {
        headers: {
          isDownLoad: true
        }
      }).then(() => {
        antd.message.success("\u4E0B\u8F7D\u6210\u529F");
        setIsOpen(false);
      }).catch(() => {
        requestCaptcha();
      });
    });
  }
  function handleCancel() {
    setIsOpen(false);
    form.resetFields();
  }
  function handleDate(e) {
    const distance = e.target.value;
    form.setFieldValue("time", [moment__default["default"]().subtract(distance, "months"), moment__default["default"]()]);
  }
  return /* @__PURE__ */ jsxDevRuntime.jsxDEV(jsxDevRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Button, {
      type: "link",
      block: true,
      onClick: handleExportBtn,
      children: ["\u5BFC\u51FA\u4E3ACSV", /* @__PURE__ */ jsxDevRuntime.jsxDEV(icons.DownloadOutlined, {
        className: "title-icon"
      }, void 0, false, {
        fileName: _jsxFileName$g,
        lineNumber: 111,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$g,
      lineNumber: 109,
      columnNumber: 13
    }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Modal, {
      title: "\u4E0B\u8F7D",
      open: isOpen,
      destroyOnClose: true,
      okText: "\u4E0B\u8F7D",
      cancelText: "\u53D6\u6D88",
      onOk: handleSubmit,
      onCancel: handleCancel,
      children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Form, {
        name: "downloadCsv",
        form,
        ...formItemLayout,
        onFinish: handleSubmit,
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Row, {
          gutter: 24,
          children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
            span: 24,
            children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Form.Item, {
              name: "time",
              label: "\u65F6\u95F4",
              initialValue: [moment__default["default"]().startOf("day").subtract(1, "months"), moment__default["default"]().startOf("day")],
              rules: [{
                type: "array",
                required: true,
                message: "\u8BF7\u9009\u62E9\u65F6\u95F4"
              }],
              children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(RangePicker, {
                format: "YYYY-MM-DD"
              }, void 0, false, {
                fileName: _jsxFileName$g,
                lineNumber: 147,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$g,
              lineNumber: 130,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$g,
            lineNumber: 129,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$g,
          lineNumber: 128,
          columnNumber: 21
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Row, {
          gutter: 24,
          style: {
            marginBottom: 24,
            marginLeft: "14%"
          },
          children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
            span: 24,
            children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Radio.Group, {
              defaultValue: 1,
              onChange: handleDate,
              buttonStyle: "solid",
              children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Radio.Button, {
                value: 1,
                children: "\u8FD1\u4E00\u4E2A\u6708"
              }, void 0, false, {
                fileName: _jsxFileName$g,
                lineNumber: 161,
                columnNumber: 33
              }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Radio.Button, {
                value: 2,
                children: "\u8FD1\u4E09\u4E2A\u6708"
              }, void 0, false, {
                fileName: _jsxFileName$g,
                lineNumber: 162,
                columnNumber: 33
              }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Radio.Button, {
                value: 6,
                children: "\u8FD1\u534A\u5E74"
              }, void 0, false, {
                fileName: _jsxFileName$g,
                lineNumber: 163,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$g,
              lineNumber: 156,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$g,
            lineNumber: 155,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$g,
          lineNumber: 151,
          columnNumber: 21
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Form.Item, {
          name: "code",
          label: "\u9A8C\u8BC1\u7801",
          rules: [{
            required: true,
            message: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"
          }],
          children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Row, {
            gutter: 24,
            children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
              span: 12,
              children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Input, {
                placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"
              }, void 0, false, {
                fileName: _jsxFileName$g,
                lineNumber: 180,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$g,
              lineNumber: 179,
              columnNumber: 29
            }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
              span: 12,
              children: /* @__PURE__ */ jsxDevRuntime.jsxDEV("img", {
                src: `data:image/gif;base64,${imgStr}`
              }, void 0, false, {
                fileName: _jsxFileName$g,
                lineNumber: 183,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$g,
              lineNumber: 182,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$g,
            lineNumber: 178,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$g,
          lineNumber: 168,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$g,
        lineNumber: 122,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$g,
      lineNumber: 113,
      columnNumber: 13
    }, this)]
  }, void 0, true);
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
  return request.get("/dashboard/countDetail").then((res) => {
    return dispatch(getCountDetail(res == null ? void 0 : res.data));
  }).catch((e) => {
    console.log(e, "err 4");
  });
};
const asyncGetLastBlock = () => (dispatch) => {
  return request.get("/block/getLastBlock").then((res) => {
    return dispatch(getLastBlock(res == null ? void 0 : res.data));
  }).catch((e) => {
    console.log(e, "err 5");
  });
};
const asyncGetLastTransactions = () => (dispatch) => {
  return request.get("/transactions/getLastTransactions").then((res) => {
    return dispatch(getLastTransactions(res == null ? void 0 : res.data));
  }).catch((e) => {
    console.log(e, "err 6");
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
  return request.post({ url, query: { pageSize, pageStart } }).then((res) => {
    return dispatch(updateList$4(res == null ? void 0 : res.data));
  }).catch((e) => {
    console.log(e, "err 9");
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
      const {
        responseList = [],
        pageStart,
        pageSize,
        totalElements,
        totalPages
      } = payload;
      state.list = responseList.map((item) => ({
        key: item.createTime,
        ...item
      }));
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
  return request.post(
    "/transactions/queryByPage",
    {
      blockHeight: height,
      ...pageInfo
    }
  ).then((res) => {
    return dispatch(updateList$3(res == null ? void 0 : res.data));
  }).catch((e) => {
    console.log(e, "err 2");
  });
};
const asyncGetDetail$1 = (id = "") => async (dispatch, getState) => {
  const { main: main2 } = getState();
  const address = id ? id : main2.routeParam.type;
  const res = await request.post(
    "/dashboard/search",
    {
      address
    }
  );
  dispatch(updateInfo$2((res == null ? void 0 : res.data) || {}));
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
      const {
        responseList = [],
        pageStart,
        pageSize,
        totalElements,
        totalPages
      } = payload;
      state.list = responseList.map((item) => ({
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
const { updateList: updateList$2, updatePage: updatePage$2, getInitState: getInitState$3, updateInfo: updateInfo$1 } = contractDetailSlice.actions;
const changTable$2 = (page, pageSize, hash) => async (dispatch) => {
  dispatch(updatePage$2({ pageStart: page, pageSize }));
  dispatch(asyncGetPageList$2(hash));
};
const asyncGetPageList$2 = (id = "") => (dispatch, getState) => {
  const { main: main2, contractDetail: contractDetail2 } = getState();
  const { pageInfo } = contractDetail2;
  const nfrIds = id ? id : main2.routeParam.type;
  return request.post(
    "/transactions/queryByPage",
    { address: nfrIds, ...pageInfo }
  ).then((res) => {
    return dispatch(updateList$2((res == null ? void 0 : res.data) || {}));
  }).catch((e) => {
    console.log(e, "err 3");
  });
};
const asyncGetContractDetail = (id = "") => async (dispatch, getState) => {
  const { main: main2 } = getState();
  const nfrIds = id ? id : main2.routeParam.type;
  const res = await request.post(
    "/dashboard/search",
    { address: nfrIds }
  );
  dispatch(updateInfo$1((res == null ? void 0 : res.data) || {}));
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
      const {
        responseList = [],
        pageStart,
        pageSize,
        totalElements,
        totalPages
      } = payload;
      state.list = responseList.map((item) => ({
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
const { updateList: updateList$1, getInitState: getInitState$2, updatePage: updatePage$1, updateInfo } = walletDetailSlice.actions;
const changTable$1 = (page, pageSize, hash) => async (dispatch) => {
  dispatch(updatePage$1({ pageStart: page, pageSize }));
  dispatch(asyncGetPageList$1(hash));
};
const asyncGetPageList$1 = (id = "") => (dispatch, getState) => {
  const { main: main2, walletDetail: walletDetail2 } = getState();
  const { pageInfo } = walletDetail2;
  const { pageStart, pageSize } = pageInfo;
  const nfrIds = id ? id : main2.routeParam.type;
  return request.post(
    "/transactions/queryByPage",
    { address: nfrIds, pageStart, pageSize }
  ).then((res) => {
    return dispatch(updateList$1(res == null ? void 0 : res.data));
  }).catch((e) => {
    console.log(e, "err 11");
  });
};
const asyncGetNfrDetail$1 = (id = "") => async (dispatch, getState) => {
  const { main: main2 } = getState();
  const walletId = id ? id : main2.routeParam.type;
  const info = await request.post(
    "/dashboard/search",
    { address: walletId }
  );
  dispatch(updateInfo((info == null ? void 0 : info.data) || {}));
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
      const {
        responseList = [],
        pageStart,
        pageSize,
        totalElements,
        totalPages
      } = payload;
      state.list = responseList.map((item) => ({
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
const { updateList, updatePage, getInitState: getInitState$1, updateDetail: updateDetail$1 } = nfrDetailSlice.actions;
const changTable = (page, pageSize, hash) => async (dispatch) => {
  dispatch(updatePage({ pageStart: page, pageSize }));
  dispatch(asyncGetPageList(hash));
};
const asyncGetPageList = (id = "", address = "") => (dispatch, getState) => {
  const { main: main2, nfrDetail: nfrDetail2 } = getState();
  const { pageInfo } = nfrDetail2;
  const { address: contractAdress, type } = main2.routeParam;
  const nfrIds = id ? id : type;
  const contractAddress = address ? address : contractAdress;
  return request.post(
    "/transactions/queryByPage",
    { nfrIds, address: contractAddress, ...pageInfo }
  ).then((res) => {
    return dispatch(updateList(res == null ? void 0 : res.data));
  }).catch((e) => {
    console.log(e, "err 7");
  });
};
const asyncGetNfrDetail = (type = "", address = "") => (dispatch, getState) => {
  const { main: main2 } = getState();
  const { type: nrfType, address: contractAdress } = main2.routeParam;
  const tokenId = type ? type : nrfType;
  const contractAddress = address ? address : contractAdress;
  return request.post(
    "/nfr/queryInfo",
    { tokenId, contractAddress }
  ).then((res) => {
    return dispatch(updateDetail$1((res == null ? void 0 : res.data) || {}));
  }).catch((e) => {
    console.log(e, "err 8");
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
const asyncGetDetail = (id = "") => (dispatch, getState) => {
  const { main: main2 } = getState();
  const txnHash = id ? id : main2.routeParam.type;
  return request.post("/transactions/queryInfo", { txnHash }).then((res) => {
    return dispatch(updateDetail((res == null ? void 0 : res.data) || {}));
  }).catch((e) => {
    console.log(e, "err 10");
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
var _jsxFileName$f = "/Users/joy/workspace/enterprise/ovo/old/baas-explorer/src/pages/Home/Overview/index.tsx";
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
    yField: "transaction",
    height: 116,
    xAxis: {
      tickCount: 5
    }
  };
  return /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
    className: "overview",
    children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("h2", {
      children: "\u603B\u89C8"
    }, void 0, false, {
      fileName: _jsxFileName$f,
      lineNumber: 32,
      columnNumber: 13
    }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Row, {
      gutter: GUTTER$1,
      children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
        span: 16,
        className: "left-info",
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Row, {
          gutter: GUTTER$1,
          children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
            span: SPAN,
            children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("p", {
              className: "title",
              children: "\u4EA4\u6613\u6BD4\u6570"
            }, void 0, false, {
              fileName: _jsxFileName$f,
              lineNumber: 37,
              columnNumber: 29
            }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("p", {
              className: "introduc-content",
              children: detail.txnCount
            }, void 0, false, {
              fileName: _jsxFileName$f,
              lineNumber: 38,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$f,
            lineNumber: 36,
            columnNumber: 25
          }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
            span: SPAN,
            children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("p", {
              className: "title",
              children: "\u533A\u5757\u9AD8\u5EA6"
            }, void 0, false, {
              fileName: _jsxFileName$f,
              lineNumber: 43,
              columnNumber: 29
            }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("p", {
              className: "introduc-content",
              children: detail.blockHeight
            }, void 0, false, {
              fileName: _jsxFileName$f,
              lineNumber: 44,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$f,
            lineNumber: 42,
            columnNumber: 25
          }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
            span: SPAN,
            children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("p", {
              className: "title",
              children: "\u5E73\u5747\u6BCF\u79D2\u4EA4\u6613"
            }, void 0, false, {
              fileName: _jsxFileName$f,
              lineNumber: 49,
              columnNumber: 29
            }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("p", {
              className: "introduc-content",
              children: detail.avgTxnCount
            }, void 0, false, {
              fileName: _jsxFileName$f,
              lineNumber: 50,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$f,
            lineNumber: 48,
            columnNumber: 25
          }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
            span: SPAN,
            children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("p", {
              className: "title",
              children: "\u94B1\u5305\u5730\u5740\u603B\u91CF"
            }, void 0, false, {
              fileName: _jsxFileName$f,
              lineNumber: 55,
              columnNumber: 29
            }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("p", {
              className: "introduc-content",
              children: detail.addressCount
            }, void 0, false, {
              fileName: _jsxFileName$f,
              lineNumber: 56,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$f,
            lineNumber: 54,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$f,
          lineNumber: 35,
          columnNumber: 21
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Row, {
          gutter: GUTTER$1,
          children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
            span: SPAN,
            children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("p", {
              className: "title",
              children: "\u6700\u8FD124H\u4EA4\u6613\u6BD4\u6570"
            }, void 0, false, {
              fileName: _jsxFileName$f,
              lineNumber: 63,
              columnNumber: 29
            }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("p", {
              className: "introduc-content",
              children: detail.recentTxnCount
            }, void 0, false, {
              fileName: _jsxFileName$f,
              lineNumber: 64,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$f,
            lineNumber: 62,
            columnNumber: 25
          }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
            span: SPAN,
            children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("p", {
              className: "title",
              children: "\u8FD124H\u51FA\u5757\u91CF"
            }, void 0, false, {
              fileName: _jsxFileName$f,
              lineNumber: 69,
              columnNumber: 29
            }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("p", {
              className: "introduc-content",
              children: detail.recentBlockCount
            }, void 0, false, {
              fileName: _jsxFileName$f,
              lineNumber: 70,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$f,
            lineNumber: 68,
            columnNumber: 25
          }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
            span: SPAN,
            children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("p", {
              className: "title",
              children: "\u5E73\u5747\u51FA\u5757\u65F6\u95F4"
            }, void 0, false, {
              fileName: _jsxFileName$f,
              lineNumber: 75,
              columnNumber: 29
            }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("p", {
              className: "introduc-content",
              children: detail.avgBlockTime
            }, void 0, false, {
              fileName: _jsxFileName$f,
              lineNumber: 76,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$f,
            lineNumber: 74,
            columnNumber: 25
          }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
            span: SPAN,
            children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("p", {
              className: "title",
              children: "\u667A\u80FD\u5408\u7EA6\u91CF"
            }, void 0, false, {
              fileName: _jsxFileName$f,
              lineNumber: 81,
              columnNumber: 29
            }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("p", {
              className: "introduc-content",
              children: detail.contractCount
            }, void 0, false, {
              fileName: _jsxFileName$f,
              lineNumber: 82,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$f,
            lineNumber: 80,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$f,
          lineNumber: 61,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$f,
        lineNumber: 34,
        columnNumber: 17
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
        span: 8,
        children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(plots.Line, {
          ...config
        }, void 0, false, {
          fileName: _jsxFileName$f,
          lineNumber: 89,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$f,
        lineNumber: 88,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$f,
      lineNumber: 33,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$f,
    lineNumber: 31,
    columnNumber: 9
  }, this);
}
var index$8 = "";
var _jsxFileName$e = "/Users/joy/workspace/enterprise/ovo/old/baas-explorer/src/pages/Home/InfoList/index.tsx";
function InfoList(props) {
  const {
    lastBlock = [],
    lastTransactions = []
  } = props;
  const BLOCK_TYPE2 = "recentBlock";
  const TRANS_TYPE2 = "recentTrans";
  const overLenText = React.useCallback(overLenTextShow, []);
  return /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
    className: "info-list",
    children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.List, {
      className: "list",
      bordered: true,
      header: /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
        className: "list-head",
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("span", {
          children: "\u6700\u65B0\u51FA\u5757"
        }, void 0, false, {
          fileName: _jsxFileName$e,
          lineNumber: 37,
          columnNumber: 25
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
          to: `recentInfo/${BLOCK_TYPE2}`,
          children: "\u66F4\u591A"
        }, void 0, false, {
          fileName: _jsxFileName$e,
          lineNumber: 38,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$e,
        lineNumber: 36,
        columnNumber: 21
      }, this),
      dataSource: lastBlock,
      renderItem: (item) => {
        var _a;
        return /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.List.Item, {
          children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.List.Item.Meta, {
            title: /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Popover, {
              content: item.blockHeight,
              children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
                to: `/blockHeight/${item.blockHeight}`,
                children: `# ${overLenText(item.blockHeight)}`
              }, void 0, false, {
                fileName: _jsxFileName$e,
                lineNumber: 47,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$e,
              lineNumber: 46,
              columnNumber: 33
            }, this),
            description: `${item.scendsTakenTo} scends ago`
          }, void 0, false, {
            fileName: _jsxFileName$e,
            lineNumber: 44,
            columnNumber: 25
          }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("span", {
            children: `${(_a = item == null ? void 0 : item.transactionsList) == null ? void 0 : _a.length} \u6BD4\u4EA4\u6613`
          }, void 0, false, {
            fileName: _jsxFileName$e,
            lineNumber: 56,
            columnNumber: 25
          }, this)]
        }, item.hash, true, {
          fileName: _jsxFileName$e,
          lineNumber: 43,
          columnNumber: 21
        }, this);
      }
    }, void 0, false, {
      fileName: _jsxFileName$e,
      lineNumber: 32,
      columnNumber: 13
    }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.List, {
      className: "list",
      bordered: true,
      header: /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
        className: "list-head",
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("span", {
          children: "\u6700\u65B0\u4EA4\u6613"
        }, void 0, false, {
          fileName: _jsxFileName$e,
          lineNumber: 65,
          columnNumber: 25
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
          to: `recentInfo/${TRANS_TYPE2}`,
          children: "\u66F4\u591A"
        }, void 0, false, {
          fileName: _jsxFileName$e,
          lineNumber: 66,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$e,
        lineNumber: 64,
        columnNumber: 21
      }, this),
      dataSource: lastTransactions,
      renderItem: (item) => /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.List.Item, {
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.List.Item.Meta, {
          title: /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Popover, {
            content: item.txnHash,
            children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
              to: `/transaction/${item.txnHash}`,
              children: `# ${overLenText(item.txnHash)}`
            }, void 0, false, {
              fileName: _jsxFileName$e,
              lineNumber: 75,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$e,
            lineNumber: 74,
            columnNumber: 33
          }, this),
          description: `${item.scendsTakenTo} scends ago`
        }, void 0, false, {
          fileName: _jsxFileName$e,
          lineNumber: 72,
          columnNumber: 25
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
          className: "briefly-wrap",
          children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
            className: "briefly",
            children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("span", {
              children: "From"
            }, void 0, false, {
              fileName: _jsxFileName$e,
              lineNumber: 84,
              columnNumber: 33
            }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Popover, {
              content: item.fromAddress,
              children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
                to: `/walletDetail/${item.fromAddress}`,
                children: `${overLenText(item.fromAddress)}`
              }, void 0, false, {
                fileName: _jsxFileName$e,
                lineNumber: 86,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$e,
              lineNumber: 85,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$e,
            lineNumber: 83,
            columnNumber: 29
          }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
            className: "briefly",
            children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("span", {
              children: "To"
            }, void 0, false, {
              fileName: _jsxFileName$e,
              lineNumber: 92,
              columnNumber: 33
            }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Popover, {
              content: item.toAddress,
              children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(NavigateAddress, {
                address: item.toAddress
              }, void 0, false, {
                fileName: _jsxFileName$e,
                lineNumber: 94,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$e,
              lineNumber: 93,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$e,
            lineNumber: 91,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$e,
          lineNumber: 82,
          columnNumber: 25
        }, this)]
      }, item.txnHash, true, {
        fileName: _jsxFileName$e,
        lineNumber: 71,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$e,
      lineNumber: 60,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$e,
    lineNumber: 31,
    columnNumber: 9
  }, this);
}
var index$7 = "";
var _jsxFileName$d = "/Users/joy/workspace/enterprise/ovo/old/baas-explorer/src/pages/Home/index.tsx";
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
  return /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
    children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
      className: "search-content",
      children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
        className: "search-content-left",
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
          className: "title",
          children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Image, {
            width: 50,
            height: 50,
            preview: false,
            src: "cc.jpeg"
          }, void 0, false, {
            fileName: _jsxFileName$d,
            lineNumber: 38,
            columnNumber: 25
          }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("span", {
            className: "title-text",
            children: "Free Blockchain Explorer"
          }, void 0, false, {
            fileName: _jsxFileName$d,
            lineNumber: 44,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$d,
          lineNumber: 37,
          columnNumber: 21
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
          className: "search-wrap",
          children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(CommonSearch, {}, void 0, false, {
            fileName: _jsxFileName$d,
            lineNumber: 49,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$d,
          lineNumber: 48,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$d,
        lineNumber: 36,
        columnNumber: 17
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
        className: "search-content-right",
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("p", {
          children: "\u514D\u8D39\u53D1\u578B\u6570\u5B57\u85CF\u54C1"
        }, void 0, false, {
          fileName: _jsxFileName$d,
          lineNumber: 53,
          columnNumber: 21
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("p", {
          children: "\u53EF\u514D\u8D39\u4F7F\u7528\u798F\u745E\u94FE,\u7531\u56FD\u5185\u9886\u5148\u3001\u81EA\u4E3B\u7814\u53D1\u7684\u798F\u745E\u94FE\u4F5C\u4E3A\u5E95\u5C42\u533A\u5757\u94FE\u6280\u672F\u652F\u6491\uFF0C\u5728\u4FDD\u8BC1\u5B89\u5168\u548C\u6027\u80FD\u7684\u540C\u65F6\uFF0C\u80FD\u6EE1\u8DB3\u5404\u7C7B\u590D\u6742\u7684\u4E1A\u52A1\u573A\u666F\u3002\u57280\u6210\u672C\u7684\u521B\u4F5C\u548C\u4EA4\u6613\u4E2D\u4F53\u9A8CNFR\u751F\u6001\u3002"
        }, void 0, false, {
          fileName: _jsxFileName$d,
          lineNumber: 54,
          columnNumber: 21
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Button, {
          ghost: true,
          className: "experience-btn",
          type: "primary",
          children: "\u7ACB\u5373\u4F53\u9A8C"
        }, void 0, false, {
          fileName: _jsxFileName$d,
          lineNumber: 57,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$d,
        lineNumber: 52,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$d,
      lineNumber: 35,
      columnNumber: 13
    }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(Overview, {
      detail: countDetail
    }, void 0, false, {
      fileName: _jsxFileName$d,
      lineNumber: 62,
      columnNumber: 13
    }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(InfoList, {
      lastBlock,
      lastTransactions
    }, void 0, false, {
      fileName: _jsxFileName$d,
      lineNumber: 63,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$d,
    lineNumber: 34,
    columnNumber: 9
  }, this);
}
Home.getInitialProps = () => {
  return [asyncGetCountDetail(), asyncGetLastBlock(), asyncGetLastTransactions()];
};
var _jsxFileName$c = "/Users/joy/workspace/enterprise/ovo/old/baas-explorer/src/pages/BlockHeight/constants.tsx";
const columns$3 = [{
  title: "\u65F6\u95F4",
  dataIndex: "createTime"
}, {
  title: "\u4EA4\u6613\u54C8\u5E0C",
  dataIndex: "txnHash",
  render: (txnHash) => /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Popover, {
    content: txnHash,
    children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
      to: `/transaction/${txnHash}`,
      children: overLenTextShow(txnHash)
    }, void 0, false, {
      fileName: _jsxFileName$c,
      lineNumber: 16,
      columnNumber: 17
    }, void 0)
  }, void 0, false, {
    fileName: _jsxFileName$c,
    lineNumber: 15,
    columnNumber: 13
  }, void 0)
}, {
  title: "\u53D1\u9001\u65B9",
  dataIndex: "fromAddress",
  render: (fromAddress) => /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Popover, {
    content: fromAddress,
    children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
      to: `/walletDetail/${fromAddress}`,
      children: overLenTextShow(fromAddress)
    }, void 0, false, {
      fileName: _jsxFileName$c,
      lineNumber: 27,
      columnNumber: 17
    }, void 0)
  }, void 0, false, {
    fileName: _jsxFileName$c,
    lineNumber: 26,
    columnNumber: 13
  }, void 0)
}, {
  title: "\u63A5\u6536\u65B9",
  dataIndex: "toAddress",
  render: (toAddress) => /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Popover, {
    content: toAddress,
    children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(NavigateAddress, {
      address: toAddress
    }, void 0, false, {
      fileName: _jsxFileName$c,
      lineNumber: 38,
      columnNumber: 17
    }, void 0)
  }, void 0, false, {
    fileName: _jsxFileName$c,
    lineNumber: 37,
    columnNumber: 13
  }, void 0)
}, {
  title: "\u7C7B\u578B",
  dataIndex: "methodName"
}, {
  title: "NFRID",
  dataIndex: "nfrList",
  render(nfrList = [], record) {
    if (nfrList.length === 1) {
      const nfr = nfrList[0];
      return /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
        to: `/nfrDetail/${nfr.id}/${record.contractAddress}`,
        children: nfr.id
      }, void 0, false, {
        fileName: _jsxFileName$c,
        lineNumber: 56,
        columnNumber: 21
      }, this);
    }
    return "--";
  }
}];
var index$6 = "";
var _jsxFileName$b = "/Users/joy/workspace/enterprise/ovo/old/baas-explorer/src/pages/BlockHeight/index.tsx";
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
    dispatch(asyncGetPageList$3(type));
    dispatch(asyncGetDetail$1(type));
    return () => {
      dispatch(getInitState$4());
    };
  }, [type]);
  const pageChange = React.useCallback((page, pageSize) => {
    dispatch(changTable$3(page, pageSize, type));
  }, []);
  return /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
    className: "block-height",
    children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
      className: "common-search",
      children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(CommonSearch, {
        borderd: true
      }, void 0, false, {
        fileName: _jsxFileName$b,
        lineNumber: 42,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$b,
      lineNumber: 41,
      columnNumber: 13
    }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
      className: "title-wrap",
      children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
        className: "head-title",
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("span", {
          className: "address",
          children: `# ${address}`
        }, void 0, false, {
          fileName: _jsxFileName$b,
          lineNumber: 46,
          columnNumber: 21
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(icons.ClockCircleOutlined, {
          style: {
            marginRight: 12
          }
        }, void 0, false, {
          fileName: _jsxFileName$b,
          lineNumber: 47,
          columnNumber: 21
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("span", {
          children: `${formatSeconds(scendsTakenTo(new Date(searchData.createTime).getTime()))} ago(${searchData.createTime})`
        }, void 0, false, {
          fileName: _jsxFileName$b,
          lineNumber: 48,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$b,
        lineNumber: 45,
        columnNumber: 17
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("p", {
        children: searchData.hash
      }, void 0, false, {
        fileName: _jsxFileName$b,
        lineNumber: 52,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$b,
      lineNumber: 44,
      columnNumber: 13
    }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
      className: "table-title",
      children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("h3", {
        className: "title",
        children: "\u8BE5\u9AD8\u5EA6\u4E0B\u4EA4\u6613"
      }, void 0, false, {
        fileName: _jsxFileName$b,
        lineNumber: 55,
        columnNumber: 17
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(DownloadCvs, {
        paramKey: "blockHeight",
        paramValue: info.address
      }, void 0, false, {
        fileName: _jsxFileName$b,
        lineNumber: 56,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$b,
      lineNumber: 54,
      columnNumber: 13
    }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Table, {
      dataSource: list,
      pagination: {
        total: pageInfo.totalElements,
        current: pageInfo.pageStart,
        pageSize: pageInfo.pageSize,
        onChange: pageChange
      },
      columns: columns$3,
      rowKey: (record) => record.txnHash
    }, void 0, false, {
      fileName: _jsxFileName$b,
      lineNumber: 59,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$b,
    lineNumber: 40,
    columnNumber: 9
  }, this);
}
BlockHeight.getInitialProps = () => {
  return [asyncGetPageList$3(), asyncGetDetail$1()];
};
var _jsxFileName$a = "/Users/joy/workspace/enterprise/ovo/old/baas-explorer/src/pages/NfrDetail/constants.tsx";
const columns$2 = [{
  title: "\u65F6\u95F4",
  dataIndex: "createTime"
}, {
  title: "\u4EA4\u6613\u54C8\u5E0C",
  dataIndex: "txnHash",
  render: (text) => /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Popover, {
    content: text,
    children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
      to: `/transaction/${text}`,
      children: overLenTextShow(text)
    }, void 0, false, {
      fileName: _jsxFileName$a,
      lineNumber: 16,
      columnNumber: 17
    }, void 0)
  }, void 0, false, {
    fileName: _jsxFileName$a,
    lineNumber: 15,
    columnNumber: 13
  }, void 0)
}, {
  title: "\u53D1\u9001\u65B9",
  dataIndex: "fromAddress",
  render: (fromAddress) => /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Popover, {
    content: fromAddress,
    children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
      to: `/walletDetail/${fromAddress}`,
      children: overLenTextShow(fromAddress)
    }, void 0, false, {
      fileName: _jsxFileName$a,
      lineNumber: 25,
      columnNumber: 17
    }, void 0)
  }, void 0, false, {
    fileName: _jsxFileName$a,
    lineNumber: 24,
    columnNumber: 13
  }, void 0)
}, {
  title: "\u63A5\u6536\u65B9",
  dataIndex: "toAddress",
  render: (toAddress) => /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Popover, {
    content: toAddress,
    children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(NavigateAddress, {
      address: toAddress
    }, void 0, false, {
      fileName: _jsxFileName$a,
      lineNumber: 36,
      columnNumber: 17
    }, void 0)
  }, void 0, false, {
    fileName: _jsxFileName$a,
    lineNumber: 35,
    columnNumber: 13
  }, void 0)
}, {
  title: "\u7C7B\u578B",
  dataIndex: "methodName"
}];
var index$5 = "";
var _jsxFileName$9 = "/Users/joy/workspace/enterprise/ovo/old/baas-explorer/src/pages/NfrDetail/index.tsx";
function NfrDetail() {
  const {
    type = "",
    address = ""
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
      dispatch(asyncGetPageList(type, address));
      dispatch(asyncGetNfrDetail(type, address));
    }
    return () => {
      dispatch(getInitState$1());
    };
  }, []);
  const pageChange = React.useCallback((page, pageSize) => {
    dispatch(changTable(page, pageSize, type));
  }, []);
  return /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
    className: "nfr-detail",
    children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("h3", {
      className: "title",
      children: "NFR\u8BE6\u60C5"
    }, void 0, false, {
      fileName: _jsxFileName$9,
      lineNumber: 44,
      columnNumber: 13
    }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
      className: "detail-header",
      children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("span", {
        className: "name",
        children: detail.name
      }, void 0, false, {
        fileName: _jsxFileName$9,
        lineNumber: 46,
        columnNumber: 17
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
        to: "",
        children: detail.contractAddress
      }, void 0, false, {
        fileName: _jsxFileName$9,
        lineNumber: 47,
        columnNumber: 17
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("span", {
        className: "contrat",
        children: `# ${detail.nfrId}`
      }, void 0, false, {
        fileName: _jsxFileName$9,
        lineNumber: 48,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$9,
      lineNumber: 45,
      columnNumber: 13
    }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
      className: "detail-info",
      children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Row, {
        gutter: 24,
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          className: "label",
          span: 2,
          children: /* @__PURE__ */ jsxDevRuntime.jsxDEV("span", {
            children: "NFR\u96C6\u5408"
          }, void 0, false, {
            fileName: _jsxFileName$9,
            lineNumber: 53,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$9,
          lineNumber: 52,
          columnNumber: 21
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          span: 22,
          children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
            to: `/contractDetail/${detail.contractAddress}`,
            children: detail.contractAddress
          }, void 0, false, {
            fileName: _jsxFileName$9,
            lineNumber: 56,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$9,
          lineNumber: 55,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$9,
        lineNumber: 51,
        columnNumber: 17
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Row, {
        gutter: 24,
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          className: "label",
          span: 2,
          children: /* @__PURE__ */ jsxDevRuntime.jsxDEV("span", {
            children: "NFRID"
          }, void 0, false, {
            fileName: _jsxFileName$9,
            lineNumber: 63,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$9,
          lineNumber: 62,
          columnNumber: 21
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
            to: "",
            children: detail.nfrId
          }, void 0, false, {
            fileName: _jsxFileName$9,
            lineNumber: 66,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$9,
          lineNumber: 65,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$9,
        lineNumber: 61,
        columnNumber: 17
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Row, {
        gutter: 24,
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          className: "label",
          span: 2,
          children: /* @__PURE__ */ jsxDevRuntime.jsxDEV("span", {
            children: "Nfr\u6570\u91CF"
          }, void 0, false, {
            fileName: _jsxFileName$9,
            lineNumber: 71,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$9,
          lineNumber: 70,
          columnNumber: 21
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          children: detail.amount
        }, void 0, false, {
          fileName: _jsxFileName$9,
          lineNumber: 73,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$9,
        lineNumber: 69,
        columnNumber: 17
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Row, {
        gutter: 24,
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          className: "label",
          span: 2,
          children: /* @__PURE__ */ jsxDevRuntime.jsxDEV("span", {
            children: "\u6301\u6709\u4EBA\u6570\u91CF"
          }, void 0, false, {
            fileName: _jsxFileName$9,
            lineNumber: 77,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$9,
          lineNumber: 76,
          columnNumber: 21
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          children: detail.ownerCount
        }, void 0, false, {
          fileName: _jsxFileName$9,
          lineNumber: 79,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$9,
        lineNumber: 75,
        columnNumber: 17
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Row, {
        gutter: 24,
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          className: "label",
          span: 2,
          children: /* @__PURE__ */ jsxDevRuntime.jsxDEV("span", {
            children: "\u751F\u6210\u8005"
          }, void 0, false, {
            fileName: _jsxFileName$9,
            lineNumber: 84,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$9,
          lineNumber: 83,
          columnNumber: 21
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
            to: `/walletDetail/${detail.creatorAddress}`,
            children: detail.creatorAddress
          }, void 0, false, {
            fileName: _jsxFileName$9,
            lineNumber: 87,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$9,
          lineNumber: 86,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$9,
        lineNumber: 82,
        columnNumber: 17
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Row, {
        gutter: 24,
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          className: "label",
          span: 2,
          children: /* @__PURE__ */ jsxDevRuntime.jsxDEV("span", {
            children: "\u7C7B\u578B"
          }, void 0, false, {
            fileName: _jsxFileName$9,
            lineNumber: 94,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$9,
          lineNumber: 93,
          columnNumber: 21
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          children: detail.nfrProtocol
        }, void 0, false, {
          fileName: _jsxFileName$9,
          lineNumber: 96,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$9,
        lineNumber: 92,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$9,
      lineNumber: 50,
      columnNumber: 13
    }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
      className: "table-title",
      children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("h3", {
        className: "title",
        children: "\u4EA4\u6613\u8BB0\u5F55"
      }, void 0, false, {
        fileName: _jsxFileName$9,
        lineNumber: 100,
        columnNumber: 17
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(DownloadCvs, {
        paramKey: "nfrIds",
        paramValue: detail.nfrId
      }, void 0, false, {
        fileName: _jsxFileName$9,
        lineNumber: 101,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$9,
      lineNumber: 99,
      columnNumber: 13
    }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Table, {
      dataSource: list,
      pagination: {
        total: pageInfo.totalElements,
        current: pageInfo.pageStart,
        pageSize: pageInfo.pageSize,
        onChange: pageChange
      },
      columns: columns$2,
      rowKey: (record) => record.txnHash
    }, void 0, false, {
      fileName: _jsxFileName$9,
      lineNumber: 103,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$9,
    lineNumber: 43,
    columnNumber: 9
  }, this);
}
NfrDetail.getInitialProps = () => {
  return [asyncGetPageList(), asyncGetNfrDetail()];
};
var _jsxFileName$8 = "/Users/joy/workspace/enterprise/ovo/old/baas-explorer/src/pages/ContractDetail/constants.tsx";
const columns$1 = [{
  title: "\u65F6\u95F4",
  dataIndex: "createTime"
}, {
  title: "\u4EA4\u6613\u54C8\u5E0C",
  dataIndex: "txnHash",
  render: (txnHash) => /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Popover, {
    content: txnHash,
    children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
      to: `/transaction/${txnHash}`,
      children: overLenTextShow(txnHash)
    }, void 0, false, {
      fileName: _jsxFileName$8,
      lineNumber: 16,
      columnNumber: 17
    }, void 0)
  }, void 0, false, {
    fileName: _jsxFileName$8,
    lineNumber: 15,
    columnNumber: 13
  }, void 0)
}, {
  title: "\u53D1\u9001\u65B9",
  dataIndex: "fromAddress",
  render: (fromAddress) => /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Popover, {
    content: fromAddress,
    children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
      to: `/walletDetail/${fromAddress}`,
      children: overLenTextShow(fromAddress)
    }, void 0, false, {
      fileName: _jsxFileName$8,
      lineNumber: 27,
      columnNumber: 17
    }, void 0)
  }, void 0, false, {
    fileName: _jsxFileName$8,
    lineNumber: 26,
    columnNumber: 13
  }, void 0)
}, {
  title: "\u63A5\u6536\u65B9",
  dataIndex: "toAddress",
  render: (toAddress) => /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Popover, {
    content: toAddress,
    children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(NavigateAddress, {
      address: toAddress
    }, void 0, false, {
      fileName: _jsxFileName$8,
      lineNumber: 38,
      columnNumber: 17
    }, void 0)
  }, void 0, false, {
    fileName: _jsxFileName$8,
    lineNumber: 37,
    columnNumber: 13
  }, void 0)
}, {
  title: "\u7C7B\u578B",
  dataIndex: "methodName"
}, {
  title: "NFRID",
  dataIndex: "nfrList",
  render(nfrList = [], record) {
    if (nfrList.length === 1) {
      const nfr = nfrList[0];
      return /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
        to: `/nfrDetail/${nfr.id}/${record.contractAddress}`,
        children: nfr.id
      }, void 0, false, {
        fileName: _jsxFileName$8,
        lineNumber: 56,
        columnNumber: 21
      }, this);
    }
    return "--";
  }
}];
var index$4 = "";
var _jsxFileName$7 = "/Users/joy/workspace/enterprise/ovo/old/baas-explorer/src/pages/ContractDetail/index.tsx";
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
  const pageChange = React.useCallback((page, pageSize) => {
    dispatch(changTable$2(page, pageSize, type));
  }, []);
  return /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
    className: "contract-detail",
    children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
      className: "contract-title",
      children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
        to: "",
        children: `\u5408\u7EA6\uFF1A${info.address}`
      }, void 0, false, {
        fileName: _jsxFileName$7,
        lineNumber: 41,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$7,
      lineNumber: 40,
      columnNumber: 13
    }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
      className: "detail-info",
      children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Row, {
        gutter: 24,
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          className: "label",
          span: 2,
          children: "\u603B\u91CF"
        }, void 0, false, {
          fileName: _jsxFileName$7,
          lineNumber: 45,
          columnNumber: 21
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          span: 22,
          children: tokenCount
        }, void 0, false, {
          fileName: _jsxFileName$7,
          lineNumber: 48,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$7,
        lineNumber: 44,
        columnNumber: 17
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Row, {
        gutter: 24,
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          className: "label",
          span: 2,
          children: /* @__PURE__ */ jsxDevRuntime.jsxDEV("span", {
            children: "\u6301\u6709\u94B1\u5305"
          }, void 0, false, {
            fileName: _jsxFileName$7,
            lineNumber: 52,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$7,
          lineNumber: 51,
          columnNumber: 21
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          children: walletCount
        }, void 0, false, {
          fileName: _jsxFileName$7,
          lineNumber: 54,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$7,
        lineNumber: 50,
        columnNumber: 17
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Row, {
        gutter: 24,
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          className: "label",
          span: 2,
          children: /* @__PURE__ */ jsxDevRuntime.jsxDEV("span", {
            children: "\u4EA4\u6613\u7B14\u6570"
          }, void 0, false, {
            fileName: _jsxFileName$7,
            lineNumber: 58,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$7,
          lineNumber: 57,
          columnNumber: 21
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          children: transactionCount
        }, void 0, false, {
          fileName: _jsxFileName$7,
          lineNumber: 60,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$7,
        lineNumber: 56,
        columnNumber: 17
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Row, {
        gutter: 24,
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          className: "label",
          span: 2,
          children: /* @__PURE__ */ jsxDevRuntime.jsxDEV("span", {
            children: "\u5408\u7EA6"
          }, void 0, false, {
            fileName: _jsxFileName$7,
            lineNumber: 64,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$7,
          lineNumber: 63,
          columnNumber: 21
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
            to: "",
            children: info.address
          }, void 0, false, {
            fileName: _jsxFileName$7,
            lineNumber: 67,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$7,
          lineNumber: 66,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$7,
        lineNumber: 62,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$7,
      lineNumber: 43,
      columnNumber: 13
    }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
      className: "table-title",
      children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("h3", {
        className: "title",
        children: "\u4EA4\u6613\u8BB0\u5F55"
      }, void 0, false, {
        fileName: _jsxFileName$7,
        lineNumber: 72,
        columnNumber: 17
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(DownloadCvs, {
        paramKey: "address",
        paramValue: info.address
      }, void 0, false, {
        fileName: _jsxFileName$7,
        lineNumber: 73,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$7,
      lineNumber: 71,
      columnNumber: 13
    }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Table, {
      dataSource: list,
      pagination: {
        total: pageInfo.totalElements,
        current: pageInfo.pageStart,
        pageSize: pageInfo.pageSize,
        onChange: pageChange
      },
      columns: columns$1
    }, void 0, false, {
      fileName: _jsxFileName$7,
      lineNumber: 75,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$7,
    lineNumber: 39,
    columnNumber: 9
  }, this);
}
ContractDetail.getInitialProps = () => {
  return [asyncGetPageList$2(), asyncGetContractDetail()];
};
var _jsxFileName$6 = "/Users/joy/workspace/enterprise/ovo/old/baas-explorer/src/pages/WalletDetail/constants.tsx";
const columns = [{
  title: "\u65F6\u95F4",
  dataIndex: "createTime",
  key: "createTime"
}, {
  title: "\u4EA4\u6613\u54C8\u5E0C",
  dataIndex: "txnHash",
  key: "txnHash",
  render: (text) => /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Popover, {
    content: text,
    children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
      to: `/transaction/${text}`,
      children: overLenTextShow(text)
    }, void 0, false, {
      fileName: _jsxFileName$6,
      lineNumber: 18,
      columnNumber: 17
    }, void 0)
  }, void 0, false, {
    fileName: _jsxFileName$6,
    lineNumber: 17,
    columnNumber: 13
  }, void 0)
}, {
  title: "\u53D1\u9001\u65B9",
  dataIndex: "fromAddress",
  key: "fromAddress",
  render: (text) => /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Popover, {
    content: text,
    children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
      to: `/walletDetail/${text}`,
      children: overLenTextShow(text)
    }, void 0, false, {
      fileName: _jsxFileName$6,
      lineNumber: 28,
      columnNumber: 17
    }, void 0)
  }, void 0, false, {
    fileName: _jsxFileName$6,
    lineNumber: 27,
    columnNumber: 13
  }, void 0)
}, {
  title: "\u63A5\u6536\u65B9",
  dataIndex: "toAddress",
  key: "toAddress",
  render: (text) => /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Popover, {
    content: text,
    children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(NavigateAddress, {
      address: text
    }, void 0, false, {
      fileName: _jsxFileName$6,
      lineNumber: 40,
      columnNumber: 17
    }, void 0)
  }, void 0, false, {
    fileName: _jsxFileName$6,
    lineNumber: 39,
    columnNumber: 13
  }, void 0)
}, {
  title: "\u7C7B\u578B",
  dataIndex: "methodName",
  key: "methodName"
}, {
  title: "NFRID",
  dataIndex: "nfrList",
  key: "nfrList",
  render(nfrIds = [], record) {
    if (nfrIds.length === 1) {
      const nfr = nfrIds[0];
      return /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
        to: `/nfrDetail/${nfr.id}/${record.contractAddress}`,
        children: nfr.id
      }, void 0, false, {
        fileName: _jsxFileName$6,
        lineNumber: 60,
        columnNumber: 21
      }, this);
    }
    return "--";
  }
}];
var index$3 = "";
var _jsxFileName$5 = "/Users/joy/workspace/enterprise/ovo/old/baas-explorer/src/pages/WalletDetail/index.tsx";
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
    dispatch(asyncGetPageList$1(type));
    dispatch(asyncGetNfrDetail$1(type));
    return () => {
      dispatch(getInitState$2());
    };
  }, [type]);
  const {
    nfrCount
  } = info.searchData || {};
  const pageChange = React.useCallback((page, pageSize) => {
    dispatch(changTable$1(page, pageSize, type));
  }, []);
  return /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
    className: "wallet-detail",
    children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("h3", {
      className: "title",
      children: "\u94B1\u5305\u5730\u5740"
    }, void 0, false, {
      fileName: _jsxFileName$5,
      lineNumber: 40,
      columnNumber: 13
    }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("p", {
      className: "address",
      children: info.address
    }, void 0, false, {
      fileName: _jsxFileName$5,
      lineNumber: 41,
      columnNumber: 13
    }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
      className: "detail-info",
      children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("h3", {
        className: "title",
        children: "\u7528\u6237\u603B\u89C8"
      }, void 0, false, {
        fileName: _jsxFileName$5,
        lineNumber: 43,
        columnNumber: 17
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("p", {
        children: ["\u5171\u6301\u6709NFR\uFF1A ", nfrCount]
      }, void 0, true, {
        fileName: _jsxFileName$5,
        lineNumber: 44,
        columnNumber: 17
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
        className: "table-title",
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("h3", {
          className: "title",
          children: "\u4EA4\u6613\u8BB0\u5F55"
        }, void 0, false, {
          fileName: _jsxFileName$5,
          lineNumber: 47,
          columnNumber: 21
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(DownloadCvs, {
          paramKey: "address",
          paramValue: info.address
        }, void 0, false, {
          fileName: _jsxFileName$5,
          lineNumber: 48,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$5,
        lineNumber: 46,
        columnNumber: 17
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Table, {
        dataSource: list,
        pagination: {
          total: pageInfo.totalElements,
          current: pageInfo.pageStart,
          pageSize: pageInfo.pageSize,
          onChange: pageChange
        },
        columns
      }, void 0, false, {
        fileName: _jsxFileName$5,
        lineNumber: 50,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$5,
      lineNumber: 42,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$5,
    lineNumber: 39,
    columnNumber: 9
  }, this);
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
var _jsxFileName$4 = "/Users/joy/workspace/enterprise/ovo/old/baas-explorer/src/pages/Transaction/TransResult.tsx";
const MAX_SHOW = 5;
function TransResult(props) {
  var _a;
  const {
    toAddress = "",
    method = "",
    nfrList = [],
    contractAddress = ""
  } = props;
  const [showAll, setShowAll] = React.useState(nfrList <= MAX_SHOW);
  console.log(toAddress, method, nfrList);
  function toggleShow() {
    setShowAll(!showAll);
  }
  return /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
    children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(NavigateAddress, {
      address: toAddress,
      isWrapText: false
    }, void 0, false, {
      fileName: _jsxFileName$4,
      lineNumber: 28,
      columnNumber: 13
    }, this), method !== CREATE ? /* @__PURE__ */ jsxDevRuntime.jsxDEV(jsxDevRuntime.Fragment, {
      children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
        className: "direct-title",
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(icons.ArrowDownOutlined, {}, void 0, false, {
          fileName: _jsxFileName$4,
          lineNumber: 32,
          columnNumber: 25
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("span", {
          children: `${(_a = transactionEnum[method]) == null ? void 0 : _a.title} ${nfrList.reduce((total, cur) => total + Number(cur.amount), 0)}\u4E2ANFT`
        }, void 0, false, {
          fileName: _jsxFileName$4,
          lineNumber: 33,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$4,
        lineNumber: 31,
        columnNumber: 21
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
        children: [nfrList.map((item, index2) => {
          if (!showAll && index2 > MAX_SHOW - 1) {
            return null;
          }
          return /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
            className: "flow-wrap",
            children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
              to: `/nfrDetail/${item.id}/${contractAddress}`,
              children: `[${item.name || item.id}]`
            }, void 0, false, {
              fileName: _jsxFileName$4,
              lineNumber: 51,
              columnNumber: 37
            }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("span", {
              children: ` x ${item.amount}`
            }, void 0, false, {
              fileName: _jsxFileName$4,
              lineNumber: 54,
              columnNumber: 37
            }, this), method !== MINT && method !== MINT_BATCH ? /* @__PURE__ */ jsxDevRuntime.jsxDEV(jsxDevRuntime.Fragment, {
              children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(icons.SwapRightOutlined, {
                className: "direct-icon"
              }, void 0, false, {
                fileName: _jsxFileName$4,
                lineNumber: 58,
                columnNumber: 45
              }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("span", {
                children: transactionEnum[method].label
              }, void 0, false, {
                fileName: _jsxFileName$4,
                lineNumber: 59,
                columnNumber: 45
              }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Popover, {
                content: item.to,
                children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(NavigateAddress, {
                  address: item.to
                }, void 0, false, {
                  fileName: _jsxFileName$4,
                  lineNumber: 63,
                  columnNumber: 49
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName$4,
                lineNumber: 62,
                columnNumber: 45
              }, this)]
            }, void 0, true) : ""]
          }, item.id + Math.random(), true, {
            fileName: _jsxFileName$4,
            lineNumber: 47,
            columnNumber: 33
          }, this);
        }), nfrList.length > MAX_SHOW ? /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
          children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("span", {
            children: `...\u7B49${nfrList.length - MAX_SHOW}\u4E2A`
          }, void 0, false, {
            fileName: _jsxFileName$4,
            lineNumber: 76,
            columnNumber: 33
          }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Button, {
            type: "link",
            onClick: toggleShow,
            children: showAll ? "\u6536\u8D77" : "\u5C55\u5F00"
          }, void 0, false, {
            fileName: _jsxFileName$4,
            lineNumber: 79,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$4,
          lineNumber: 75,
          columnNumber: 29
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName$4,
        lineNumber: 40,
        columnNumber: 21
      }, this)]
    }, void 0, true) : null]
  }, void 0, true, {
    fileName: _jsxFileName$4,
    lineNumber: 27,
    columnNumber: 9
  }, this);
}
var index$2 = "";
var _jsxFileName$3 = "/Users/joy/workspace/enterprise/ovo/old/baas-explorer/src/pages/Transaction/index.tsx";
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
  return /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
    className: "transaction-detail",
    children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
      className: "title-wrap",
      children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("h3", {
        children: ["\u4EA4\u6613\u54C8\u5E0C", /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Tag, {
          color: "green",
          children: "\u4EA4\u6613\u6210\u529F"
        }, void 0, false, {
          fileName: _jsxFileName$3,
          lineNumber: 33,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$3,
        lineNumber: 32,
        columnNumber: 17
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("span", {
        children: detail.txnHash
      }, void 0, false, {
        fileName: _jsxFileName$3,
        lineNumber: 35,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$3,
      lineNumber: 31,
      columnNumber: 13
    }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
      className: "detail-wrap",
      children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("h3", {
        className: "title",
        children: "\u4EA4\u6613\u8BE6\u60C5"
      }, void 0, false, {
        fileName: _jsxFileName$3,
        lineNumber: 38,
        columnNumber: 17
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Row, {
        gutter: GUTTER,
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          className: "label",
          span: LABEL_SPAN,
          children: "\u53D1\u9001\u65B9"
        }, void 0, false, {
          fileName: _jsxFileName$3,
          lineNumber: 40,
          columnNumber: 21
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          span: CONTENT_SPAN,
          children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(CopyText, {
            text: `${detail.fromAddress}`,
            children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
              to: `/walletDetail/${detail.fromAddress}`,
              children: detail.fromAddress
            }, void 0, false, {
              fileName: _jsxFileName$3,
              lineNumber: 45,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$3,
            lineNumber: 44,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$3,
          lineNumber: 43,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$3,
        lineNumber: 39,
        columnNumber: 17
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Row, {
        gutter: GUTTER,
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          className: "label",
          span: LABEL_SPAN,
          children: "\u63A5\u6536/\u4EA4\u4E92\u65B9"
        }, void 0, false, {
          fileName: _jsxFileName$3,
          lineNumber: 52,
          columnNumber: 21
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          span: CONTENT_SPAN,
          children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(CopyText, {
            text: `${detail.toAddress}`,
            children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(NavigateAddress, {
              isWrapText: false,
              address: detail.toAddress
            }, void 0, false, {
              fileName: _jsxFileName$3,
              lineNumber: 57,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$3,
            lineNumber: 56,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$3,
          lineNumber: 55,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$3,
        lineNumber: 51,
        columnNumber: 17
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Row, {
        gutter: GUTTER,
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          className: "label",
          span: LABEL_SPAN,
          children: "\u533A\u5757\u9AD8\u5EA6"
        }, void 0, false, {
          fileName: _jsxFileName$3,
          lineNumber: 65,
          columnNumber: 21
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          span: CONTENT_SPAN,
          children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
            to: `/blockHeight/${detail.blockHeight}`,
            children: `# ${detail.blockHeight}`
          }, void 0, false, {
            fileName: _jsxFileName$3,
            lineNumber: 69,
            columnNumber: 25
          }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(icons.ClockCircleOutlined, {
            style: {
              marginRight: 12,
              marginLeft: 12
            }
          }, void 0, false, {
            fileName: _jsxFileName$3,
            lineNumber: 72,
            columnNumber: 25
          }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("span", {
            children: `${formatSeconds(scendsTakenTo(new Date(detail.createTime).getTime()))} ago(${detail.createTime})`
          }, void 0, false, {
            fileName: _jsxFileName$3,
            lineNumber: 75,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$3,
          lineNumber: 68,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$3,
        lineNumber: 64,
        columnNumber: 17
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Row, {
        gutter: GUTTER,
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          className: "label",
          span: LABEL_SPAN,
          children: "\u4EA4\u6613\u7ED3\u679C"
        }, void 0, false, {
          fileName: _jsxFileName$3,
          lineNumber: 81,
          columnNumber: 21
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          span: CONTENT_SPAN,
          children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(TransResult, {
            toAddress: detail.toAddress,
            method: detail.method,
            contractAddress: detail.contractAddress,
            nfrList: detail == null ? void 0 : detail.nfrList
          }, void 0, false, {
            fileName: _jsxFileName$3,
            lineNumber: 85,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$3,
          lineNumber: 84,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$3,
        lineNumber: 80,
        columnNumber: 17
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Row, {
        gutter: GUTTER,
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          className: "label",
          span: LABEL_SPAN,
          children: "\u7C7B\u578B"
        }, void 0, false, {
          fileName: _jsxFileName$3,
          lineNumber: 94,
          columnNumber: 21
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          span: CONTENT_SPAN,
          children: detail.type
        }, void 0, false, {
          fileName: _jsxFileName$3,
          lineNumber: 97,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$3,
        lineNumber: 93,
        columnNumber: 17
      }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Row, {
        gutter: GUTTER,
        children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          className: "label",
          span: LABEL_SPAN,
          children: "\u4EA4\u6613\u624B\u7EED\u8D39"
        }, void 0, false, {
          fileName: _jsxFileName$3,
          lineNumber: 100,
          columnNumber: 21
        }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Col, {
          span: CONTENT_SPAN,
          children: detail.transFee
        }, void 0, false, {
          fileName: _jsxFileName$3,
          lineNumber: 103,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$3,
        lineNumber: 99,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$3,
      lineNumber: 37,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$3,
    lineNumber: 30,
    columnNumber: 9
  }, this);
}
Transaction.getInitialProps = () => {
  return [asyncGetDetail()];
};
var _jsxFileName$2 = "/Users/joy/workspace/enterprise/ovo/old/baas-explorer/src/pages/RecentInfo/constants.tsx";
const BLOCK_TYPE = "recentBlock";
const TRANS_TYPE = "recentTrans";
const PAGE_CONFIG = {
  [BLOCK_TYPE]: {
    title: "\u6700\u8FD1\u51FA\u5757",
    tableColumns: [{
      title: "\u533A\u5757\u9AD8\u5EA6",
      dataIndex: "blockHeight",
      render: (text) => {
        return /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
          to: `/blockHeight/${text}`,
          children: text
        }, void 0, false, {
          fileName: _jsxFileName$2,
          lineNumber: 17,
          columnNumber: 28
        }, void 0);
      }
    }, {
      title: "\u65F6\u95F4",
      dataIndex: "createTime"
    }, {
      title: "\u51FA\u5757\u8282\u70B9",
      dataIndex: "miner",
      render: (text) => /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Popover, {
        content: text,
        children: overLenTextShow(text)
      }, void 0, false, {
        fileName: _jsxFileName$2,
        lineNumber: 28,
        columnNumber: 21
      }, void 0)
    }, {
      title: "\u4EA4\u6613\u6BD4\u6570",
      dataIndex: "transactionsList",
      render: (transactionsList) => (transactionsList || []).length
    }]
  },
  [TRANS_TYPE]: {
    title: "\u6700\u8FD1\u4EA4\u6613",
    tableColumns: [{
      title: "\u533A\u5757\u9AD8\u5EA6",
      dataIndex: "blockHeight",
      render: (text) => {
        return /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
          to: `/blockHeight/${text}`,
          children: text
        }, void 0, false, {
          fileName: _jsxFileName$2,
          lineNumber: 46,
          columnNumber: 28
        }, void 0);
      }
    }, {
      title: "\u65F6\u95F4",
      dataIndex: "createTime"
    }, {
      title: "\u4EA4\u6613\u54C8\u5E0C",
      dataIndex: "txnHash",
      render: (text) => /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Popover, {
        content: text,
        children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
          to: `/transaction/${text}`,
          children: overLenTextShow(text)
        }, void 0, false, {
          fileName: _jsxFileName$2,
          lineNumber: 58,
          columnNumber: 25
        }, void 0)
      }, void 0, false, {
        fileName: _jsxFileName$2,
        lineNumber: 57,
        columnNumber: 21
      }, void 0)
    }, {
      title: "\u53D1\u9001\u65B9",
      dataIndex: "fromAddress",
      render: (text) => /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Popover, {
        content: text,
        children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
          to: `/walletDetail/${text}`,
          children: overLenTextShow(text)
        }, void 0, false, {
          fileName: _jsxFileName$2,
          lineNumber: 69,
          columnNumber: 25
        }, void 0)
      }, void 0, false, {
        fileName: _jsxFileName$2,
        lineNumber: 68,
        columnNumber: 21
      }, void 0)
    }, {
      title: "\u63A5\u6536\u65B9",
      dataIndex: "toAddress",
      render: (text) => /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Popover, {
        content: text,
        children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(NavigateAddress, {
          address: text
        }, void 0, false, {
          fileName: _jsxFileName$2,
          lineNumber: 80,
          columnNumber: 25
        }, void 0)
      }, void 0, false, {
        fileName: _jsxFileName$2,
        lineNumber: 79,
        columnNumber: 21
      }, void 0)
    }, {
      title: "\u7C7B\u578B",
      dataIndex: "methodName"
    }, {
      title: "NFRID",
      dataIndex: "nfrList",
      render(nfrList = [], record) {
        if (nfrList.length === 1) {
          const nfr = nfrList[0];
          return /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRouterDom.Link, {
            to: `/nfrDetail/${nfr.id}/${record.contractAddress}`,
            children: nfr.id
          }, void 0, false, {
            fileName: _jsxFileName$2,
            lineNumber: 102,
            columnNumber: 29
          }, this);
        }
        return "--";
      }
    }]
  }
};
var index$1 = "";
var _jsxFileName$1 = "/Users/joy/workspace/enterprise/ovo/old/baas-explorer/src/pages/RecentInfo/index.tsx";
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
  return /* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
    className: "recent-info",
    children: [/* @__PURE__ */ jsxDevRuntime.jsxDEV("div", {
      className: "common-search",
      children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(CommonSearch, {
        borderd: true
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 39,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$1,
      lineNumber: 38,
      columnNumber: 13
    }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV("h3", {
      className: "title",
      children: PAGE_CONFIG[type].title
    }, void 0, false, {
      fileName: _jsxFileName$1,
      lineNumber: 41,
      columnNumber: 13
    }, this), /* @__PURE__ */ jsxDevRuntime.jsxDEV(antd.Table, {
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
    }, void 0, false, {
      fileName: _jsxFileName$1,
      lineNumber: 42,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$1,
    lineNumber: 37,
    columnNumber: 9
  }, this);
}
RecentInfo.getInitialProps = () => {
  return [asyncGetPageList$4()];
};
const routes = [
  { path: "home", PageComponent: Home },
  { path: "recentInfo/:type", PageComponent: RecentInfo },
  { path: "blockHeight/:type", PageComponent: BlockHeight },
  { path: "nfrDetail/:type/:address", PageComponent: NfrDetail },
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
var _jsxFileName = "/Users/joy/workspace/enterprise/ovo/old/baas-explorer/src/entry-server.tsx";
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
  const routeMatch = reactRouterDom.matchRoutes(routes, url);
  const store2 = getServerStore();
  await getServerData(routeMatch, store2.dispatch);
  updateContext(context, routeMatch, store2);
  return ReactDOMServer__default["default"].renderToString(/* @__PURE__ */ jsxDevRuntime.jsxDEV(server.StaticRouter, {
    location: url,
    children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(reactRedux.Provider, {
      store: store2,
      children: /* @__PURE__ */ jsxDevRuntime.jsxDEV(Layout, {
        routes
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 9
  }, this));
}
exports.render = render;
