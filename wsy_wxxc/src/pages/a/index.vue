<template v-cloak>
  <div>
    <span>{{serverSrc}}</span>
    <button @click="backPage">backPage</button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.serverSrc = this.GLOBAL.serverSrc
  },
  data() {
    return {
      serverSrc: ''
    }
  },
  methods: {
    backPage() {
      wx.navigateBack({
        delta: 2 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
      });
    }
  },
}
</script>

<style lang="scss" scoped>
[v-cloak] {
  display: noen;
}
</style>