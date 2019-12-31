<template>
  <div @click="clickHandsle">
    <divl class="uerInfo">
      <!-- <img class="avatar" v-if="avatarUrl" :src="avatarUrl" alt="头像图片"> -->
      <span class="nickName">{{nickName}}</span>
    </divl>
    <button @click="skjksd">去一个错误页面</button>
    <button @click="showNavigationBarLoading">当前页面显示导航条加载动画</button>
    <button @click="hideNavigationBarLoading">当前页面隐藏导航条加载动画</button>
    <button @click="showLoading">当前页面显示导航条加载动画</button>
    <button @click="pageScrollTo">将页面滚动到目标位置</button>
    <button @click="getStorage">获取本地数据缓存</button>
    <button @click="setStorage">设置本地数据缓存</button>
    <button @click="removeStorage">移除本地数据缓存</button>
    <button @click="clearStorage">清空本地数据缓存</button>
    <button @click="getLocation">获取前地理位置</button>
    <button @click="chooseLocation">打开地图选择位置</button>
    <button @click="getUserInfo">获取用户信息</button>
    <button @click="login">登陆(调用接口获取登录凭证)</button>
    <button @click="openLocation">使用微信内置地图查看位置</button>
    <button @click="chooseImage">本地相册选择图片或使用相机拍照</button>
    <button @click="handleScan">提供基于小程序的条码/二维码识别的API</button>
    <button @click="checkSession">检查登陆状态是否过期</button>
    <button @click="actionSheet">显示操作菜单</button>
    <button @click="additional">调高亮度</button>
    <button open-type='share'>转发</button>
    <button @click="reduce">降低亮度</button>
    <!-- <img v-if="imgUrl" :src="imgUrl" alt=""> -->
    <!-- <button @click="bindViewTap">bindViewTap</button> -->
    <!-- <button @click="Music_Player">Music Player</button>
    <button @click="Todos">Todos</button>
    <button @click="BUY">BUY</button>
    <button @click="API">API</button> -->
  </div>
</template>

<script>
import * as util from '@/utils/wxapi.js'
export default {
  data() {
    return {
      nickName: '',
      avatarUrl: '',
      imgUrl: '',
      number: 0.5
    }
  },
  onLoad() {
    // let app = getApp()
    // const url = 'https://api.budejie.com/api/api_open.php?a=newlist&c=data&maxtime=&type=29'
    // const url = 'https://api.apiopen.top/musicBroadcastingDetails?channelname=public_tuijian_spring'
  },
  onReady() {
    const object = {}
    util.getUserInfo().then(res => {
      this.avatarUrl = res.userInfo.avatarUrl
      this.nickName = res.userInfo.nickName
    })
  },
  methods: {
    skjksd() {
      wx.navigateTo({
        url: '/pages/todos/main'
      });
    },
    showNavigationBarLoading: function () {
      wx.showNavigationBarLoading()
    },
    hideNavigationBarLoading: function () {
      wx.hideNavigationBarLoading()
    },
    showLoading: function () {
      wx.showLoading({
        title: '加载中',
      })
      setTimeout(function () {
        wx.hideLoading()
      }, 2000)
    },
    getStorage: function () {
      util.getStorage('a').then(res => {
        console.log(res)
      })
    },
    setStorage: function () {
      const key = 'wsy';
      const value = '辽宁省葫芦岛人'
      util.setStorage(key, value).catch(res => {
        console.log(res)
      })
    },
    removeStorage: function () {
      util.removeStorage('a').then(res => {
        console.log(res)
      })
    },
    clearStorage: function () {
      util.clearStorage().catch(() => {
        console.log(e)
      })
    },
    getLocation: function () {
      util.getLocation().then(res => {
        console.log(res)
      })
    },
    chooseLocation: function () {
      util.chooseLocation().then(res => {
        console.log(res)
      })
    },
    openLocation: function () {
      const lat = 60
      const log = 60
      util.openLocation(lat, log).then(res => {
        console.log(res)
      })
    },
    login: function () {
      util.login().then(res => {
        console.log(res)
      })
    },
    chooseImage: function () {
      util.chooseImage().then(res => {
        console.log(res)
      })
    },
    handleScan: function () {
      util.handleScan().then(res => {
        console.log(res)
        this.imgUrl = res.result
        return util.showModal('实验', '试试行不行', true)
      }).then(res => {
        console.log(res)
        util.toastSuccess('成功')
      })
    },
    toastFail: function () {
      util.toastFail('失败')
    },
    toastSuccess: function () {
      util.toastSuccess('成功')
    },
    actionSheet: function () {
      console.log(9)
      util.actionSheet(['开玩笑', '怎么可能']).then(res => {
        console.log(res)
      })
    },
    pageScrollTo: function () {
      util.pageScrollTo({
        scrollTop: 100,
        duration: 300
      })
    },
    checkSession: function () {
      util.checkSession().then(res => {
        console.log(res)
      })
    },
    additional: function () {
      this.number + 0.1
    },
    reduce: function () {
      this.number - 0.1
    }
    // Music_Player() {
    //   wx.navigateTo({
    //     url: '/pages/music/main'
    //   });
    // },
    // Todos() {
    //   wx.navigateTo({
    //     url: '/pages/todos/main'
    //   });
    // },
    // BUY() {
    //   wx.navigateTo({
    //     url: '/pages/buy/main'
    //   });
    // },
    // API() {
    //   wx.navigateTo({
    //     url: '/pages/api/main'
    //   });
    // }
    /* bindViewTap() {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({
          url
        })
      } else {
        mpvue.navigateTo({
          url
        })
      }
    },   */
  },
  onShareAppMessage: function (options) {
    var that = this;
    // 设置菜单中的转发按钮触发转发事件时的转发内容
    var shareObj = {
      title: "转发的标题", // 默认是小程序的名称(可以写slogan等)
      path: '/pages/buy/index', // 默认是当前页面，必须是以‘/’开头的完整路径
      // imageUrl: '', // 自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
      success: function (res) {
        // 转发成功之后的回调
        if (res.errMsg == 'shareAppMessage:ok') { }
      },
      fail: function () {
        // 转发失败之后的回调
        if (res.errMsg == 'shareAppMessage:fail cancel') {
          // 用户取消转发
        } else if (res.errMsg == 'shareAppMessage:fail') {
          // 转发失败，其中 detail message 为详细失败信息
        }
      },
      complete: function () {
        // 转发结束之后的回调（转发成不成功都会执行）
      }
    }
    if (options.from == 'button') {
      console.log(options)
      var eData = options.target.dataset;
      console.log(eData.name); // shareBtn
      // 此处可以修改 shareObj 中的内容
      shareObj.path = '/pages/btnname/btnname?btn_name=' + eData.name;
    }
    // 返回shareObj
    return shareObj;
  },
  watch: {
    number: function () {
      console.log(this.number)
      wx.setScreenBrightness({ value: this.number })
    }
  }
}

</script>

<style scoped>
.uerInfo {
  width: 100%;
}
.avatar {
  width: 200rpx;
  height: 200rpx;
  -ms-flex-item-align: center;
}

.nickName {
  font-size: 40rpx;
  text-align: center;
  color: rgb(22, 22, 22);
}
</style>
