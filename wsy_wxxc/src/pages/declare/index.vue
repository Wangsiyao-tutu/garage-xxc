<template>
  <div>
    <!-- <web-view src="https://mp.weixin.qq.com/s?__biz=MzI2ODUxMzg4Nw==&mid=2247485427&idx=1&sn=ebfb8851c6cbb0d40c93f8ecbda83687&chksm=eaef20c3dd98a9d5a19f5ad195888c603c8c819021bab602d11f9aa757b66475d39d23f664c4&token=1408526571&lang=zh_CN#rd">
    </web-view> -->
    <button @click="preBack">只有一个返回按钮</button>
  </div>
</template>

<script>
export default {
  onLoad() {
    let pages = getCurrentPages()
      , prePage = pages[pages.length - 2]

    this.prePage = prePage
  },
  data() {
    return {
      name: 'wsy'
    }
  },
  methods: {
    preBack: function () {
      wx.navigateBack({
        delta: this.preBack //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0;
}
</style>