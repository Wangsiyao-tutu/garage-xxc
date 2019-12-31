require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getters = {
  modelConfig: function modelConfig(state) {
    return state.modelConfig;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (getters);

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var actions = {
  modelAction: function modelAction(context, num) {
    context.commit("MODEL_CONFIG", num);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (actions);

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_global__ = __webpack_require__(15);






__WEBPACK_IMPORTED_MODULE_1_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_1_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */].mpType = "app";

var app = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */]));

app.$mount();

__WEBPACK_IMPORTED_MODULE_1_vue___default.a.prototype.globalData = __WEBPACK_IMPORTED_MODULE_4__components_global__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_1_vue___default.a.prototype.globalData = getApp().globalData;

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(46);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(45)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54b9927c", Component.options)
  } else {
    hotAPI.reload("data-v-54b9927c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 45:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    console.log("app created and cache logs by setStorageSync");
  },

  onLaunch: function onLaunch(options) {
    console.log("正在检查是否有新版本");
    if (wx.canIUse("getUpdateManager")) {
      var updateManager = wx.getUpdateManager();
      updateManager.onCheckForUpdate(function (res) {
        if (res.hasUpdate) {
          // console.log(res);
          console.log("没有体验过的全新版本，是兄弟就来了砍我");
          updateManager.onUpdateReady(function () {
            updateManager.applyUpdate();
          });
          updateManager.onUpdateFailed(function () {
            wx.showModal({
              title: "更新提示",
              content: "发现新版本，请删除小程序重新搜索下载最新版本！"
            });
          });
        } else {
          console.log("没有发现新的版本");
        }
      });
    } else {
      wx.showModal({
        title: "温馨提示",
        content: "当前微信版本过低，无法更新小程序，请升级微信到最新版本！"
      });
    }
    wx.getSetting({
      success: function success(res) {
        // console.log(res);
        if (res.authSetting["scope.userInfo"]) {
          // wx.authorize({
          //   scope: 'scope.userInfo',
          //   success: res => {
          //     console.log(res + 'asodjlasdahjkd')
          //   },
          // });
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function success(res) {
              // console.log(res.userInfo);
            },
            fail: function fail() {
              // console.log("shibai");
            }
          });
        } else {
          console.log("——用户没有授权——");
        }
      }
    });
    wx.login({
      success: function success(res) {
        console.log('————app.js中Login请求成功————');
      },
      fail: function fail() {
        console.log("————app.js中Login请求失败————");
      }
    });
  },
  onError: function onError() {
    console.log("api使用方法错误-请重新调整");
  },
  onPageNotFound: function onPageNotFound(res) {
    wx.navigateTo({ url: "/pages/notFound/main" });
  },

  globalData: {
    account: "定义的全局数据"
  }
});

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getters__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mutations__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex_dist_logger__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex_dist_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vuex_dist_logger__);









__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var debug = "development" !== "production";

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: __WEBPACK_IMPORTED_MODULE_2__state__["a" /* default */],
  getter: __WEBPACK_IMPORTED_MODULE_3__getters__["a" /* default */],
  actions: __WEBPACK_IMPORTED_MODULE_4__actions__["a" /* default */],
  mutations: __WEBPACK_IMPORTED_MODULE_5__mutations__["a" /* default */],
  strict: debug,
  plugins: debug ? [__WEBPACK_IMPORTED_MODULE_6_vuex_dist_logger___default()()] : []
}));

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var state = {
  modelConfig: {}
};

/* harmony default export */ __webpack_exports__["a"] = (state);

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutation_types__ = __webpack_require__(55);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["a" /* MODEL_CONFIG */], function (state, value) {
  console.log("state", state);
  state.modelConfig = value;
}));

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MODEL_CONFIG; });
var MODEL_CONFIG = "MODEL_CONFIG";

/***/ })

},[16]);