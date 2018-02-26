import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/components/index/index';
import YearList from '@/components/yearList/yearList';
import YearArts from '@/components/yearArts/yearArts';
import ArtDetail from '@/components/artDetail/artDetail';
import SearchResult from '@/components/searchResult/searchResult';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/list',
      name: 'list',
      component: YearList
    },
    {
      path: '/arts/:type',
      name: 'arts',
      component: YearArts
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: ArtDetail
    },
    {
      path: '/seach/:key',
      name: 'search',
      component: SearchResult
    }
  ],
  /* 滚动行为，路由切换时导航到顶部 */
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  }
});
