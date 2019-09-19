<template>
  <div class="home-container">
    <!-- 头部 -->
    <HomeHeader />
    <!-- 顶部导航 -->
    <div class="home-nav-container">
      <ul class="home-nav">
        <li class="nav-item" :class="{select:select===1}" @click="select=1">推荐</li>
        <li class="nav-item" :class="{select:select===2}" @click="select=2">居家生活</li>
        <li class="nav-item" :class="{select:select===3}" @click="select=3">服饰鞋包</li>
        <li class="nav-item" :class="{select:select===4}" @click="select=4">美食酒水</li>
        <li class="nav-item" :class="{select:select===5}" @click="select=5">个护清洁</li>
        <li class="nav-item" :class="{select:select===6}" @click="select=6">母婴亲子</li>
        <li class="nav-item" :class="{select:select===7}" @click="select=7">运动旅游</li>
        <li class="nav-item" :class="{select:select===8}" @click="select=8">数码家电</li>
        <li class="nav-item" :class="{select:select===9}" @click="select=9">全球特色</li>
        <li class="nav-item" :class="{select:select===10}" @click="select=10">好货抄底</li>
      </ul>
      <div class="arrow">
        <div class="arrow-down" :class="{active:arrowdown}" @click="arrowhandle"></div>
      </div>
    </div>
    <!-- 顶部导航下拉列表 -->
    <div v-show="arrowdown" class="mask" @click="arrowhandle">
      <div class="arrow-top">
        <div>全部频道</div>
        <i class="arrow-icon"></i>
      </div>
      <ul class="arrow-list">
        <li class="arrow-item" :class="{active:arrowselect===1}" @click="arrowselect=1">推荐</li>
        <li class="arrow-item" :class="{active:arrowselect===2}" @click="arrowselect=2">推荐</li>
        <li class="arrow-item" :class="{active:arrowselect===3}" @click="arrowselect=3">推荐</li>
        <li class="arrow-item" :class="{active:arrowselect===4}" @click="arrowselect=4">推荐</li>
        <li class="arrow-item" :class="{active:arrowselect===5}" @click="arrowselect=5">推荐</li>
        <li class="arrow-item" :class="{active:arrowselect===6}" @click="arrowselect=6">推荐</li>
        <li class="arrow-item" :class="{active:arrowselect===7}" @click="arrowselect=7">推荐</li>
        <li class="arrow-item" :class="{active:arrowselect===8}" @click="arrowselect=8">推荐</li>
        <li class="arrow-item" :class="{active:arrowselect===9}" @click="arrowselect=9">推荐</li>
      </ul>
    </div>
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./images/home-swiper/01.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="./images/home-swiper/02.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="./images/home-swiper/03.jpg" />
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 文字描述 -->
    <ul class="home-desc">
      <li class="desc-item">
        <i class="icon left"></i>
        <span>网易自营品牌</span>
      </li>
      <li class="desc-item">
        <i class="icon middle"></i>
        <span>30天无忧退货</span>
      </li>
      <li class="desc-item">
        <i class="icon right"></i>
        <span>48小时快速退款</span>
      </li>
    </ul>
    <!--  分类列表-->
    <ul class="home-list">
      <li class="home-list-item">
        <a href="javascript:;">
          <img src="./images/nav-list/01.png" alt />
          <span>首发生活</span>
        </a>
      </li>
      <li class="home-list-item">
        <a href="javascript:;">
          <img src="./images/nav-list/02.png" alt />
          <span>居家服饰</span>
        </a>
      </li>
      <li class="home-list-item">
        <a href="javascript:;">
          <img src="./images/nav-list/03.png" alt />
          <span>服饰鞋包</span>
        </a>
      </li>
      <li class="home-list-item">
        <a href="javascript:;">
          <img src="./images/nav-list/04.png" alt />
          <span>美食酒水</span>
        </a>
      </li>
      <li class="home-list-item">
        <a href="javascript:;">
          <img src="./images/nav-list/05.png" alt />
          <span>个护清洁</span>
        </a>
      </li>
      <li class="home-list-item">
        <a href="javascript:;">
          <img src="./images/nav-list/06.png" alt />
          <span>母婴亲子</span>
        </a>
      </li>
      <li class="home-list-item">
        <a href="javascript:;">
          <img src="./images/nav-list/07.png" alt />
          <span>运动旅游</span>
        </a>
      </li>
      <li class="home-list-item">
        <a href="javascript:;">
          <img src="./images/nav-list/08.png" alt />
          <span>数码家电</span>
        </a>
      </li>
      <li class="home-list-item">
        <a href="javascript:;">
          <img src="./images/nav-list/09.png" alt />
          <span>全球特色</span>
        </a>
      </li>
      <li class="home-list-item">
        <a href="javascript:;">
          <img src="./images/nav-list/10.gif" alt />
          <span>好货抄底</span>
        </a>
      </li>
    </ul>
    <!-- 内内容区 -->
    <ul class="home-content">
        <HomeContentItem/>
        <HomeContentItem/>
        <HomeContentItem/>
        <HomeContentItem/>
        <HomeContentItem/>
    </ul>

    <!-- 页脚 -->
    <footer class="home-footer">
      <div class="bd">
        <div class="download app">下载APP</div>
        <div class="download pc">电脑版</div>
      </div>
      <p class="copyright">
        <span>网易公司版权所有 © 1997-2019</span>
        <br />
        <span>食品经营许可证：JY13303312241552225</span>
      </p>
      <i class="u-icon-top"></i>
      <i class="u-icon-bottom"></i>
    </footer>
  </div>
