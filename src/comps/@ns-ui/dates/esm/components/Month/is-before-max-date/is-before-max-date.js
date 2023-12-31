import dayjs from 'dayjs';

function isBeforeMaxDate(date, maxDate) {
  return maxDate instanceof Date ? dayjs(date).isBefore(dayjs(maxDate).add(1, "day"), "day") : true;
}

export { isBeforeMaxDate };
//# sourceMappingURL=is-before-max-date.js.map
