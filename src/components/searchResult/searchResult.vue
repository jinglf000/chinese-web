<docs>
  ## 查询结果
</docs>
<template>
  <div class="result" ref="result">
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
      <loading :visible="featching"></loading>
      <!-- <p class="no-data" >无查询结果</p> -->
    </div>
  </div>
</template>
<script>
import { search } from '@/api/article';
import Search from '@/components/searchBar/search';
import { serizeBookTitle } from '@/common/js/utils';
import Loading from '@/base/loading/loading';

let ajaxLoading = true;

export default {
  name: 'searchResult',
  components: { Search, Loading },
  data() {
    return {
      key: '',
      page: 1,
      featching: true,
      list: []
    };
  },
  methods: {
    // 输入框直接查询
    inputSearch(val) {
      this.key = val;
      this.search();
      this.$router.replace({
        name: 'search',
        query: {
          key: val
        }
      });
    },
    // 输入框关闭 ---> 返回首页
    inputClose() {
      this.$router.push({
        name: 'index'
      });
    },
    // 关键字查询
    search() {
      if (!ajaxLoading) return;
      ajaxLoading = false;
      search({
        key: this.key,
        page: this.page
      })
        .then(res => {
          if (res.data) {
            const list = res.data.list;
            list.forEach(item => {
              /* eslint-disable no-param-reassign */
              item.title = serizeBookTitle(item.title);
            });
            if (this.list.length === 0) {
              this.list = list;
            } else {
              this.list = this.list.concat(list);
            }
            this.featching = false;
          }
          ajaxLoading = true;
        })
        .catch(() => {
          ajaxLoading = true;
          this.featching = false;
        });
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
    },
    // touch Event Handle
    touchStart(e) {
      const html = document.documentElement;
      this.touchX = e.touches[0].clientY;
      this.docHeight = html.scrollHeight;
      this.winHeight = window.innerHeight;
    },
    touchMove(e) {
      const html = document.documentElement;
      const move = e.touches[0].clientY - this.touchX;
      const docTop = html.scrollTop;
      // console.log(docTop, this.docHeight, this.winHeight);
      if (move < 0 && docTop > this.docHeight - this.winHeight - 20) {
        this.featching = true;
      }
    },
    touchEnd() {
      if (this.featching) {
        this.page += 1;
        this.search();
      }
    }
  },
  created() {
    this.key = this.$route.query.key;
    this.page = this.$route.query.page || 1;
    this.search();
  },
  mounted() {
    window.addEventListener('touchstart', this.touchStart);
    window.addEventListener('touchmove', this.touchMove);
    window.addEventListener('touchend', this.touchEnd);
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
      padding: 25px 0;
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
