<template>
  <div class="div">
    <!-- <open-data type="userAvatarUrl"></open-data> -->
    <!-- <open-data type="userNickName"></open-data> -->
    <img :animation="animation" @click="signClick" :src="'/static/images/user.png'" alt="头像图片" />
    <button v-if="canIUse" open-type="getUserInfo" @getuserinfo="bindGetUserInfo" @click="getUserInfo">授权登录</button>
    <span v-else>请升级微信版本</span>

    <Card v-if="show" />
    <!-- <CardHaha /> -->

    <div class="login_input">
      <input type="text" v-model="userName" :placeholder="userName" @click="get_userName" />
      <input v-if="type == 'number'" type="number" v-model="passWord" :placeholder="passWord" @click="get_passWord" />
      <input v-if="type == 'password'" type="password" v-model="passWord" :placeholder="passWord" />
      <img class="showImg" :src="isShow ? '/static/images/open.png' : '/static/images/close.png'" @click="showPassword" />
    </div>
    <!-- <button @click="getLaunchOption">登陆</button> -->
    <button @click="login">登陆</button>
    <button @click="register">注册</button>
  </div>
</template>

<script>
import * as util from '@/utils/wxapi.js'
import Card from '../../components/card'
import CardHaha from '@/components/haha'
export default {
  components: { Card, CardHaha },
  onLoad() {
    // wx.getSetting({
    //   success: function (res) {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称
    //       wx.getUserInfo({
    //         success: function (res) {
    //           console.log(res.userInfo)
    //         }
    //       })
    //     }
    //   }
    // })
  },
  onHide() {
    console.log('页面隐藏，进入后台')
    let animation = wx.createAnimation({
      duration: 10,
      timingFunction: "ease", //线性 
      delay: 0, //0则不延迟
    });
    animation.opacity(1).rotateZ(0).step();
    this.animation = animation;
  },
  onShow() {
    console.log('页面显示，进入视图')
  },
  data() {
    return {
      isShow: true,
      animation: '',
      type: 'number',
      passWord: '密码',
      userName: '员工编号',
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      show: false
    }
  },
  methods: {
    getLaunchOption() {
      console.log(wx.getLaunchOptionsSync())
    },
    signClick: function () {
      let that = this
        , animation = wx.createAnimation({
          duration: 1000,
          timingFunction: 'ease',
          dalay: 0
        })
      animation.opacity(1).rotateZ(360).step()
      this.animation = animation.export();

      setTimeout(function () {
        console.log(99)
        wx.navigateTo({
          url: '/pages/todos/main'
        })
      }.bind(this), 800)
    },
    get_userName() {
      this.userName = ''
    },
    get_passWord() {
      this.passWord = ''
    },
    // 显示密码或者隐藏密码的图片控住函数
    showPassword: function () {
      if (this.isShow) {
        // 如果this.data.isShow为true,则表示为密码小黑点
        this.isShow = false
        this.type = 'password'
      } else {
        this.isShow = true
        this.type = 'number'
      }
    },
    login() {
      // this.show = !this.show
      wx.switchTab({
        url: '/pages/index/main'
      })
    },
    register() {
      // 正则验证输入密码的特性
      let pattern = /^[^\u4e00-\u9fa5]{0,2}$/,
        str = 'A11';
    },
    getUserInfo: function (e) {
      // 判断小程序的API，回调，参数，组件等是否在当前版本可用。  为false 提醒用户升级微信版本
      // console.log(wx.canIUse('button.open-type.getUserInfo'))
      if (wx.canIUse('button.open-type.getUserInfo')) {
        // 用户版本可用
        console.log('可用')
      } else {
        console.log('请升级微信版本')
      }
    },
    bindGetUserInfo: function (e) {
      if (e.mp.detail.rawData) {
        //用户按了允许授权按钮
        console.log('用户按了允许授权按钮')
      } else {
        //用户按了拒绝按钮
        console.log('用户按了拒绝按钮')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.div {
  margin: 0 auto;
}

img {
  margin: 130rpx 230rpx 30rpx;
  width: 300rpx;
  height: 300rpx;
  background: rgb(146, 221, 226);
}

.login_input {
  position: relative;
  margin-top: 220rpx;
  margin-left: 40rpx;
  margin-bottom: 100rpx;
}

input {
  color: rgb(173, 167, 167);
  width: 654rpx;
  height: 70rpx;
  border: 1px solid rgb(172, 169, 169);
  margin-bottom: 6rpx;
  border-radius: 6rpx;
  outline: none;
  text-align: left;
  padding-left: 16rpx;
}

button {
  width: 670rpx;
  height: 70rpx;
  line-height: 70rpx;
}

.showImg {
  position: absolute;
  right: -193rpx;
  top: -48rpx;
  width: 70rpx;
  height: 70rpx;
  z-index: 99;
}
</style>
