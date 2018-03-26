<docs>
  ## search
</docs>
<template>
  <div class="search">
    <input type="text" v-model="val" class="input" ref="input"
      @keydown.enter="search" placeholder="请输入标题关键字">
    <svg class="icon s-search" aria-hidden="true" @click="search">
      <use xlink:href="#icon-sousuo"></use>
    </svg>
    <svg class="icon s-close" aria-hidden="true" @click="close">
      <use xlink:href="#icon-guanbi"></use>
    </svg>
  </div>
</template>
<script>
export default {
  name: 'search',
  props: {
    defaultVal: {
      type: String
    },
    status: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      val: ''
    };
  },
  watch: {
    status(val) {
      if (val) {
        this.$nextTick(() => {
          this.$refs.input.focus();
        });
      }
    }
  },
  methods: {
    // 关闭
    close() {
      this.$emit('close', false);
      this.val = '';
    },
    // 查询
    search() {
      if (this.val) {
        this.$emit('search', this.val);
      }
    }
  },
  created() {
    this.val = this.defaultVal;
  }
};
</script>
<style scoped lang="scss">
@import '~@/common/scss/variable.scss';
.search {
  display: flex;
  background-color: $color-input-bg;
  font-size: $font-size-base;
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#40e0d0),
    to(#fff)
  );
  background: linear-gradient(right, #40e0d0, #fff);
  .input {
    flex: 1 1 80%;
    background-color: transparent;
    padding: 30px;
    color: $color-text-title;
    border: none;
  }
  .icon {
    flex: 1 1 10%;
    margin-top: 30px;
    color: #fff;
  }
  .s-search {
    font-size: $font-size-base * 1.2;
    margin-top: 25px;
  }
}
</style>
