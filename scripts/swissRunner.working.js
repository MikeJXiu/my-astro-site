const path = require('path');
const swe = require('swisseph');

const [, , yearStr, monthStr, dayStr, hourStr, minuteStr, tzStr] = process.argv;
const year = parseInt(yearStr), month = parseInt(monthStr), day = parseInt(dayStr);
const hour = parseInt(hourStr), minute = parseInt(minuteStr), tz = parseFloat(tzStr);
const utcH = hour + minute / 60 - tz;
console.log('✅ 开始 swissRunner');
console.log(`🕒 UTC 时间 = ${year}-${month}-${day} ${utcH}h`);

const ephPath = path.resolve(__dirname, '../public/ephe');
swe.swe_set_ephe_path(ephPath);
console.log('📁 星历路径已设置为:', ephPath);

swe.swe_julday(year, month, day, utcH, swe.SE_GREG_CAL, (jd_ut) => {
  console.log('📅 JD（UTC儒略日）=', jd_ut);
  const flag = swe.SEFLG_SPEED | swe.SEFLG_SWIEPH;
  swe.swe_calc_ut(jd_ut, swe.SE_SUN, flag, (body) => {
    if (body.error) {
      console.error('🌑 计算出错:', body.error);
    } else {
      console.log('🌞 太阳位置 =', body);
    }
    swe.swe_close();
  });
});
