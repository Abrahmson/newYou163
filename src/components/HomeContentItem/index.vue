<template>
  <div class="home-content-item">
    <header>
      <div slot="left" class="left"></div>
      <div slot="middle" class="middle">- 新人专享礼 -</div>
      <div slot="right" class="right"></div>
    </header>
    <ul class="item-list">
      <li class="goods">
        <div class="name">新人专享礼</div>
        <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" />
      </li>
      <li class="goods">
        <div class="name">新人专享礼</div>
        <!-- <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" /> -->
      </li>
      <li class="goods">
        <div class="name">新人专享礼</div>
        <!-- <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" /> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
// 引入混合
.home-content-item
  margin-top: 10px
  background-color: #fff
  width: 100%
  padding: 20px
  box-sizing: border-box
  header
    width: 100%
    height: 90px
    .middle
      height 100%
      width 33%
      margin 0 auto
      line-height 90px
      text-align center
      font-size 30px
      color #333
  .item-list
    width: 100%
    height: 554px
    .goods
      width: 49%
      background-color: #ddd
      float: left
      margin: 2px
      .name
        height 130px
        line-height 130px
        text-align center
        font-size 26px
      &:nth-child(1)
        height: 100%
        background-color #F9E9CF
        text-align center
        line-height 554px
        img 
          display: inline
      &:nth-child(2)
        height: 49%
      &:nth-child(3)
        height: 50%
</style>
