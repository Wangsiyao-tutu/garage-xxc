require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(73);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_0168b245_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(77);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(74)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0168b245"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_0168b245_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0168b245", Component.options)
  } else {
    hotAPI.reload("data-v-0168b245", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 74:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_formatTime__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_formatTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__utils_formatTime__);
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
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      selectDate: __WEBPACK_IMPORTED_MODULE_0__utils_formatTime___default.a.formatTime(new Date()),
      nowDate: __WEBPACK_IMPORTED_MODULE_0__utils_formatTime___default.a.formatTime(new Date()),
      Month: __WEBPACK_IMPORTED_MODULE_0__utils_formatTime___default.a.formatMonth(new Date()),
      Year: __WEBPACK_IMPORTED_MODULE_0__utils_formatTime___default.a.formatYear(new Date()),
      Day: __WEBPACK_IMPORTED_MODULE_0__utils_formatTime___default.a.formatDay(new Date()),
      weather: {
        day: "今天as",
        city_name: "大连",
        climate: "东北风微风.晴",
        temperature: -1
      },
      content: [{
        id: 0,
        category: 0,
        title: "摄影",
        author: "王思垚",
        className: "hp_img",
        pic_info: "Noah Rosenfield",
        src: "http://image.wufazhuce.com/FiytsDuMIy7KzRGZtDeVmqCvf_pq",
        // src: "/static/images/01.png",
        content: "看尼玛的代码，滚去玩游戏",
        tag_list: []
      }, {
        id: 1,
        category: 1,
        title: "鲁迅曾经说过，不好好玩就是个憨批。",
        author: "王思垚",
        className: "item_img",
        pic_info: "",
        src: "/static/images/02.png",
        content: "今天是美好的一天，打会儿游戏吧",
        tag_list: []
      }, {
        id: 2,
        category: 1,
        title: "爱咋咋地，真就是个彪璇儿呗。",
        author: "王思垚",
        className: "item_img",
        pic_info: "",
        src: "/static/images/03.png",
        content: "秦始皇统一帝国后，想解放全世界",
        tag_list: []
      }]
    };
  },

  onLoad: function onLoad() {},
  onShareAppMessage: function onShareAppMessage(res) {
    if (res.from == "button") {
      console.log(res);
    }
  },
  methods: {
    bindPickerChange: function bindPickerChange(e) {
      var temp = e.mp.detail.value.split("-");
      this.selectDate = e.mp.detail.value;
      this.Month = temp[1];
      this.Year = temp[0];
      this.Day = temp[2];
    },

    goToDetailPage: function goToDetailPage() {
      console.log(99);
      wx.navigateTo({ url: "/pages/detail/main" });
    },
    edit: function edit() {
      console.log(9999);
    },
    saveImg: function saveImg(e) {
      var tmpPath = '',
          urls = e.target.dataset.url;
      // downloadTask监听下载进度变化和取消坚挺的对象
      var downloadTask = wx.downloadFile({
        url: urls,
        success: function success(res) {
          if (res.statusCode === 200) {
            tmpPath = res.tempFilePath;
            console.log(tmpPath + 'qasdasd');
            // console.log(urls);
            // console.log(tmpPath);
          }
        },
        fail: function fail() {
          console.log('下载临时文件失败');
        }
      });
      wx.showActionSheet({
        itemList: ['保存到手机相册'],
        success: function success(res) {
          if (res.tapIndex == 0) {
            wx.saveImageToPhotosAlbum({
              filePath: tmpPath,
              complete: function complete(res) {
                if (res.errMsg == 'saveImageToPhotosAlbum:ok') {
                  wx.showToast({
                    title: '保存成功'
                  });
                } else {
                  wx.showToast({
                    title: '保存失败'
                  });
                }
              }
            });
          } else {
            wx.showToast({
              title: '保存失败'
            });
          }
        }
      });
    },
    looklook: function looklook(res) {
      console.log(res);
      var url = res.mp.currentTarget.dataset.url;
      wx.previewImage({
        current: 'url',
        urls: [url]
      });
    }
  }
});

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

var formatTime = function formatTime(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
};

var formatTimeYms = function formatTimeYms(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return [year, month, day].map(formatNumber).join('-');
};

