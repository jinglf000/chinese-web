<docs>
  ## list 列表组件
</docs>
<template>
  <div class="list">
    <ul v-if="data.length > 0" class="list-wrap">
      <li v-for="(item, index) in data"
      @click="select(item, index)"
      class="list-item"
      :key="index">
        <p class="text">{{option ? item[option] : item}}</p>
      </li>
    </ul>
    <p v-else class="list-none">暂无数据</p>
  </div>
</template>
<script>
export default {
  name: 'list',
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    option: {
      type: String
    }
  },
  methods: {
    select(item, index) {
      this.$emit('select', { item, index });
    }
  }
};
</script>
<style scoped lang="scss">
  @import '~common/scss/variable.scss';
  @import '~common/scss/mixin.scss';
  .list {
    .list-item {
      margin: 0 36px;
      color: $color-text-title;
      font-size: $font-size-base;
      @include no-wrap();
      &:after {
        content: '';
        display: block;
        height: 1px;
        width: 100%;
        background-color: $color-line;
      }
      .text {
        padding: 36px 0;
      }
    }
    .list-none {
      text-align: center;
      color: $color-text-placeholder;
      line-height: 5;
    }
  }
</style>
