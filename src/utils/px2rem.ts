/*
 * @Description: px转rem
 * @Author: Hexon
 * @Date: 2019-12-12 18:57:42
 * @LastEditors: Hexon
 * @LastEditTime: 2019-12-13 10:57:31
 */
/**
 * @description: 将px转换为rem，
 * @param {number}rootValue: 这个值需要根据设计稿
 * @return:
 */
const px2rem = (px: string, rootValue = 32) => {
  try {
    return parseFloat(px) / rootValue + 'rem'
  } catch (e) {
    console.error(e.message)
  }
}

export default px2rem
