<template>
  <div class="container">
    <ShiwuHeader>
      <div class="tittle"></div>
    </ShiwuHeader>
    <div class="content">
      <div class="logo"></div>
      <div class="btn">
        <mt-button type="danger" class="login QQ">
          <i class="iconfont icon-qq"></i>QQ授权登入
        </mt-button>
        <mt-button type="danger" class="login phone">
          <i class="iconfont icon-shouji-tianchong"></i>手机号授权登入
        </mt-button>
      </div>
      <div class="login-way">
        <div class='way'>
          <i class="iconfont icon-youxiang"></i>
          <span>网易邮箱</span>
        </div>
        <div class='way'>
          <i class="iconfont icon-weixin"></i>
          <span>weixin</span>
        </div>
        <div class='way'>
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入mint-ui
import Vue from "vue";
import { Button } from "mint-ui";
Vue.component(Button.name, Button);
export default {};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
// 引入混合
.container
  height: 100%
  width: 100%
  .tittle
    background-image: url('./images/icon.png')
    background-repeat: no-repeat
    background-position: center
    background-size: contain
    width: 176px
    height: 56px
    position: absolute
    left: 50%
    top: 50%
    margin-top: -28px
    margin-left: -88px
  .content
    width: 100%
    position: absolute
    top: 110px
    left: 0
    right: 0
    bottom: 0
    background-color: #F2F5F4
    .logo
      height: 30%
      width: 100%
      background-repeat: no-repeat
      background-position: center
      background-size: 267px 90px
      background-image: url('//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png')
    .btn
      width: 100%
      height: 50%
      text-align: center
      .login
        margin-top: 200px
        width: 670px
        height: 100px
        background-color: #DD1A21
        border: solid 2px #DD1A21
        font-size: 30px
        i
          font-size: 30px
      .phone
        background-color: transparent
        color: #DD1A21
        margin-top: 20px
    .login-way
      width 100%
      height 10%
      display flex
      padding 0 50px
      box-sizing border-box
      .way
        width 33%
        height 100%
        text-align center
        font-size 28px


</style>
