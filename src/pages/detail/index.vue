<template>
  <div>
    {{message}}
    <div class="section">
      <div class="section__title">省市区选择器</div>
      <picker mode="region" @change="bindRegionChange" :value="region" :custom-item="customItem" class="picker_region">
        <div class="picker">
          当前选择：{{region[0]}}，{{region[1]}}，{{region[2]}}
        </div>
      </picker>
    </div>
    <div class="section">
      <div class="section__title">多列选择器</div>
      <picker mode="multiSelector" @change="bindMultiPickerChange" @columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray">
        <div class="picker">
          当前选择：{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}
        </div>
      </picker>
    </div>
    <Statistic />
    <MyCanvas />
    <button @click="getcurrent">asd</button>
    <button @click="goTo">asd</button>
  </div>
</template>

<script>
import Statistic from '@/components/canvas/statistic.vue';
import MyCanvas from '@/components/canvas/mycanvas.vue';
// import { mapGetters } from 'vuex';
export default {
  components: { Statistic, MyCanvas },
  data() {
    return {
      message: '细节卖队友',
      region: [],
      array: [['a', 'b'], ['c', 'd'], ['e', 'f']],
      multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
      multiIndex: [0, 0, 0],
    }
  },
  // computed: { ...mapGetters(['modelConfig']) },
  methods: {
    bindRegionChange(e) {
      console.log('picker发送选择改变，携带值为', e.mp.detail.value);
      this.region = e.mp.detail.value;
    },
    bindMultiPickerChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.mp.detail.value)
      this.multiIndex = e.mp.detail.value;
    },
    bindMultiPickerColumnChange: function (e) {
      const column = e.mp.detail.column;
      const value = e.mp.detail.value;
      console.log('第' + (column + 1) + '列', '第' + (value + 1) + '行')
      let multiArray = this.multiArray;
      let index = this.multiIndex;

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
    getcurrent() {
      let pages = getCurrentPages();
      // console.log(pages)
      let page = getApp();
      page.globalData.network = { name: 'wsy', age: 12, sex: '男' }
      // console.log(page.globalData)
    },
    goTo() {
      wx.navigateTo({ url: '/pages/login/main' });
    }
  },
  onLoad() {
    // console.log('Vuex', this.modelConfig);
  },
  onShow: function () {
    this.getcurrent();
  }
}
</script>

<style lang="scss" scoped>
.picker_region {
  border: 1px solid #000;
  color: aqua;
  font-size: 40px;
  background-color: red;
}
</style>