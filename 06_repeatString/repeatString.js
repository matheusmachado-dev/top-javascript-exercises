const repeatString = function (str, num) {
  if (num >= 0) {
    let repeatedString = "";
    for (let i = 0; i < num; i++) {
      repeatedString += str;
    }
    return repeatedString;
  }
  return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
