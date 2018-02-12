<docs>
  ## index 首页
</docs>
<template>
  <div class="index">
    <header class="header">语文</header>
    <div class="content-list">
      <list :data="data" @select="listSelect" option="title"></list>
    </div>
  </div>
</template>
<script>
import List from '@/components/list/list';
import { getYears } from '@/api/article';

export default {
  name: 'index',
  components: { List },
  data() {
    return {
      data: []
    };
  },
  methods: {
    // 获取列表
    getList() {
      getYears().then((res) => {
        this.data = res.data;
      }).catch(() => {});
    },
    // 选择处理
    listSelect() {

    }
  },
  created() {
    this.getList();
  }
};
</script>
<style scoped lang="scss">
  @import '~common/scss/variable.scss';
  .header {
    color: $color-theme;
    margin-bottom: $font-size-small;
    font-size: $font-size-ultra-plus;
    padding: 15px 0;
    text-align: center;
  }
</style>
