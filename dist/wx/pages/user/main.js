require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(84);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_94b75564_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(88);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(85)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-94b75564"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_94b75564_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\user\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-94b75564", Component.options)
  } else {
    hotAPI.reload("data-v-94b75564", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 85:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_loginHandler__ = __webpack_require__(87);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      name: "wsy",
      isShow: "fasle",
      arr1: [1, 2, 3, 4, 5],
      arr2: ["a", "b", "c", "d", "e"],
      canIUse: wx.canIUse("button.open-type.getUserInfo")
    };
  },

  methods: {
    reLoading: function reLoading() {
      // this.$mp.page.onShow();
      var pages = getCurrentPages();console.log(pages);
    },
    onGotUserInfo: function onGotUserInfo(e) {
      // doSomething
      console.log(e.mp.detail);
      // console.log(e)
      // console.log(e)
      // console.log(e)
    },

    next: function next() {
      wx.reLaunch({ url: "/pages/index/main" });
    },
    gone: function gone() {
      this.name = "lnkf";
    },
    bindGetUserInfo: function bindGetUserInfo() {
      wx.getSetting({
        success: function success(res) {
          console.log(res);
        },
        fail: function fail() {
          console.log("————getSetting失败————");
        }
      });
    },
    getWeRunData: function getWeRunData() {
      wx.login({
        success: function success() {
          wx.getWeRunData({
            success: function success(res) {
              console.log(res);
            }
          });
        }
      });
    }
  },
  onLoad: function onLoad() {
    // console.log("__onload__");
  },
  onReady: function onReady() {
    // console.log("__onreadey__");
  },
  onShow: function onShow() {
    // console.log("__onshow__");
    __WEBPACK_IMPORTED_MODULE_0__utils_loginHandler__["a" /* default */].login(function () {
      // dosomething
      his.isShow = true;
    });
  },
  onUnload: function onUnload() {
    // console.log("__onunload__");
  },

  //监听页面滚动事件
  onPageScroll: function onPageScroll(e) {
    // console.log(e);
  },
  onTabItemTap: function onTabItemTap(res) {
    // tab 点击时执行
    console.log(res);
  }
});

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 登陆
function login(callback) {
    wx.showLoading({
        mask: true //显示透明蒙层，防止触摸穿透,
    });
    // 异步执行语句
    wx.login({
        success: function success(res) {
            if (res.code) {
                getUserInfo(res.code, callback);
            }
        },
        fail: function fail(res) {
            console.log('__Login请求失败__');
        }
    });
}

// 获取用户信息
function getUserInfo(code, callback) {
    wx.getUserInfo({
        withCredentials: false,
        // 获取成功，全局存储用户信息，开发者服务器登录
        success: function success(res) {
            console.log(res);
            // 全局存储用户信息,这里暂时用本地缓存代替
            wx.setStorage({
                key: 'storeUpdateWxUser',
                data: res.userInfo
            });
            //向后端请求
            postLogin(code, res.iv, res.encryptedData, callback);
        },
        // 获取失败，弹窗提示一键登录
        fail: function fail() {
            console.log('——请求用户信息失败——');
            wx.hideLoading();
            // 获取用户信息失败，清除全局存储的登录状态，弹窗提示一键登录
            // 使用token管理登录态的，清除存储全局的token
            // 使用cookie管理登录态的，可以清除全局登录状态管理的变量
            wx.removeStorage({
                key: 'storeUpdateToken',
                success: function success(res) {
                    console.log('——成功清除storeUpdateToken——');
                }
            });
            // 获取不到用户信息，说明用户没有授权或者取消授权，弹窗提示一键登录。
            // showLoginModal()
        }
    });
}

// 开发者服务端登陆
function postLogin(code, iv, encryptedData, callback) {
    var param = {
        code: code,
        iv: iv,
        encryptedData: encryptedData
    };
    console.log('——到了request，没有服务器，请求结束——');
    wx.hideLoading();
    // request(apiURL, param, 'POST').then((res) => {
    //     if (res.code == 1) {
    //         wx.hideLoading();
    //         // 登陆成功
    //         // 使用token管理登录态的，存储全局token，用于当做登录态判断，
    //         // 使用cookie管理登录态的，可以存任意变量当做已登录状态
    //         wx.setStorage({
    //             key: 'storeUpdateToken',
    //             data: res.data.token
    //         });
    //         callback && callback()
    //     } else {
    //         showToast();
    //     }
    // })
}

// 显示toast弹窗
function showToast() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '登录失败，请稍后再试';

    wx.showToast({
        title: content,
        icon: 'none'
    });
}

/* harmony default export */ __webpack_exports__["a"] = ({
    login: login,
    showToast: showToast,
    postLogin: postLogin,
    getUserInfo: getUserInfo
});

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "user"
  }, [(_vm.isShow) ? _c('open-data', {
    staticClass: "userAvatarUrl",
    attrs: {
      "type": "userAvatarUrl",
      "mpcomid": '0'
    }
  }) : _vm._e(), _vm._v(" "), (_vm.isShow) ? _c('open-data', {
    staticClass: "userNickName",
    attrs: {
      "type": "userNickName",
      "mpcomid": '1'
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('button', {
    attrs: {
      "open-type": "openSetting"
    }
  }, [_vm._v("进入授权设置")]), _vm._v(" "), _c('button', {
    attrs: {
      "open-type": "contact"
    }
  }, [_vm._v("进入客服会话")]), _vm._v(" "), _c('button', {
    attrs: {
      "open-type": "getUserInfo",
      "lang": "zh_CN",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.onGotUserInfo
    }
  }, [_vm._v("\n      获取用户信息\n    ")]), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.next
    }
  }, [_vm._v("next")]), _vm._v(" "), (_vm.canIUse) ? _c('button', {
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '2'
    },
    on: {
      "getuserinfo": _vm.bindGetUserInfo
    }
  }, [_vm._v("\n      授权登录\n    ")]) : _c('span', [_vm._v("请升级微信版本")]), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.getWeRunData
    }
  }, [_vm._v("微信步数")]), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.reLoading
    }
  }, [_vm._v("手动刷新页面")])], 1), _vm._v(" "), _c('div')])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-94b75564", esExports)
  }
}

/***/ })

},[83]);