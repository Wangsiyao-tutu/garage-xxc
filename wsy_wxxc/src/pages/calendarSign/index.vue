<template>
  <div class="page">
    <!--index.wxml-->
    <div class="calendar">
      <div class='bcfff'>
        <span class="weekName">
          <span class="monday">一</span>
          <span class="tuesday">二</span>
          <span class="wednesday">三</span>
          <span class="thursday">四</span>
          <span class="friday">五</span>
          <span class="saturday">六</span>
          <span class="sunday">日</span>
        </span>
        <div class="week">
          <!--填补空格-->
          <div v-for="item in nbsp" :key="item">\n</div>

          <!--循环日期-->
          <!-- 当天以前 -->
          <div v-for="item in date" style="color:gainsboro;">
            <text v-if="item+1==calendarSignData[item+1]" style="color: #2ccecb;">{{item+1}}</text>
            <text v-else="">{{item+1}}</text>
          </div>
          <!-- 当天 -->
          <div style="">
            <text v-if="is_qd" style="color: #2ccecb;">{{date}}</text>
            <text v-else="" style="">{{date}}</text>
          </div>
          <!-- 以后 -->
          <div v-for="item in monthDaySize" :key='item'>{{item+date+1}}</div>
        </div>
      </div>
      <div class="calendarSign">
        <image @click="calendarSign" class='btnimg' src='https://jpadmin.99dudesign.com/public/img/source/btn_icon_wodekaoqin1.png'></image>
        <!-- v-if="{{date!=calendarSignData[date]}}" -->
      </div>
      <!-- 签到成功 -->
      <!-- <div class="zhegai hide" :class='qddiv?"block":""' @click='quxiaoQd'></div>
      <div class="successqd hide" :class='qddiv ? "block" : ""'>
        <div class='qdtitle'>签到成功</div>
        <div class='qdcontent' v-if="is_qd">今天已经签过了~</div>
        <div class='qdcontent' v-else>签到成功，获得{{integral}}积分，您已连续签到{{rule}}天！</div>
        <div class='queding' @click='quxiaoQd'>确定</div>
      </div> -->
    </div>
    <button class="btnnnn">默认边框</button>
  </div>
</template>

