<docs>
  ## loading
</docs>
<template>
  <div class="loading" v-show="visible">
    <svg class="icon" aria-hidden="true" >
      <use xlink:href="#icon-qqtang"></use>
    </svg>
    <p class="text" >{{loadingMsg}}</p>
  </div>
</template>
<script>
export default {
  name: 'loading',
  props: {
    loadingMsg: {
      type: String,
      default: '加载中...'
    },
    visible: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style scoped lang="scss">
@import '~common/scss/variable.scss';
.loading {
  padding: $padding-base 0;
  text-align: center;
  .icon {
    animation: rotate 1.2s linear infinite;
    width: 80px;
    height: 80px;
  }
  .text {
    color: $color-text-lable;
    line-height: 2;
    font-size: $font-size-base;
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
