<template v-cloak>
  <div>
    <span>{{global.serverSrc}}</span>
    <button @click="next">next</button>
    <button @click="changeGLOBAL">change</button>
  </div>
</template>

<script>
export default {
  mounted(option) {
    this.global = this.GLOBAL;
  },
  data() {
    return {
      global: ''
    }
  },
  methods: {
    next() {
      wx.navigateTo({ url: '/pages/a/main' });
    },
    changeGLOBAL() {
      this.global.serverSrc = 'www.wsy.cn'
    }
  },
}
</script>

<style lang="scss" scoped>
[v-cloak] {
  display: noen;
}
</style>