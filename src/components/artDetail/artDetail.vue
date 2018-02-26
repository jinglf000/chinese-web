<docs>
  ## artDetail 文章详情
</docs>
<template>
  <div class="detail">
    <sub-header :title="title"></sub-header>
    <div class="content detail-content offset-header" v-html="text">
    </div>
  </div>
</template>
<script>
import { getDetail } from '@/api/article';
import SubHeader from '@/components/subHeader/subHeader';

export default {
  name: 'artDetail',
  components: { SubHeader },
  data() {
    return {
      title: '',
      text: ''
    };
  },
  methods: {
    // 获取文章详细内容
    getDetail() {
      getDetail(this.$route.params.id).then((res) => {
        if (res.data && res.data.length > 0) {
          const current = res.data[0];
          this.text = current.text;
          this.title = current.title;
        } else {
          this.title = '暂无内容';
          this.text = '似乎没有这篇文章，请重新选择~';
        }
      }).catch(() => {});
    }
  },
  created() {
    const params = this.$route.params;
    if (params.text && params.title) {
      this.text = params.text;
      this.title = params.title;
    } else {
      this.getDetail();
    }
  }
};
</script>
<style scoped lang="scss">
  @import '~@/common/scss/variable.scss';
</style>
