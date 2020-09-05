const {
  array1,
  array2,
  array3,
  array4,
  array5,
  array6,
} = require("./testData.js");

/**
 * @function 数组且非空
 * @param {Array} _array
 * @returns Boolean
 */
function notEmpty(_array) {
  if (_array && Array.isArray(_array) && _array.length) {
    return true;
  } else {
    return false;
  }
}

/**
 * @function filter + indexOf
 * @param {Array} _array
 */
function filter_01(_array) {
  if (notEmpty(_array)) {
    return _array.filter((_, i) => {
      return _array.indexOf(_) === i;
    });
  }
}

console.log(filter_01(array1));
console.log(filter_01(array2));
console.log(filter_01(array3));
console.log(filter_01(array4));
console.log(filter_01(array5));
console.log(filter_01(array6));

// * filter + indexOf
// ! {} 无效
// ! 无法识别 NAN类型 array6 有两个NAN 但是返回的数组两个都没了
// * 和一层for循环+indexOf效果一样 
// * array.indexOf(NaN)都是-1 所以不返回NaN