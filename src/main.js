import Vue from "vue";
import App from "./App";
import store from "./store";
import global from "@/components/global";

Vue.prototype.$store = store;
Vue.config.productionTip = false;
App.mpType = "app";

var app = new Vue({
  ...App
});

app.$mount();

Vue.prototype.globalData = global;
Vue.prototype.globalData = getApp().globalData;
