<docs>
  ## 查询结果
</docs>
<template>
  <div class="reuslt">
    <search :default-val="key" @close="inputClose"
    @search="inputSearch"></search>
    <div class="content">
      <ul v-if="list.length > 0">
        <li v-for="(item, index) in list" class="cont-item"
        @click="detail(item)"
        :key="index">
          <h3 class="title">{{item.title}}</h3>
          <p class="text">{{item.text}}</p>
        </li>
      </ul>
      <p class="no-data" v-else>无查询结果</p>
    </div>
  </div>
</template>
<script>
import { search } from '@/api/article';
import Search from '@/components/searchBar/search';

export default {
  name: 'searchResult',
  components: { Search },
  data() {
    return {
      key: '',
      list: []
    };
  },
  methods: {
    // 输入框直接查询
    inputSearch(val) {
      this.key = val;
      this.search();
    },
    // 输入框关闭 ---> 返回首页
    inputClose() {
      this.$router.push({
        name: 'index'
      });
    },
    // 关键字查询
    search() {
      search(this.key)
        .then(res => {
          const list = res.data;
          this.list = list;
        })
        .catch(() => {});
    },
    // 跳转到详情页
    detail(item) {
      this.$router.push({
        name: 'detail',
        params: {
          id: item.id,
          title: item.title
        }
      });
    }
  },
  created() {
    this.key = this.$route.params.key;
    this.search();
  }
};
</script>
<style scoped lang="scss">
@import '~@/common/scss/variable.scss';
.content {
  padding: 10px 30px;
  .cont-item {
    .title {
      font-size: $font-size-large;
      font-weight: bold;
      color: $color-text-title;
      padding: 20px 0;
    }
    .text {
      font-size: $font-size-base;
      color: $color-text-base;
      border-bottom: 1px solid $color-line;
      line-height: 2;
      text-indent: $font-size-base;
    }
  }
}
.no-data {
  text-align: center;
  line-height: 5;
  color: $color-text-placeholder;
}
</style>
