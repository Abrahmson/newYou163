<template>
  <div class="container">
    <header>
      <div class="input" @click="toSearch">
        <i class="search-icon"></i>
        <span class="palceholder">搜索商品，共计233434件好物</span>
      </div>
    </header>
    <div class="content">
      <ul>
        <li :class="{active:select===1}" @click="select=1">推荐专区</li>
        <li :class="{active:select===2}" @click="select=2">换季专区</li>
        <li :class="{active:select===3}" @click="select=3">爆品专区</li>
        <li :class="{active:select===3}" @click="select=3">新品专区</li>
        <li :class="{active:select===3}" @click="select=3">居家生活</li>
        <li :class="{active:select===1}" @click="select=1">推荐专区</li>
        <li :class="{active:select===2}" @click="select=2">换季专区</li>
        <li :class="{active:select===3}" @click="select=3">爆品专区</li>
        <li :class="{active:select===3}" @click="select=3">新品专区</li>
        <li :class="{active:select===3}" @click="select=3">居家生活</li>
      </ul>
      <div class="list">
        <!-- 轮播图 -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/f7f216f5d01874f8f768ccfd78a7112e.jpg?imageView&amp;quality=75&amp;thumbnail=0x196"
              />
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/40ee9e553e6a2c228b0544bff65a618d.jpg?imageView&amp;quality=75&amp;thumbnail=0x196"
              />
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <ul class="hot-goods">
          <li>
            <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&amp;quality=85&amp;thumbnail=144x144">
            <div class='desc'>明星商品</div>
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&amp;quality=85&amp;thumbnail=144x144">
            <div class='desc'>明星商品</div>
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&amp;quality=85&amp;thumbnail=144x144">
            <div class='desc'>明星商品</div>
          </li>
          
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 引入swiper包
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "Category",
  data() {
    return {
      select: 1
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
// 引入混合
.container
  width: 100%
  position: absolute
  left: 0
  top: 0
  right: 0
  bottom: 100px
  header
    width: 100%
    height: 88px
    display: flex
    justify-content: center
    align-items: center
    .input
      width: 90%
      height: 70%
      background-color: #ededed
      border-radius: 0.10667rem
      display: flex
      align-items: center
      justify-content: center
      .search-icon
        display: inline-block
        width: 28px
        height: 28px
        background-image: url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png') // yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png)
        margin: 0 20px
      .palceholder
        line-height: 56px
        color: #666
        font-size: 26px
  .content
    position: absolute
    top: 88px
    left: 0
    right: 0
    bottom: 0
    display: flex
    ul
      width: 22%
      height: 100%
      li
        width: 100%
        height: 55px
        padding: 23px 0
        line-height: 55px
        font-size: 32px
        text-align: center
        color: #333
      .active
        color: #ab2b2b
    .list
      width: 78%
      height: 100%
      padding-top 25px
      .swiper-container
        width: 100%
        height: 20%
        img 
          width: 100%
          height: 100%
      .hot-goods
        width 100%
        height 80%
        display flex
        flex-wrap wrap
        li
          width 33%
          display flex
          flex-direction column
          align-items center
          height 180px
          padding 0
          img 
            height 160px
            width 160px
          .desc 
            height: 20px;
            font-size: .32rem;
            color: #333;
            text-align: center;
</style>
