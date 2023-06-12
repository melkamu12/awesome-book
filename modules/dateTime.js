import { DateTime } from '../node_modules/luxon/src/luxon.js';

const currentTime = () => {
  const time = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  const timeSection = document.getElementById('time');
  timeSection.innerHTML = time;
};

export default currentTime;