</template>

<script>
// 引入swiper包
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
// 引入BScroll
import BScroll from "better-scroll";
// 引入Header标签
import HomeHeader from "../../components/HomeHeader";
// 引入HomeContentItem组件
import HomeContentItem from "../../components/HomeContentItem";
export default {
  name: "Home",
  data() {
    return {
      select: 1,
      arrowselect: 1,
      arrowdown: false
    };
  },
  components: {
    HomeHeader,
    HomeContentItem
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      autoplay:{
        delay:2000
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
    new BScroll(".home-nav-container", {
      click: true,
      scrollX: true
    });
  },
  methods: {
    arrowhandle() {
      this.arrowdown = !this.arrowdown;
    }
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
// 引入混合
@import '../../common/stylus/mixins.styl'
.home-container
  width: 100%
  height: 100%
  font-size: 24px
  position: relative
  margin-top: 100px
  background-color: #f4f4f4
  .home-nav-container
    width: 100%
    height: 65px
    position: relative
    overflow: hidden
    background-color: #fff
    .home-nav
      height: 60px
      padding: 0 0 0 30px
      display: flex
      width: 1600px
      .nav-item
        padding: 0 20px
        height: 100%
        line-height: 60px
        text-align: center
        font-size: 28px
        color: #333
      .select
        border-bottom: 4px solid #b4282d
        color: #b4282d
    .arrow
      width: 100px
      height: 70px
      margin: 0 auto
      background-color: #fff
      position: absolute
      right: 0
      top: 0
      z-index: 100
      .arrow-down
        width: 30px
        height: 30px
        background-image: url('./images/arrow-down.png')
        margin: 15px auto
        transition: transform 0.5s linear
        &.active
          transform: rotateZ(180deg)
  .mask
    position: fixed
    top: 100px
    left: 0
    z-index: 99
    height: 100%
    width: 100%
    background-color: rgba(0, 0, 0, 0.3)
    .arrow-top
      div
        line-height: 0.8rem
        padding-left: 0.4rem
        font-size: 0.37333rem
        width: 90%
        background-color: #fff
        height: 60px
        margin-right: 100px
        box-sizing: border-box
    .arrow-list
      width: 100%
      background-color: #fff
      display: flex
      flex-wrap: wrap
      padding: 24px
      .arrow-item
        width: 150px
        height: 56px
        box-sizing: border-box
        margin: 0 0 40px 30px
        color: #333
        border: 1px solid #eee
        text-align: center
        line-height: 56px
        font-size: 26px
        background-color: #fafafa
        font-family: PingFangSC-Light, helvetica, 'Heiti SC'
      .active
        border: 1px solid $red
        color: $red
  .swiper-container
    width: 10rem
    height: 370px
    margin-top: 15px
    padding-top: 15px
    .swiper-wrapper
      .swiper-slide
        img
          width: 10rem
          height: 370px
  .home-desc
    width: 100%
    height: 72px
    display: flex
    justify-content: space-around
    align-items: center
    box-sizing: border-box
    background-color: #fff
    .desc-item
      .icon
        display: inline-block
        width: 36px
        height: 36px
        background-size: contain
        vertical-align: middle
        margin-right: 10px
      .left
        background-image: url('./images/desc/01.png')
      .middle
        background-image: url('./images/desc/02.png')
      .right
        background-image: url('./images/desc/03.png')
  .home-list
    width: 100%
    height: 340px
    display: flex
    flex-wrap: wrap
    background-color: #fff
    .home-list-item
      width: 20%
      height: 50%
      a
        display: flex
        flex-direction: column
        align-items: center
        width: 100%
        height: 100%
        img
          width: 110px
          height: 110px
        span
          color: #333
          margin-top: 10px
  .home-content
    background-color: #eee
    width: 100%
  .home-footer
    background-color: #414141
    width: 100%
    height: 244px
    margin-bottom: 100px
    padding: 54px 20px 28px
    box-sizing: border-box
    position: relative
    .bd
      width: 710px
      height: 62px
      display: flex
      justify-content: center
      margin-bottom: 20px
      .download
        width: 172px
        height: 62px
        border: solid #fff 1px
        color: #fff
        font-size: 24px
        line-height: 62px
        text-align: center
      .app
        margin-right: 30px
    .copyright
      width: 710px
      height: 64px
      color: #999
      text-align: center
      line-height: 36px
    .u-icon-top
      display: inline-block
      width: 112px
      height: 80px
      background-color: #fff
      border-radius: 40px 0 0 40px
      position: absolute
      right: 0px
      top: 30px
      background-image: url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/wapNewUserEntry-b69d0624fd.png') // yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/wapNewUserEntry-b69d0624fd.png)
    .u-icon-bottom
      display: inline-block
      width: 82px
      height: 82px
      border-radius: 50%
      background-color: #fff
      position: absolute
      right: 30px
      bottom: 30px
      background-image: url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goToTop-f502426678.png') // yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goToTop-f502426678.png);
</style>
