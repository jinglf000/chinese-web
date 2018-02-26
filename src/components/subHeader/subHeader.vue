<docs>
  ## 子标题
</docs>
<template>
  <header class="header">
    <svg class="icon header-return" aria-hidden="true" @click="search">
      <use xlink:href="#icon-fanhui"></use>
    </svg>
    <p class="text">{{title}}</p>
    <svg class="icon header-home" aria-hidden="true" @click="goHome">
      <use xlink:href="#icon-shouye"></use>
    </svg>
  </header>
</template>
<script>
export default {
  name: 'subHeader',
  props: {
    title: {
      type: String,
      default: '标题'
    }
  },
  methods: {
    // 返回首页
    goHome() {
      this.$router.push({ name: 'index' });
    },
    // 搜索
    search() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped lang="scss">
  @import '~@/common/scss/variable.scss';
  /* 子标题 */
  .header {
    position: relative;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    padding-bottom: 20px;
    font-size: $font-size-base;
    color: $color-theme;
    .text {
      text-align: center;
      padding: 40px 15px 15px;
      font-weight: bold;
    }
    .icon {
      font-size: $font-size-ultra-plus;
      position: absolute;
    }
    .header-home {
      top: 30px;
      right: 30px;
    }
    .header-return {
      font-size: $font-size-ultra;
      left: 30px;
      top: 40px;
    }
  }
</style>
