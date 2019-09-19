<template>
  <!-- 头部 -->
  <header class="home-header">
    <a>
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" />
    </a>
    <div class="input" @click="toSearch">
      <i class="search-icon"></i>
      <span class="palceholder">搜索商品，共计233434件好物</span>
    </div>
    <div class="login">登入</div>
  </header>
</template>

<script>
export default {
  methods: {
    toSearch(){
      this.$router.push('/search')
    }
  },
};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.home-header
  padding: 16px 30px
  display: flex
  align-items: center
  justify-content: space-between
  position: fixed
  left: 0
  top: 0
  background-color: #fff
  z-index: 99
  a
    width: 138px
    height: 40px
    margin-right: 20px
    img
      height: 100%
      width: 100%
  .input
    width: 442px
    height: 56px
    background-color: #ededed
    border-radius: 0.10667rem
    display: flex
    align-items: center
    .search-icon
      display: inline-block
      width: 28px
      height: 28px
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png)
      margin: 0 20px
    .palceholder
      line-height: 56px
      color: #666
  .login
    width: 0.98667rem
    height: 0.53333rem
    line-height: 0.53333rem
    text-align: center
    color: #b4282d
    border: 1px solid #b4282d
    border-radius: 0.10667rem
    margin-left: 0.21333rem
    font-size: 0.32rem
</style>
