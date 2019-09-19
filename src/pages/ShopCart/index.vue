<template>
  <div class="container">
    <header>
      <div class="left">
        <span>购物车</span>
      </div>
      <div class="right">
        <span @click="$router.push('')">领券</span>
      </div>
    </header>
    <div class="desc">
      <div class="left">
        <i class='icon'></i>
        <span>30天无忧退货</span>
      </div>
      <div class="middle">
        <i class='icon'></i>
        <span>48小时快速退款</span>
      </div>
      <div class="right">
        <i class='icon'></i>
        <span>满88元免邮费</span>
      </div>
    </div>
    <div class="shopList">
      <div class="noCart-title">去添加点什么吧</div>
      <div class='loginbtn'>登入</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopCart"
};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
// 引入混合
.container
  width: 100%
  height: 100%
  background-color: #f4f4f4
  header
    width: 100%
    height: 88px
    background-color: #fff
    padding: 0 50px 0 30px
    box-sizing: border-box
    display: flex
    div
      width: 50%
      line-height: 88px
    .left
      font-size: 33px
      color: #333
      text-align: left
      line-height: 80px
    .right
      font-size: 30px
      color: #b4282d
      text-align: right
  .desc
    width 100%
    height 70px
    display flex
    div
      width 33%
      font-size 24px
      color #666
      line-height 70px
      text-align center
      .icon 
        display inline-block
        width 10px
        height 10px
        margin-right 10px
        background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png')
  .shopList
    position absolute
    top 158px
    left 0
    right 0
    bottom 0
    background-color #f4f4f4
    background-position center
    background-repeat no-repeat

    background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png')
    .loginbtn
      height 92px
      width 480px
      background-color #b4282d
      color #fff
      text-align center
      line-height 92px
      font-size 28px
      position absolute
      left 50%
      top 65%
      margin-left -240px
    .noCart-title
      position absolute
      left 50%
      top 58%
      margin-left -94px
      line-height: 1;
      font-size: .37333rem;
      color: #999;
</style>
