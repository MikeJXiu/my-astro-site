// scripts/swissRunner.js
const swe = require('swisseph')

// 设置路径
swe.set_ephe_path(__dirname + '/../public/ephe')

// 计算儒略日 & 行星位置
module.exports = function calculatePlanet(utcDate, callback) {
  const { year, month, day, hour } = utcDate
  const jd = swe.swe_julday(year, month, day, hour, swe.GREG_CAL)
  swe.swe_calc_ut(jd, swe.SUN, swe.FLG_SWIEPH, (result) => {
    callback({ jd, planet: result })
  })
}
