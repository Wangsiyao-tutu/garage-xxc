<template>
  <div>
    {{ name }}
    <button @click="login">login</button>
    <button @click="getApp">获取全局数据</button>{{ global.serverSrc }}
    <button @click="getPages">pages信息</button>
    <navigator delta='1' open-type="navigateBack" hover-class="none">后退
    </navigator>
  </div>
</template>

<script>
import global from "@/components/global";
export default {
  data() {
    return {
      name: "wsy",
      global: global
    };
  },
  onLoad() {
    console.log(this);
    console.log(getApp().globalData);
  },
  mounted() {
    console.log(this.global.serverSrc);
  },
  methods: {
    login() {
      wx.switchTab({ url: "/pages/user/main" });
    },
    getApp() {
      let page = getApp().globalData;
      console.log(page);
    },
    getPages: function () {
      let pages = getCurrentPages();
      console.log(pages);
      let prevPage = pages[pages.length - 2];//上一页面
      console.log(prevPage);
      prevPage.setData({
        //直接给上移页面赋值
        message: '王者火影劫',
      });
      prevPage.onLoad();
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 300rpx;
  height: 300rpx;
  .header {
    width: 200rpx;
    height: 200rpx;
  }
}
</style>
