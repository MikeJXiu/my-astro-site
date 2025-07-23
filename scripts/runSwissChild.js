// scripts/runSwissChild.js
const calculatePlanetPositions = require('./astro/calculatePlanetPositions.js');

const args = process.argv.slice(2);
const [year, month, day, hour, minute, timezoneOffset] = args.map(Number);

calculatePlanetPositions({
  year,
  month,
  day,
  hour,
  minute,
  timezoneOffset,
}).then(result => {
  process.stdout.write(JSON.stringify(result));
}).catch(err => {
  console.error('[SwissChild Error]', err);
  process.exit(1);
});
