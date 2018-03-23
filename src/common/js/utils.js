/**
 * utils
 * @author jinglf000
 * ###### Fri Mar 23 09:35:02 CST 2018
 */

/**
 * 去除文章标题的书名号
 * @param {String} str 书名
 * @return {String}
 */
exports.serizeBookTitle = str => {
  let res = str;
  const l = '《';
  const r = '》';
  if (res.indexOf(l) === 0) {
    res = res.substring(1);
  }
  if (res.lastIndexOf(r) === res.length - 1) {
    res = res.substring(0, res.length - 1);
  }
  return res;
};
