const sumAll = function (start, end) {
  let sum = 0;

  if (start < 0 || end < 0) return "ERROR";
  if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";

  if (start > end) {
    for (let i = start; i >= end; i--) {
      sum += i;
    }
    return sum;
  }
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
