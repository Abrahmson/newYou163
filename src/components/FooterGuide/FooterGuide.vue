<template>
  <div class="footer-guide">
    <a class="footer-item" href="javascript:;" @click="goto('/home')">
      <div class="icon home-icon-active" :class="{'home-icon':$route.path!=='/home'}"></div>
      <span :class="{active:$route.path==='/home'}">首页</span>
    </a>
    <a class="footer-item" href="javascript:;" @click="goto('/category')">
      <div class="icon category-icon-active" :class="{'category-icon':$route.path!=='/category'}"></div>
      <span :class="{active:$route.path==='/category'}">分类</span>
    </a>
    <a class="footer-item" href="javascript:;" @click="goto('/shiwu')">
      <div class="icon shiwu-icon-active" :class="{'shiwu-icon':$route.path!=='/shiwu'}"></div>
      <span :class="{active:$route.path==='/shiwu'}">识物</span>
    </a>
    <a class="footer-item" href="javascript:;" @click="goto('/shopcart')">
      <div class="icon shopcart-icon-active" :class="{'shopcart-icon':$route.path!=='/shopcart'}"></div>
      <span :class="{active:$route.path==='/shopcart'}">购物车</span>
    </a>
    <a class="footer-item" href="javascript:;" @click="goto('/profile')">
      <div class="icon profile-icon-active" :class="{'profile-icon':$route.path!=='/profile'}"></div>
      <span :class="{active:$route.path==='/profile'}">个人</span>
    </a>
  </div>
</template>


<script>
export default {
  methods: {
    goto(path) {
      if (this.$route.path !== path) {
        this.$router.replace(path);
      }
    }
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
// 引入混合
@import '../../common/stylus/mixins.styl'
.footer-guide
  width: 10rem
  height: 98px
  display: flex
  background-color #fff
  top-border-1px(#ccc)
  position: fixed
  bottom: 0
  .footer-item
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-around
    width: 20%
    height: 100%
    .icon
      width: 40px
      height: 40px
      background-image: url('./images/yanxuan.png')
    .home-icon-active
      background-position: 0 -200px
    .home-icon
      background-position: 0 -250px
    .category-icon-active
      background-position: 0 -100px
    .category-icon
      background-position: 0 -150px
    .shiwu-icon-active
      background-position: 0 -300px
    .shiwu-icon
      background-position: 0 -350px
    .shopcart-icon-active
      background-position: 0 0
    .shopcart-icon
      background-position: 0 -50px
    .profile-icon-active
      background-position: 0 -400px
    .profile-icon
      background-position: 0 -450px
    span
      font-size: 24px
      color: #707070
    .active
      color: $red
</style>
