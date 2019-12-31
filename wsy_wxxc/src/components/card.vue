<template>
  <div class="root-layout">
    <!-- 遮罩层 -->
    <div class="shade-mask" data-status='close' v-if="showModalStatus">
      <!-- 模态弹窗，显示打卡规则 层级 z-index = 10001 -->
      <div class="model-box" v-if="showModalStatus">
        <span class="rule-title">打卡规则</span>
        <div class="rule-content-layout">
          <block v-for="item in dakaRules" :key="item">
            <div class="rule_content">
              <div class="dot"></div>
              <span class="rule">{{item}}</span>
            </div>
          </block>
        </div>
        <button class="btn-sure">确定</button>
      </div>
    </div>
    <!-- <view class="root-layout"> -->
    <!-- 遮罩层，全屏显示，层级 z-index=1000  -->
    <!-- <view class="shade-mask" bindtap="shadeMaskHandler" data-status="close" wx:if="{{showModalStatus}}" /> -->
    <!-- 模态弹窗，显示打卡规则 层级 z-index = 10001 -->
    <!-- <view animation="{{animationData}}" class="model-box" wx:if="{{showModalStatus}}">
        <text class="rule-title">打卡规则</text>
        <view class="rule-content-layout">
          <block wx:for="{{dakaRules}}" wx:for-item="ruleItem">
            <view class="rule_content">
              <view class="dot"></view>
              <text class="rule">{{ruleItem}}</text>
            </view>
          </block>
        </view> -->
    <!-- 确定按钮 -->
    <!-- <text class="btn-sure" bindtap="shadeMaskHandler" data-status="close">确定</text>
      </view>
    </view> -->

  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      showModalStatus: true,
      dakaRules: ['1', '2', '3']
    }
  }
}
</script>

<style>
.shade-mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: #000;
  opacity: 0.5;
  overflow: hidden;
}

/* 模态弹窗 */
.model-box {
  width: 600rpx;
  height: 600rpx;
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 25rpx;
  z-index: 1001;
  background: #fafafa;
  margin: -150px 50rpx 0 50rpx;
  border-radius: 6rpx;
  border: 1px solid rgb(150, 147, 147);
}

/* 确定按钮 */
.btn-sure {
  display: block;
  padding: 30rpx;
  font-size: 32rpx;
  text-align: center;
  border-top: 1rpx solid #e8e8ea;
  color: #7885e8;
}
</style>
