<docs>
  ## searchBar 搜索栏
</docs>
<template>
  <transition name="slide">
    <div class="search" v-show="visible">
      <search class="wrapper" @search="search" @close="close"></search>
      <div class="cover"></div>
    </div>
  </transition>
</template>
<script>
import Search from './search';

export default {
  name: 'searchBar',
  components: { Search },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      val: ''
    };
  },
  methods: {
    // 关闭
    close() {
      this.$emit('update:visible', false);
    },
    // 查询
    search(val) {
      this.$emit('search', val);
    }
  }
};
</script>
<style scoped lang="scss">
  @import '~@/common/scss/variable.scss';
  .search {
    position: relative;
    .wrapper {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 2;
    }
    .cover {
      position: fixed;
      z-index: 1;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  // 元素动画
  .search .wrapper,
  .search .cover {
    transition: all ease-in-out .3s;
  }
  // cover
  .slide-enter .cover{
    opacity: 0;
  }
  .slide-enter-to .cover {
    opacity: 1;
  }
  // wrapper
  .slide-enter .wrapper{
    opacity: 0;
    transform: translateY(-30px);
  }
  .slide-enter-active {
    transition: all ease-in-out 3s;
  }
  .slide-enter-to .wrapper {
    opacity: 1;
    transform: translateY(0);
  }
</style>
