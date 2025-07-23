// scripts/astro/calculatePlanetPositions.js
const path = require('path');
const swe = require('swisseph');

const planets = [
  swe.SE_SUN,
  swe.SE_MOON,
  swe.SE_MERCURY,
  swe.SE_VENUS,
  swe.SE_MARS,
  swe.SE_JUPITER,
  swe.SE_SATURN,
  swe.SE_URANUS,
  swe.SE_NEPTUNE,
  swe.SE_PLUTO,
];

swe.swe_set_ephe_path(path.resolve(__dirname, '../../public/ephe'));

function calculatePlanetPositions({ year, month, day, hour, minute, timezoneOffset }) {
  const utcHour = hour + minute / 60 - timezoneOffset;

  return new Promise((resolve, reject) => {
    swe.swe_julday(year, month, day, utcHour, swe.SE_GREG_CAL, (jd_ut) => {
      const flag = swe.SEFLG_SWIEPH | swe.SEFLG_SPEED;
      const results = [];

      let completed = 0;

      planets.forEach((planetId, index) => {
        swe.swe_calc_ut(jd_ut, planetId, flag, (result) => {
          if (result.error) {
            reject(new Error(`计算星体 ${planetId} 错误: ${result.error}`));
            return;
          }

          results.push({
            planetId,
            longitude: result.longitude,
            speed: result.speed,
          });

          completed++;

          if (completed === planets.length) {
            resolve({ jd_ut, results });
          }
        });
      });
    });
  });
}

module.exports = calculatePlanetPositions;
