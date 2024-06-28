"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = createServer;
var express_1 = require("express");
var utils_1 = require("@ovometajs/utils");
var http_proxy_middleware_1 = require("http-proxy-middleware");
function createServer() {
    return __awaiter(this, arguments, void 0, function (_a) {
        var app, apiProxy, staticProxy, vite, mockData;
        var _this = this;
        var _b = _a === void 0 ? {} : _a, _c = _b.apiTarget, apiTarget = _c === void 0 ? 'https://www.zhihu.com/api' : _c, _d = _b.staticTarget, staticTarget = _d === void 0 ? 'https://www.zhihu.com/static' : _d, _e = _b.root, root = _e === void 0 ? process.cwd() : _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    app = (0, express_1.default)();
                    apiProxy = (0, http_proxy_middleware_1.createProxyMiddleware)({
                        target: apiTarget, // 目标服务器地址
                        changeOrigin: true, // 改变请求源头，对于跨域请求很有用
                        // pathRewrite: { '^/api': '' }, // 重写请求路径，去掉 '/api' 前缀
                    });
                    staticProxy = (0, http_proxy_middleware_1.createProxyMiddleware)({
                        target: staticTarget, // 静态资源服务器地址
                        changeOrigin: true,
                    });
                    return [4 /*yield*/, Promise.resolve().then(function () { return require('vite'); })];
                case 1: return [4 /*yield*/, (_f.sent()).createServer({
                        base: '/mock/',
                        root: root,
                        logLevel: 'info',
                        server: {
                            middlewareMode: true,
                            watch: {
                                // During tests we edit the files too fast and sometimes chokidar
                                // misses change events, so enforce polling for consistency
                                usePolling: true,
                                interval: 100
                            },
                            hmr: {
                            // port: hmrPort
                            }
                        },
                        appType: 'custom'
                    })
                    // use vite's connect instance as middleware
                ];
                case 2:
                    vite = _f.sent();
                    // use vite's connect instance as middleware
                    app.use(vite.middlewares);
                    app.use('*', function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
                        var url;
                        return __generator(this, function (_a) {
                            try {
                                url = req.originalUrl;
                                if (url && /^\/api/.test(url || '')) {
                                    next();
                                    return [2 /*return*/];
                                }
                                res.status(200).set({ 'Content-Type': 'text/html' }).end('Hello World!');
                            }
                            catch (e) {
                                if (e instanceof Error) {
                                    vite && vite.ssrFixStacktrace(e);
                                    res.status(500).end(e.stack);
                                }
                            }
                            return [2 /*return*/];
                        });
                    }); });
                    mockData = (0, utils_1.getMockData)('mock');
                    mockData.forEach(function (data) {
                        app.use("/api".concat(data.apiPath), function (req, res) {
                            res.status(200).send(JSON.parse(data.jsonStr));
                        });
                    });
                    // 使用中间件
                    app.use('/api', apiProxy);
                    app.use('/static', staticProxy);
                    return [2 /*return*/, { app: app, vite: vite }];
            }
        });
    });
}
