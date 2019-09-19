<template>
  <div class="searchContainer">
    <div class="content">
      <div class="search-input-container">
        <div class="search-input">
          <div class='icon'></div>
          <input type="text" placeholder="女士可机洗毛衫 上新" />
        </div>
        <div class="cancel" @click="toHome">取消</div>
      </div>

      <p>热门搜索</p>
      <ul class="hot-search">
        <li>懒人拖11111111111把</li>
        <li>懒人拖把</li>
        <li>懒人</li>
        <li>懒人拖把111111</li>
        <li>懒人拖把</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toHome (){
      this.$router.push('/home')
    }
  },
};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
// 引入混合
.searchContainer
  width: 100%
  height: 1334px
  background-color: #eee
  .content
    background-color: #fff
    .search-input-container
      box-sizing: border-box
      width: 100%
      height: 88px
      padding: 0 30px
      display: flex
      justify-content: space-around
      align-items: center
      .search-input
        width: 604px
        height: 56px
        background-color: #f4f4f4
        padding 0 20px
        box-sizing border-box
        display flex
        align-items center
        .icon
          background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png')
          width 28px
          height 100%
          background-repeat no-repeat
          background-position center
          margin-right 10px
        input 
          width 520px
          height 39px
          background-color #f4f4f4
          outline none
      .cancel
        font-size: 27px
    p
      width: 100%
      height: 90px
      font-size: 28px
      color: #999
      box-sizing border-box
      padding 20px
    .hot-search
      box-sizing border-box
      width: 100%
      padding 0 30px 30px 30px
      li
        display: inline-block
        box-sizing: border-box
        height: 47px
        margin: 0 30px 32px 0
        border: 1px solid #999
        line-height: 47px
        padding: 0 20px
</style>
