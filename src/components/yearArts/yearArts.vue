<docs>
  ## 文字列表
</docs>
<template>
  <div class="arts">
    <!-- <header class="header sub-title">{{title}}</header> -->
    <sub-header :title="title"></sub-header>
    <list :data="artList" class="offset-header"
     @select="listSelect" option="title"></list>
  </div>
</template>
<script>
import { getYearArts } from '@/api/article';
import List from '@/components/list/list';
import SubHeader from '@/components/subHeader/subHeader';

export default {
  name: 'yearArts',
  components: { List, SubHeader },
  data() {
    return {
      artList: [],
      title: ''
    };
  },
  methods: {
    // 获取此类别下的文章列表
    getArts() {
      getYearArts(this.$route.params.type)
        .then(res => {
          const list = res.data;
          this.artList = list;
        })
        .catch(() => {});
    },
    // 路由跳转
    listSelect(info) {
      const item = info.item;
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
    this.getArts();
    this.title = this.$route.params.title || '文章列表';
  }
};
</script>
<style scoped lang="scss">
@import '~@/common/scss/variable.scss';
</style>
