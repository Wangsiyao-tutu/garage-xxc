<template>
  <div class="todos_container">
    <div class="header">
      <div class="img" @click="addHandler">
        <img src="../../../static/todos/jiahao.png" alt="添加图片" />
      </div>
      <input type="text" placeholder="请添加列表项" v-model="text" @confirm="addHandler" />
    </div>
    <div v-if="todos.length != 0">
      <div class="content">
        <div class="todos" v-for="item in todos" :key="item">
          <!-- <checkbox :value="item.value" :checked="item.checked" v-model="item.checked" /> -->
          <input type="checkbox" :checked="item.checked" @click="doneHandler(item)" />
          <span :class="item.checked ? 'todos_span' : ''">{{
            item.value
          }}</span>
          <icon type="cancel" size="24" @click="removeHandler(item)"></icon>
        </div>
      </div>
      <div class="footer">
        <button class="footer_tool footer_tool_01" @click="allDoneHandler">
          全部完成
        </button>
        <button class="footer_tool footer_tool_02">
          {{ leftCount }}个任务未完成
        </button>
        <button class="footer_tool footer_tool_02" @click="clearHandler">
          clear all
        </button>
      </div>
    </div>
    <div v-else-if="todos.length == 0" class="Anther">没有待做任务</div>

    <button @click="haha">下一个页面</button>
  </div>
</template>

<script>
export default {
  onLoad(option) {
    wx.showShareMenu({ withShareTicket: false });
    // let optionList = wx.getLaunchOptionsSync()
  },
  onShareAppMessage() {
    return {
      title: '转发Demo',
      path: '/pages/index/main?name=wsy&sex=男',
      // imageUrl: '../../../static/images/user.png',
      success: res => {
        let shareTicket = res.shareTicket;
        console.log(res)
        if (shareTicket.length == 0) {
          return false;
        }
        wx.getShareInfo({
          ShareTicket: shareTicket[0],
          success: res => {
            console.log(999)
          }
        });
      },
      fail: () => {
        console.log('false')
      },
    };
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          value: '吃饭',
          checked: true
        },
        {
          id: 2,
          value: '睡觉',
          checked: false
        },
        {
          id: 3,
          value: '喝水',
          checked: false
        }
      ],
      leftCount: 2,
      text: '',
      allDone: false
    }
  },
  methods: {
    haha() {
      console.log(99)
      wx.redirectTo({ url: '/pages/declare/main' });
    },
    addHandler() {
      if (this.text) {
        this.todos = [
          ...this.todos,
          {
            id: Math.random() * Math.random() * 10,
            value: this.text,
            checked: false
          }
        ]
        this.text = ''
        this.leftCount++
      } else {
        wx.showModal({
          title: '提示', //提示的标题,
          content: '添加内容不能为空', //提示的内容,
          showCancel: false, //是否显示取消按钮,
          confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
          confirmColor: '#3CC51F', //确定按钮的文字颜色,
          success: res => {
            console.log(res)
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    },
    removeHandler(e) {
      let todos = this.todos.filter(item => item.id !== e.id)
      this.todos = todos
      if (!e.checked) this.leftCount--
    },
    doneHandler(e) {
      this.todos.map(item =>
        item.id == e.id ? (item.checked = !e.checked) : item.checked
      )
      if (e.checked) {
        this.leftCount--
      } else {
        this.leftCount++
      }
    },
    allDoneHandler() {
      this.allDone = !this.allDone
      this.todos.forEach(item => {
        item.checked = this.allDone
      })
      if (this.allDone) {
        this.leftCount = 0
      } else {
        let todos = this.todos
        let _todos = []
        todos.forEach(item => {
          if (!item.checked) {
            _todos.push(item)
            this.leftCount = _todos.length
          }
        })
      }
    },
    clearHandler() {
      this.todos = this.todos.filter(item => item.checked == false)
      console.log(this.todos)
    }
  }
}
</script>

<style scoped>
.todos_container {
  padding-top: 10rpx;
}

.header {
  display: flex;
  padding: 10rpx;
  align-items: center;
  border: 2px solid #e3e3e3;
  border-radius: 10rpx;
}

.header .img {
  padding-left: 10rpx;
}

.header img {
  width: 40rpx;
  height: 40rpx;
}

.header input {
  width: 650rpx;
  height: 50rpx;
  margin-left: 10rpx;
  padding-left: 15rpx;
  border: 2px solid #979191;
}

.content {
  margin-top: 20rpx;
  border: 2px solid #3333;
  height: 100%;
}

.todos {
  display: flex;
  height: 100%;
}

.todos span {
  padding-left: 10rpx;
}

.todos input {
  zoom: 1;
  margin-left: 6rpx;
}

.todos span {
  flex: 1;
  display: block;
  border: 1px solid rgba(179, 175, 175, 0.933);
  font-size: 30rpx;
  margin: 5rpx 0;
}

.todos .todos_span {
  text-decoration: line-through;
  color: #9b9898;
}

icon {
  margin-top: 6rpx;
  margin-left: 4rpx;
}

.footer {
  display: flex;
}

.footer_tool {
  width: 80rpx;
  height: 50rpx;
  flex: 1;
  font-size: 30rpx;
  line-height: 50rpx;
  text-align: center;
  align-items: center;
}

.Anther {
  color: rgba(7, 7, 7, 0.2);
  font-size: 30rpx;
  font-style: italic;
}

/*   .footer_tool_01 {
    text-align: center;
  }

  .footer_tool_02 {
    text-align: center;
  } */
</style>
