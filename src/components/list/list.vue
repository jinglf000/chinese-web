<docs>
  ## list 列表组件
</docs>
<template>
  <div class="list">
    <ul v-if="data.length > 0" class="list-wrap">
      <li v-for="(item, index) in data"
      @click="select(item, index)"
      class="list-item"
      :key="index">{{option ? item[option] : item}}</li>
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
      padding: 30px;
      color: $color-text-base;
      border-bottom: 1px solid #ccc;
      font-size: $font-size-base;
      @include no-wrap();
    }
  }
</style>
