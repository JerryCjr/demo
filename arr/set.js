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
 * @function 数组去重 利用 ES6 Set
 * @param {Array} _array
 */
function unique_set_01(_array) {
  if (notEmpty(_array)) {
    return Array.from(new Set(_array));
  }
}

/**
 * @function 数组去重 利用 ES6 Set
 * @param {Array} _array
 */
function unique_set_02(_array) {
  if (notEmpty(_array)) {
    return [...new Set(_array)];
  }
}

console.log(unique_set_01(array1));
console.log(unique_set_01(array2));
console.log(unique_set_01(array3));
console.log(unique_set_01(array4));
console.log(unique_set_01(array5));
console.log(unique_set_01(array6));

// console.log(unique_set_02(array1));
// console.log(unique_set_02(array2));
// console.log(unique_set_02(array3));
// console.log(unique_set_02(array4));
// console.log(unique_set_02(array5));
// console.log(unique_set_02(array6));

// ! ES6 Set去重
// ! 代码量最少， 但是无法去除{}空对象 也无法去除掉有相同键值的对象
// ! 对 null undefined NaN 是有效的
