import dayjs from 'dayjs';

function isAfterMinDate(date, minDate) {
  return minDate instanceof Date ? dayjs(date).isAfter(dayjs(minDate).subtract(1, "day"), "day") : true;
}

export { isAfterMinDate };
//# sourceMappingURL=is-after-min-date.js.map
