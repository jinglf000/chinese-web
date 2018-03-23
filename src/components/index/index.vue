<docs>
  ## index 首页
</docs>
<template>
  <div class="index">
    <header class="header">
      <span>中学语文</span>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-hashiqi-theme"></use>
      </svg>
      <svg class="icon header-search" aria-hidden="true" @click="handleSearch">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </header>
    <div class="content-list">
      <list :data="data" @select="listSelect" option="title"></list>
    </div>
    <search-bar :visible.sync="visibleSearch" @search="searchResult"></search-bar>
  </div>
</template>
<script>
import List from '@/components/list/list';
import SearchBar from '@/components/searchBar/searchBar';
import { getYears } from '@/api/article';

export default {
  name: 'index',
  components: { List, SearchBar },
  data() {
    return {
      data: [],
      visibleSearch: false
    };
  },
  methods: {
    // 获取列表
    getList() {
      getYears()
        .then(res => {
          const list = res.data;
          this.data = list;
        })
        .catch(() => {});
    },
    // 列表选择处理
    listSelect(info) {
      this.$router.push({
        name: 'arts',
        params: {
          type: info.item.id,
          title: info.item.title
        }
      });
    },
    // 搜索框显隐
    handleSearch() {
      this.visibleSearch = true;
    },
    // 搜索结果
    searchResult(val) {
      this.$router.push({
        name: 'search',
        query: { key: val }
      });
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
  margin-bottom: $font-size-small / 2;
  font-size: $font-size-ultra-plus;
  padding: 15px 0;
  text-align: center;
  position: relative;
  .header-search {
    position: absolute;
    top: 20px;
    right: 30px;
  }
}
</style>
