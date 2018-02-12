import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/components/index/index';
import YearList from '@/components/yearList/yearList';
import YearArts from '@/components/yearArts/yearArts';
import ArtDetail from '@/components/artDetail/artDetail';

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
      path: '/arts',
      name: 'arts',
      component: YearArts
    },
    {
      path: '/detail',
      name: 'detail',
      component: ArtDetail
    }
  ],
});
