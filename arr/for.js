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
 * @function 双层for循环+splice
 * @description TODO: 时间和空间复杂度是多少
 * @param {Array} _array
 */
function for_01(_array) {
  if (notEmpty(_array)) {
    for (let i = 0; i < _array.length; i++) {
      for (let j = i + 1; j < _array.length; j++) {
        if (_array[i] === _array[j]) {
          _array.splice(j, 1);
          j--;
        }
      }
    }
    return _array;
  }
}

// console.log(for_01(array1));
// console.log(for_01(array2));
// console.log(for_01(array3));
// console.log(for_01(array4));
// console.log(for_01(array5));
// console.log(for_01(array6));
// * 双层for循环+splice
// ! {} 无效
// ! 无法过滤两个相同的 NAN 类型

/**
 * @function 一层for循环+indexOf
 * @description TODO: 时间和空间复杂度是多少
 * @param {Array} _array
 */
function for_02(_array) {
  if (notEmpty(_array)) {
    let r = [];
    for (let i = 0; i < _array.length; i++) {
      if (_array.indexOf(_array[i]) === i) {
        r.push(_array[i]);
      }
    }
    return r;
  }
}

// console.log(for_02(array1));
// console.log(for_02(array2));
// console.log(for_02(array3));
// console.log(for_02(array4));
// console.log(for_02(array5));
// console.log(for_02(array6));
// * 一层for循环+indexOf
// ! {} 无效
// ! 无法识别 NAN类型 array6 有两个NAN 但是返回的数组两个都没了
