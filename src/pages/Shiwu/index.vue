<template>
  <div class="container">
    <ShiwuHeader>
      <div class="tittle">
      <div :class="{active:select}" @click="select=true , $router.replace('/shiwu/find')">发现</div>
      <div :class="{active:!select}" @click="select=false , $router.replace('/shiwu/expert')">甄选家</div>
    </div>
    </ShiwuHeader>
    <div class="daohang">
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
    </div>
    <div class="content">
     <ShiwuContentItem/>
    </div>
  </div>
</template>

<script>
import ShiwuContentItem from '../../components/ShiwuContentItem';
import BScroll from "better-scroll";
// 引入
export default {
  name: "Shiwu",
  components:{
    ShiwuContentItem
  },
  data() {
    return {
      select: 1
    };
  },
  mounted() {
    new BScroll(".daohang", {
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
.container
  width: 100%
  height 100%
  .daohang
    width: 100%
    height: 80px
    overflow hidden
    .home-nav
      height: 80px
      // display: flex
      // flex-wrap no-wrap
      // overflow hidden
      width: 1600px
      
      .nav-item
        padding: 0 20px
        height: 100%
        line-height: 80px
        text-align: center
        font-size: 31px
        color: #7F7F7F
        display: inline-block
      .select
        border-bottom: 4px solid #b4282d
        color: #b4282d
</style>
