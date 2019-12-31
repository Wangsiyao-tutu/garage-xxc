require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(59);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_f514af58_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(71);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(60)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f514af58"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_f514af58_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\detail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f514af58", Component.options)
  } else {
    hotAPI.reload("data-v-f514af58", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 60:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_canvas_statistic_vue__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_canvas_mycanvas_vue__ = __webpack_require__(67);
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



// import { mapGetters } from 'vuex';
/* harmony default export */ __webpack_exports__["a"] = ({
  components: { Statistic: __WEBPACK_IMPORTED_MODULE_0__components_canvas_statistic_vue__["a" /* default */], MyCanvas: __WEBPACK_IMPORTED_MODULE_1__components_canvas_mycanvas_vue__["a" /* default */] },
  data: function data() {
    return {
      message: '细节卖队友',
      region: [],
      array: [['a', 'b'], ['c', 'd'], ['e', 'f']],
      multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
      multiIndex: [0, 0, 0]
    };
  },

  // computed: { ...mapGetters(['modelConfig']) },
  methods: {
    bindRegionChange: function bindRegionChange(e) {
      console.log('picker发送选择改变，携带值为', e.mp.detail.value);
      this.region = e.mp.detail.value;
    },

    bindMultiPickerChange: function bindMultiPickerChange(e) {
      console.log('picker发送选择改变，携带值为', e.mp.detail.value);
      this.multiIndex = e.mp.detail.value;
    },
    bindMultiPickerColumnChange: function bindMultiPickerColumnChange(e) {
      var column = e.mp.detail.column;
      var value = e.mp.detail.value;
      console.log('第' + (column + 1) + '列', '第' + (value + 1) + '行');
      var multiArray = this.multiArray;
      var index = this.multiIndex;

      if (column == 0) {
        index[0] = value;
      } else if (column == 1) {
        index[1] = value;
      } else if (column == 2) {
        index[2] = value;
      }
      if (index[0] == 0) {
        multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
        multiArray[2] = ['猪肉绦虫', '吸血虫'];
      } else {
        multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
        multiArray[2] = ['鲫鱼', '带鱼'];
      }
      // console.log(multiArray);
      this.multiArray = multiArray;
    },
    getcurrent: function getcurrent() {
      var pages = getCurrentPages();
      // console.log(pages)
      var page = getApp();
      page.globalData.network = { name: 'wsy', age: 12, sex: '男'
        // console.log(page.globalData)
      };
    },
    goTo: function goTo() {
      wx.navigateTo({ url: '/pages/login/main' });
    }
  },
  onLoad: function onLoad() {
    // console.log('Vuex', this.modelConfig);
  },

  onShow: function onShow() {
    this.getcurrent();
  }
});

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_statistic_vue__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_50994a2d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_statistic_vue__ = __webpack_require__(66);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(63)
  __webpack_require__(64)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-50994a2d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_statistic_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_50994a2d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_statistic_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\canvas\\statistic.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] statistic.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-50994a2d", Component.options)
  } else {
    hotAPI.reload("data-v-50994a2d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 63:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
      count: 30
    };
  },

  methods: {
    run: function run(x0, y0, nowPercent) {
      // 1° 设置配置参数
      // 环形的线宽度
      var lineWidth = 16;
      // 半径
      var radius = x0 - lineWidth;
      // 起始弧
      var sAngle = -0.5 * Math.PI;
      // 终止弧
      var eAngle = 2 * Math.PI / 100 * nowPercent - 0.5 * Math.PI;

      // 2° 画圆环阴影
      this.ctx2.setLineWidth(16);
      this.ctx2.setStrokeStyle('#d2d2d2');
      this.ctx2.setLineCap('round');
      this.ctx2.arc(x0, y0, radius, 0, 2 * Math.PI, false);
      //对当前路径进行描
      this.ctx2.stroke();

      // 3° 画圆环激活高亮部分
      this.ctx2.beginPath(); //开始一个新的路径
      this.ctx2.setLineWidth(16);
      this.ctx2.setStrokeStyle('#00D49F');
      this.ctx2.setLineCap('round');
      this.ctx2.arc(x0, y0, radius, sAngle, eAngle, false);
      this.ctx2.stroke();

      // 4° 设置环心字体
      this.ctx2.beginPath();
      // 字体大小 注意不要加引号
      this.ctx2.font = 'normal bold 40px sans-serif';
      // 字体颜色
      this.ctx2.setFillStyle("#00D49F");
      // 字体位置
      this.ctx2.setTextAlign("center");
      // 字体对齐方式
      this.ctx2.setTextBaseline("middle");
      // 文字内容和文字坐标
      this.ctx2.fillText(nowPercent + "%", x0, y0);

      // 5°最后通过draw把上面的描述绘制出来
      this.ctx2.draw();
    },
    draw: function draw(id, percent) {
      this.ctx2 = wx.createCanvasContext(id);
      var that = this;
      wx.createSelectorQuery().select('#' + id).boundingClientRect(function (rect) {
        //监听canvas的宽高
        // 获取圆心坐标
        var x0 = parseInt(rect.width / 2); //获取canvas宽的的一半
        var y0 = parseInt(rect.height / 2); //获取canvas高的一半，
        // 开始画画
        that.run(x0, y0, percent);
      }).exec();
    }
  },
  mounted: function mounted() {
    this.draw('runCanvas', this.count);
  },

  watch: {
    count: function count() {
      this.draw('runCanvas', this.count);
    }
  }
});

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "statistic"
  }, [_c('canvas', {
    staticClass: "canvas",
    attrs: {
      "canvas-id": "runCanvas",
      "id": "runCanvas"
    }
  }), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.count++
      }
    }
  }, [_vm._v("+++++")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-50994a2d", esExports)
  }
}

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_mycanvas_vue__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_e4be0092_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_mycanvas_vue__ = __webpack_require__(70);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(68)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e4be0092"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_mycanvas_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_e4be0092_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_mycanvas_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\canvas\\mycanvas.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mycanvas.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e4be0092", Component.options)
  } else {
    hotAPI.reload("data-v-e4be0092", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 68:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  onReady: function onReady() {
    var ctx = wx.createCanvasContext('myCanvas');
    // ctx.setFillStyle('#5F6FEE')//文字颜色：默认黑色
    // ctx.setFontSize(20)//设置字体大小，默认10
    // ctx.fillText("LXT", 50, 50)//绘制文本
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.setFillStyle('#EEEEEE');
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(40, 75);
    ctx.lineTo(160, 75);
    ctx.moveTo(100, 15);
    ctx.lineTo(100, 135);
    ctx.setStrokeStyle('#AAAAAA');
    ctx.stroke();

    ctx.setFontSize(12);
    ctx.setFillStyle('black');
    ctx.fillText('0', 165, 78);
    ctx.fillText('0.5*PI', 83, 145);
    ctx.fillText('1*PI', 15, 78);
    ctx.fillText('1.5*PI', 83, 10);

    // Draw points
    ctx.beginPath();
    ctx.arc(100, 75, 2, 0, 2 * Math.PI);
    ctx.setFillStyle('lightgreen');
    ctx.fill();

    ctx.beginPath();
    ctx.arc(100, 25, 2, 0, 2 * Math.PI);
    ctx.setFillStyle('blue');
    ctx.fill();

    ctx.beginPath();
    ctx.arc(150, 75, 2, 0, 2 * Math.PI);
    ctx.setFillStyle('red');
    ctx.fill();

    // Draw arc
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 1.5 * Math.PI);
    ctx.setStrokeStyle('#333333');
    ctx.stroke();

    ctx.draw();
  }
});

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('canvas', {
    attrs: {
      "canvas-id": "myCanvas"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-e4be0092", esExports)
  }
}

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("\n  " + _vm._s(_vm.message) + "\n  "), _c('div', {
    staticClass: "section"
  }, [_c('div', {
    staticClass: "section__title"
  }, [_vm._v("省市区选择器")]), _vm._v(" "), _c('picker', {
    staticClass: "picker_region",
    attrs: {
      "mode": "region",
      "value": _vm.region,
      "custom-item": _vm.customItem,
      "eventid": '0'
    },
    on: {
      "change": _vm.bindRegionChange
    }
  }, [_c('div', {
    staticClass: "picker"
  }, [_vm._v("\n        当前选择：" + _vm._s(_vm.region[0]) + "，" + _vm._s(_vm.region[1]) + "，" + _vm._s(_vm.region[2]) + "\n      ")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "section"
  }, [_c('div', {
    staticClass: "section__title"
  }, [_vm._v("多列选择器")]), _vm._v(" "), _c('picker', {
    attrs: {
      "mode": "multiSelector",
      "value": _vm.multiIndex,
      "range": _vm.multiArray,
      "eventid": '1'
    },
    on: {
      "change": _vm.bindMultiPickerChange,
      "columnchange": _vm.bindMultiPickerColumnChange
    }
  }, [_c('div', {
    staticClass: "picker"
  }, [_vm._v("\n        当前选择：" + _vm._s(_vm.multiArray[0][_vm.multiIndex[0]]) + "，" + _vm._s(_vm.multiArray[1][_vm.multiIndex[1]]) + "，" + _vm._s(_vm.multiArray[2][_vm.multiIndex[2]]) + "\n      ")])])], 1), _vm._v(" "), _c('Statistic', {
    attrs: {
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('MyCanvas', {
    attrs: {
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.getcurrent
    }
  }, [_vm._v("asd")]), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.goTo
    }
  }, [_vm._v("asd")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-f514af58", esExports)
  }
}

/***/ })

},[58]);