<script>
var app = getApp();
var calendarSignData;
var date;
var calendarSignDay;
var is_qd;
export default {
  /**
   * 页面的初始数据
   */
  data() {
    return {
      qddiv: false,
      calendarSignData: "",
      calendarSignDay: "",
      is_qd: false,
    }
  },
  methods: {
    quxiaoQd: function (e) {
      this.qddiv = false;
      this.is_qd = true;
    },
    //事件处理函数
    calendarSign: function (e) {
      var that = this;
      this.qddiv = true;
      calendarSignData[date] = date;
      console.log(calendarSignData);
      calendarSignDay = calendarSignDay + 1;
      var today = new Date().getDate()
      wx.request({
        url: getApp().data + '后台的接口',
        method: "POST",
        data: {
          "user_id": wx.getStorageSync('user_id'),
          "sign_num": today
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded' //通过post传值，所以要加header
        },
        success: function (res) {
          this.rule = res.data.rule
          this.integral = res.data.integral
        }
      })

      wx.setStorageSync("calendarSignData", calendarSignData);
      wx.setStorageSync("calendarSignDay", calendarSignDay);

      this.calendarSignData = calendarSignData
      this.calendarSignDay = calendarSignDay
    },
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    var mydate = new Date();
    var year = mydate.getFullYear();
    var month = mydate.getMonth() + 1;
    date = mydate.getDate();
    var day = mydate.getDay();
    var nbsp = 7 - ((date - day) % 7);
    console.log(year + '年', month + '月', date + '日', "星期" + day)
    console.log("nbsp:" + nbsp);
    var monthDaySize;
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
      monthDaySize = 31;
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
      monthDaySize = 30;
    } else if (month == 2) {
      // 计算是否是闰年,如果是二月份则是29天
      if ((year - 2000) % 4 == 0) {
        monthDaySize = 29;
      } else {
        monthDaySize = 28;
      }
    };
    // 传ajax
    wx.request({
      url: getApp().data + 'index.php?g=api&m=output&a=sign_list',
      method: "POST",
      data: {
        "user_id": wx.getStorageSync('user_id')
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        // 判断是否签到过   
        if (res.data == null) {
          calendarSignData = new Array(monthDaySize)
          wx.setStorageSync("calendarSignData", calendarSignData);
        } else {
          var is_qd;
          for (var i in res.data) {
            parseInt(res.data[i])
            calendarSignData = new Array(monthDaySize)
            calendarSignData[parseInt(res.data[i])] = parseInt(res.data[i])
            wx.setStorageSync("calendarSignData", calendarSignData);
            console.log(date)
            console.log(parseInt(res.data[i]))

            if (parseInt(res.data[i]) == date) {
              console.log(1)
              wx.setStorageSync("calendarSignDay", 1);
              is_qd = true
            } else {
              wx.setStorageSync("calendarSignDay", 0);

            }
          }
        }
        console.log(is_qd)
        calendarSignData = wx.getStorageSync("calendarSignData")
        calendarSignDay = wx.getStorageSync("calendarSignDay")
        console.log(calendarSignData);
        console.log(calendarSignDay)
        this.is_qd = is_qd
        this.year = year
        this.month = month
        this.nbsp = nbsp
        this.monthDaySize = monthDaySize
        this.date = date
        this.calendarSignData = calendarSignData
        this.calendarSignDay = calendarSignDay
      }
    })
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.removeStorageSync("calendarSignData")
    wx.removeStorageSync("calendarSignDay")
  }
}
</script>

<style lang="scss" scoped>
.page {
  background-color: #2ccecb;
}

.t_red {
  color: red;
}

.t_blue {
  color: royalblue;
}

.calendar {
  width: 500rpx;
  margin: 200rpx 125rpx;
  /* height: 600rpx; */ /* background-color: #ffffff; */
  border-radius: 4rpx;
}

.time {
  padding: 16rpx 20rpx;
  background-color: wheat;
  display: flex;
}

.time div {
  flex: 1;
  font-size: 30rpx;
}

.time div text {
  font-size: 38rpx;
}

.weekName {
  background-color: #54ff9c;
  width: 100%;
  display: flex;
  padding: 30rpx 0;
  font-size: 40rpx;
  color: #fff;
}

.weekName span {
  flex: 1;
  text-align: center;
}

.week {
  width: 100%;
}

.week div {
  width: 14.2%;
  height: 50rpx;
  line-height: 50rpx;
  display: inline-block;
  margin: 10rpx 0;
  text-align: center;
  font-size: 30rpx;
  color: #747474;
}

.week div text {
  width: 100%;
  height: 100%;
  display: inline-block;
}

.calendarSign {
  margin-top: -75rpx;
  text-align: center;
}

.btnimg {
  width: 150rpx;
  height: 150rpx;
  border-radius: 50%;
}

.bcfff {
  background-color: white;
  padding-bottom: 100rpx;
}

.zhegai {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.4;
}

.successqd {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 550rpx;
  margin-left: -275rpx;
  margin-top: -200rpx;
  background-color: white;
  border-radius: 6rpx;
  border: 2rpx solid #54ff9c;
  text-align: center;
}
.qdtitle {
  font-size: 32rpx;
  font-weight: bold;
  color: #232323;
  padding: 20rpx;
}
.qdcontent {
  font-size: 30rpx;
  color: #232323;
  padding: 20rpx 10rpx;
}
.queding {
  font-size: 30rpx;
  color: #232323;
  border-top: 1rpx solid #cccccc;
  padding: 20rpx;
}
</style>