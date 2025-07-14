const removeFromArray = function (array, ...removeList) {
  return array.filter((item) => !removeList.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
