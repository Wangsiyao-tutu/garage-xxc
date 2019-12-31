<template>
  <div class="page">
    <div class="header">
      <picker mode="date" @change="bindPickerChange" :value="selectDate" start="2015-09-0" :end="nowDate">
        <div>
          <label class="day">
            <span class="DD">{{ Day }}</span>
            <span class="YM">.{{ Month }}.{{ Year }}</span>
          </label>
        </div>
      </picker>
      <div class="weather">
        <span v-if="weather.day == '今天'">{{ "今天" }}</span>
        <span v-else>{{ weather.city_name }}·{{ weather.climate }}
          {{ weather.temperature }}℃</span>
      </div>
    </div>

    <div class="body">
      <div class="container" v-for="(item, index) in content" :key="item">
        <div class="content" v-if="item.category == 0">
          <div class="img">
            <image :data-url="item.src" :src="item.src" mode="aspectFit" lazy-load="false" :class="item.className" @longpress='saveImg' @click="looklook">
            </image>
          </div>
          <div class="text">
            <span class="hp_author">{{ item.title }} | {{ item.pic_info }}</span>
            <span class="hp_content">{{ item.content }}</span>
            <span class="text_author">{{ item.author }}</span>
          </div>
          <div class="share_view">
            <button class="edit_btn" @click="edit">编辑</button>
            <button class="share_btn" open-type="share">分享</button>
          </div>
        </div>

        <div class="content" v-else>
          <div @click="goToDetailPage">
            <div class="item_cate" v-if="item.category == 1">
              <span class="item_type" v-if="item.tag_list[0] == null">-阅读-</span>
              <span class="item_type" v-else>-{{ item.tag_list[0].title }}-</span>
            </div>
            <div class="textName">
              <span class="item_title">{{ item.title }}</span>
              <span class="item_author">文/{{ item.author }}</span>
            </div>
            <div class="item_image">
              <image :src="item.src" mode="aspectFit" lazy-load="false" :class="item.className">
              </image>
            </div>
            <div class="text">
              <span class="hp_author">{{ item.content }}</span>
              <span class="hp_content">今天</span>
            </div>
          </div>
          <div class="share_view">
            <button class="share_btn" open-type="share" :data-alpha-beta="index" hover-stop-propagation="true">
              分享
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import utils from "@/utils/formatTime";
export default {
  data() {
    return {
      selectDate: utils.formatTime(new Date()),
      nowDate: utils.formatTime(new Date()),
      Month: utils.formatMonth(new Date()),
      Year: utils.formatYear(new Date()),
      Day: utils.formatDay(new Date()),
      weather: {
        day: "今天as",
        city_name: "大连",
        climate: "东北风微风.晴",
        temperature: -1
      },
      content: [
        {
          id: 0,
          category: 0,
          title: "摄影",
          author: "王思垚",
          className: "hp_img",
          pic_info: "Noah Rosenfield",
          src: "http://image.wufazhuce.com/FiytsDuMIy7KzRGZtDeVmqCvf_pq",
          // src: "/static/images/01.png",
          content: "看尼玛的代码，滚去玩游戏",
          tag_list: []
        },
        {
          id: 1,
          category: 1,
          title: "鲁迅曾经说过，不好好玩就是个憨批。",
          author: "王思垚",
          className: "item_img",
          pic_info: "",
          src: "/static/images/02.png",
          content: "今天是美好的一天，打会儿游戏吧",
          tag_list: []
        },
        {
          id: 2,
          category: 1,
          title: "爱咋咋地，真就是个彪璇儿呗。",
          author: "王思垚",
          className: "item_img",
          pic_info: "",
          src: "/static/images/03.png",
          content: "秦始皇统一帝国后，想解放全世界",
          tag_list: []
        }
      ]
    };
  },
  onLoad: function () { },
  onShareAppMessage: function (res) {
    if (res.from == "button") {
      console.log(res);
    }
  },
  methods: {
    bindPickerChange(e) {
      let temp = e.mp.detail.value.split("-");
      this.selectDate = e.mp.detail.value;
      this.Month = temp[1];
      this.Year = temp[0];
      this.Day = temp[2];
    },
    goToDetailPage: function () {
      console.log(99);
      wx.navigateTo({ url: "/pages/detail/main" });
    },
    edit: function () {
      console.log(9999);
    },
    saveImg: function (e) {
      var tmpPath = '',
        urls = e.target.dataset.url;
      // downloadTask监听下载进度变化和取消坚挺的对象
      const downloadTask = wx.downloadFile({
        url: urls,
        success: function (res) {
          if (res.statusCode === 200) {
            tmpPath = res.tempFilePath;
            console.log(tmpPath + 'qasdasd')
            // console.log(urls);
            // console.log(tmpPath);
          }
        },
        fail: function () {
          console.log('下载临时文件失败')
        }
      })
      wx.showActionSheet({
        itemList: ['保存到手机相册'],
        success: function (res) {
          if (res.tapIndex == 0) {
            wx.saveImageToPhotosAlbum({
              filePath: tmpPath,
              complete: function (res) {
                if (res.errMsg == 'saveImageToPhotosAlbum:ok') {
                  wx.showToast({
                    title: '保存成功',
                  })
                } else {
                  wx.showToast({
                    title: '保存失败',
                  })
                }
              }
            });
          } else {
            wx.showToast({
              title: '保存失败',
            });
          }
        }
      })
    },
    looklook: function (res) {
      console.log(res)
      const url = res.mp.currentTarget.dataset.url;
      wx.previewImage({
        current: 'url',
        urls: [url],
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background-color: white;
  color: rgb(134, 134, 134);
  .day {
    float: left;
    padding-left: 10rpx;
    .DD {
      font-size: 20px;
    }
    .YM {
      font-size: 14px;
    }
  }
  .weather {
    float: right;
    font-size: 14px;
    padding-top: 12rpx;
    padding-right: 20rpx;
  }
}
.body {
  background-color: rgb(188, 206, 233);
}
.content {
  width: 100%;
  overflow: hidden;
  background: white;
  margin-bottom: 20rpx;
  border-bottom-left-radius: 36rpx;
  border-bottom-right-radius: 36rpx;
  .textName {
    width: 100%;
    font-size: 12px;
    padding-left: 44rpx;
    color: rgb(134, 134, 134);
    span {
      display: block;
    }
    .item_title {
      color: black;
      font-size: 16px;
      padding: 20rpx;
      padding-left: 0;
    }
    .item_author {
      padding-top: 20rpx;
    }
  }
  .img {
    padding-top: 30px;
    .hp_img {
      width: 100%;
    }
  }
  .text {
    display: flex;
    font-size: 14px;
    text-align: center;
    flex-direction: column;
    color: rgb(134, 134, 134);
    .hp_content {
      padding: 20rpx 0;
    }
  }
  .share_view {
    width: 100%;
    // border-bottom-left-radius: 30rpx;
    // border-bottom-right-radius: 30rpx;
    button {
      width: 96rpx;
      height: 56rpx;
      font-size: 10px;
      text-align: center;
      line-height: 56rpx;
      color: rgb(134, 134, 134);
    }
    .edit_btn {
      position: relative;
      top: 40rpx;
      left: 180rpx;
    }
    .share_btn {
      position: relative;
      top: -16rpx;
      left: 300rpx;
    }
  }
  .item_cate {
    display: flex;
    flex-direction: column;
    span {
      font-size: 14px;
      text-align: center;
      color: rgb(134, 134, 134);
    }
    .item_type {
      padding: 10rpx 0;
    }
  }
  .item_image {
    padding: 0;
    width: 750rpx;
    padding-top: -20rpx;
    vertical-align: middle;
    .item_img {
      display: block;
      margin: auto;
      width: 650rpx;
    }
  }
}
</style>
