<template>
  <div class="container">
    <div class="user">
      <open-data v-if="isShow" type="userAvatarUrl" class="userAvatarUrl"></open-data>
      <open-data v-if="isShow" type="userNickName" class="userNickName"></open-data>
    </div>
    <div class="content">
      <button open-type="openSetting">进入授权设置</button>
      <button open-type="contact">进入客服会话</button>
      <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">
        获取用户信息
      </button>
      <button @click="next">next</button>
      <button v-if="canIUse" open-type="getUserInfo" @getuserinfo="bindGetUserInfo">
        授权登录
      </button>
      <span v-else>请升级微信版本</span>
      <button @click="getWeRunData">微信步数</button>
      <button @click="reLoading">手动刷新页面</button>
    </div>

    <div>
      <!-- <span v-for="(item, index) in arr1" :key="item">
        <span v-for="(a, index_01) in arr2" :key="a">
          {{ item }}
        </span>
      </span> -->
    </div>
  </div>
</template>

<script>
import util from "@/utils/loginHandler";
export default {
  data() {
    return {
      name: "wsy",
      isShow: "fasle",
      arr1: [1, 2, 3, 4, 5],
      arr2: ["a", "b", "c", "d", "e"],
      canIUse: wx.canIUse("button.open-type.getUserInfo")
    };
  },
  methods: {
    reLoading: function () {
      // this.$mp.page.onShow();
      let pages = getCurrentPages(); console.log(pages)
    },
    onGotUserInfo(e) {
      // doSomething
      console.log(e.mp.detail);
      // console.log(e)
      // console.log(e)
      // console.log(e)
    },
    next: function () {
      wx.reLaunch({ url: "/pages/index/main" });
    },
    gone: function () {
      this.name = "lnkf";
    },
    bindGetUserInfo: function () {
      wx.getSetting({
        success: res => {
          console.log(res);
        },
        fail: () => {
          console.log("————getSetting失败————");
        }
      });
    },
    getWeRunData: function () {
      wx.login({
        success: () => {
          wx.getWeRunData({
            success: res => {
              console.log(res);
            }
          });
        }
      });
    }
  },
  onLoad() {
    // console.log("__onload__");
  },
  onReady() {
    // console.log("__onreadey__");
  },
  onShow() {
    // console.log("__onshow__");
    util.login(() => {
      // dosomething
      his.isShow = true;
    });
  },
  onUnload() {
    // console.log("__onunload__");
  },
  //监听页面滚动事件
  onPageScroll: function (e) {
    // console.log(e);
  },
  onTabItemTap(res) {
    // tab 点击时执行
    console.log(res);
  },
};
</script>

<style lang="scss" scoped>
[v-cloak] {
  display: none;
}
.container {
  width: 100%;
  .user {
    width: 150rpx;
    padding-top: 200rpx;
    // .AvatarUrl {
    //   overflow: hidden;
    //   border-radius: 50%;
    // }
    .userAvatarUrl {
      overflow: hidden;
      display: block;
      width: 150rpx;
      height: 150rpx;
      border-radius: 50%;
    }
    .userNickName {
      display: block;
      font-size: 20px;
      text-align: center;
      padding-top: 20rpx;
    }
  }
}
</style>