var formatNumber = function formatNumber(n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
};
var formatYear = function formatYear(date) {
    var year = date.getFullYear();
    return [year];
};
var formatMonth = function formatMonth(date) {
    var month = date.getMonth() + 1;
    return [month].map(formatNumber);
};
var formatDay = function formatDay(date) {
    var day = date.getDate();
    return [day].map(formatNumber);
};
module.exports = {
    formatTime: formatTime,
    formatTimeYms: formatTimeYms,
    formatYear: formatYear,
    formatMonth: formatMonth,
    formatDay: formatDay
};

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('picker', {
    attrs: {
      "mode": "date",
      "value": _vm.selectDate,
      "start": "2015-09-0",
      "end": _vm.nowDate,
      "eventid": '0'
    },
    on: {
      "change": _vm.bindPickerChange
    }
  }, [_c('div', [_c('label', {
    staticClass: "day"
  }, [_c('span', {
    staticClass: "DD"
  }, [_vm._v(_vm._s(_vm.Day))]), _vm._v(" "), _c('span', {
    staticClass: "YM"
  }, [_vm._v("." + _vm._s(_vm.Month) + "." + _vm._s(_vm.Year))])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "weather"
  }, [(_vm.weather.day == '今天') ? _c('span', [_vm._v(_vm._s("今天"))]) : _c('span', [_vm._v(_vm._s(_vm.weather.city_name) + "·" + _vm._s(_vm.weather.climate) + "\n        " + _vm._s(_vm.weather.temperature) + "℃")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "body"
  }, _vm._l((_vm.content), function(item, index) {
    return _c('div', {
      key: item,
      staticClass: "container"
    }, [(item.category == 0) ? _c('div', {
      staticClass: "content"
    }, [_c('div', {
      staticClass: "img"
    }, [_c('image', {
      class: item.className,
      attrs: {
        "data-url": item.src,
        "src": item.src,
        "mode": "aspectFit",
        "lazy-load": "false",
        "eventid": '1_' + index
      },
      on: {
        "longpress": _vm.saveImg,
        "click": _vm.looklook
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "text"
    }, [_c('span', {
      staticClass: "hp_author"
    }, [_vm._v(_vm._s(item.title) + " | " + _vm._s(item.pic_info))]), _vm._v(" "), _c('span', {
      staticClass: "hp_content"
    }, [_vm._v(_vm._s(item.content))]), _vm._v(" "), _c('span', {
      staticClass: "text_author"
    }, [_vm._v(_vm._s(item.author))])]), _vm._v(" "), _c('div', {
      staticClass: "share_view"
    }, [_c('button', {
      staticClass: "edit_btn",
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": _vm.edit
      }
    }, [_vm._v("编辑")]), _vm._v(" "), _c('button', {
      staticClass: "share_btn",
      attrs: {
        "open-type": "share"
      }
    }, [_vm._v("分享")])], 1)]) : _c('div', {
      staticClass: "content"
    }, [_c('div', {
      attrs: {
        "eventid": '3_' + index
      },
      on: {
        "click": _vm.goToDetailPage
      }
    }, [(item.category == 1) ? _c('div', {
      staticClass: "item_cate"
    }, [(item.tag_list[0] == null) ? _c('span', {
      staticClass: "item_type"
    }, [_vm._v("-阅读-")]) : _c('span', {
      staticClass: "item_type"
    }, [_vm._v("-" + _vm._s(item.tag_list[0].title) + "-")])]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "textName"
    }, [_c('span', {
      staticClass: "item_title"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('span', {
      staticClass: "item_author"
    }, [_vm._v("文/" + _vm._s(item.author))])]), _vm._v(" "), _c('div', {
      staticClass: "item_image"
    }, [_c('image', {
      class: item.className,
      attrs: {
        "src": item.src,
        "mode": "aspectFit",
        "lazy-load": "false"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "text"
    }, [_c('span', {
      staticClass: "hp_author"
    }, [_vm._v(_vm._s(item.content))]), _vm._v(" "), _c('span', {
      staticClass: "hp_content"
    }, [_vm._v("今天")])])]), _vm._v(" "), _c('div', {
      staticClass: "share_view"
    }, [_c('button', {
      staticClass: "share_btn",
      attrs: {
        "open-type": "share",
        "data-alpha-beta": index,
        "hover-stop-propagation": "true"
      }
    }, [_vm._v("\n            分享\n          ")])], 1)])])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0168b245", esExports)
  }
}

/***/ })

},[72]);