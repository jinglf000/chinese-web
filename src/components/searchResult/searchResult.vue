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
          <p class="text">{{serizeText(item.text)}}</p>
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
      search(this.key).then((res) => {
        this.list = res.data;
      }).catch(() => {});
    },
    // 对返回值进行处理
    serizeText(str) {
      const reg = /(<[^><]+>)|(\\n)|(\\r)/g;
      const normalStr = str.replace(reg, '');
      return normalStr.length > 30 ? `${normalStr.substr(0, 45)}...` : normalStr;
    },
    // 跳转到详情页
    detail(item) {
      this.$router.push({
        name: 'detail',
        params: {
          id: item.id,
          text: item.text,
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
    color: $color-text-placeholder;
  }
</style>
