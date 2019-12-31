<script>
export default {
  created() {
    console.log('app created and cache logs by setStorageSync')
  },
  onLaunch: function (options) {
    console.log('正在检查是否有新版本')
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager()
      updateManager.onCheckForUpdate(function (res) {
        if (res.hasUpdate) {
          console.log(res)
          console.log('没有体验过的全新版本，是兄弟就来了砍我')
          updateManager.onUpdateReady(function () {
            updateManager.applyUpdate()
          })
          updateManager.onUpdateFailed(function () {
            wx.showModal({
              title: '更新提示',
              content: '发现新版本，请删除小程序重新搜索下载最新版本！'
            })
          })
        } else {
          console.log('没有发现新的版本')
        }
      })
    } else {
      wx.showModal({
        title: '温馨提示',
        content: '当前微信版本过低，无法更新小程序，请升级微信到最新版本！'
      })
    }
    wx.login({
      success: res => {
        console.log(res)
        console.log('登陆成功')
      },
      fail: () => {
        console.log('登录失败')
      }
    })
  },
  onError() {
    console.log('api使用方法错误-请重新调整')
  },
  onPageNotFound(res) {
    console.log(9999)
    wx.navigateTo({ url: '/pages/notFound/main' });
  },
  globalData: {
    account: 'asdajdasjd',
    stroge: 0,
    openid: 0,
    userInfo: null,
    times: null,
    urls: 'https://wx.knowdao.com',
    urlst: 'http://test.knowdao.com',
    token: ''
  }
}
</script>

<style>
.container {
  /*     height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 200rpx 0;
    box-sizing: border-box; */
}

/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
