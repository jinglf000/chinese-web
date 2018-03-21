/**
 * 文章相关的api
 * @author jinglf000
 * ###### Mon Feb 12 16:08:48 CST 2018
 */

import $ from '@/common/js/axios';

// 返回值全局拦截
$.interceptors.response.use(res => {
  const data = res.data;
  const code = parseInt(data.code, 10);
  if (code) {
    return Promise.reject(res);
  }
  return data;
});
/**
 * 获取所有年度分类
 */
export function getYears() {
  return $.get('/api/getList');
}

/**
 * 获取学年分类下所有的课文
 * @param {String} type 学年分类
 * @return {Promise}
 */
export function getYearArts(type) {
  return $.get(`/api/year/${type}`);
}

/**
 * 获取课文详情
 * @param {String} id 课文id
 */
export function getDetail(id) {
  return $.get(`/api/detail/${id}`);
}

/**
 * 关键字查询
 * @param {String} key 关键字
 */
export function search(key) {
  return $.get(`/api/search/${key}`);
}
