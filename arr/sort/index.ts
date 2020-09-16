// * 稳定排序

// 原数组中存在有元素相等的情况, eg: [1, 1, 1, 4, 2, 7]中 a[0], a[1], a[2]的值是相等的, 所在的下标为0, 1, 2
// 排序后数组为 [1, 1, 1, 2, 4, 7], a[0], a[1], a[2]的下标依旧保持不变
// 这种就被称为稳定排序

// * 稳定排序有哪些

// 冒泡排序
// 选择排序

// 插入排序
// 基数排序
// 归并排序
// 技术排序

// * 非稳定排序

// 快速排序
// 希尔排序
// 简单选择排序
// 堆排序

/**
 * @function 冒泡排序
 * @param arr
 */
function bubbleSort(arr: number[]): number[] {
  // // * 兩個for循環
  // for (let i = 0; i < arr.length - 1; i++) {
  //   for (let j = 0; j < arr.length - 1 - i; j++) {
  //     if (arr[j] > arr[j + 1]) {
  //       const temp = arr[j + 1];
  //       arr[j + 1] = arr[j];
  //       arr[j] = temp;
  //     }
  //   }
  // }

  // 优化点: 每次循环中 如果发现没有可排序的元素 说明顺序已经是符合要求的 可以跳出了 不需要全部都循环一遍
  // for (let i = 0; i < arr.length - 1; i++) {
  //   let flag = true;
  //   for (let j = 0; j < arr.length - 1 - i; j++) {
  //     if (arr[j] > arr[j + 1]) {
  //       const temp = arr[j + 1];
  //       arr[j + 1] = arr[j];
  //       arr[j] = temp;
  //       flag = false;
  //       continue;
  //     }
  //   }
  //   if (flag) {
  //     // 以 [1, 21, 32, 4, 2, 0, 0, 9] 为例,排序过程
  //     // [1, 21, 4, 2, 0, 0, 9, 32];
  //     // [1, 4, 2, 0, 0, 9, 21, 32];
  //     // [1, 2, 0, 0, 4, 9, 21, 32];
  //     // [1, 0, 0, 2, 4, 9, 21, 32];
  //     // [0, 0, 1, 2, 4, 9, 21, 32];
  //     console.log("顺序ok i", i); // 此刻i = 5
  //     console.log(
  //       "意味着第 i + 1, 即第6次的时候跳出了循环, 得到了符合标准的排序"
  //     );
  //     break;
  //   }
  // }

  // // 一個while 一個for循環 本質是一樣的
  // let i = 0;
  // while (i < arr.length - 1) {
  //   for (let j = 0; j < arr.length - 1 - i; j++) {
  //     if (arr[j] > arr[j + 1]) {
  //       const temp = arr[j + 1];
  //       arr[j + 1] = arr[j];
  //       arr[j] = temp;
  //     }
  //   }
  //   i++;
  // }

  // // 一個while 一個for循環 本質是一樣的
  // let i = 0;
  // while (i < arr.length - 1) {
  //   let flag = true;
  //   for (let j = 0; j < arr.length; j++) {
  //     if (arr[j] > arr[j + 1]) {
  //       const temp = arr[j + 1];
  //       arr[j + 1] = arr[j];
  //       arr[j] = temp;
  //       flag = false;
  //       continue;
  //     }
  //   }
  //   if (flag) {
  //     console.log("顺序ok i", i);
  //     break;
  //   }
  //   i++;
  // }

  console.log(arr);
  return arr;
}

// bubbleSort([1, 2, 3, 4, 5]);
// bubbleSort([1, 21, 32, 4, 2, 0, 0, 9]);

/**
 * @function 选择排序
 * @description 以由大到小的顺序进行排序
 */
function selectSort(arr: number[]): number[] {
  // for (let i = 0; i < arr.length - 1; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] < arr[j]) {
  //       const temp = arr[i];
  //       arr[i] = arr[j];
  //       arr[j] = temp;
  //     }
  //   }
  // }

  // let i = 0;

  // while (i < arr.length - 1) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     const temp = arr[i];
  //     if (arr[i] < arr[j]) {
  //       arr[i] = arr[j];
  //       arr[j] = temp;
  //     }
  //   }
  //   i++;
  // }

  console.log(arr);
  return arr;
}

// selectSort([1, 21, 32, 4, 2, 0, 0, 9]);

/**
 * @function 插入排序
 * @description 类似玩扑克牌
 * @param {number[]} arr
 * @returns {number[]} 返回有小到大排序的数组
 */
function insertionSort(arr: number[]): number[] {
  // // 思路大概是： 先找一个临时数组， 存原始数组的第一个值
  // // 循环原始数组的剩余值 正序
  // // 嵌套循环为当前临时数组 倒序
  // // 像整理手里的扑克牌一样，
  // // 因为是倒序比较，情况一：  如果比临时数组的最后一个数（下标length-1）还大，就直接排到最后一位，
  // // 因为是倒序比较，情况二：  如果比临时数组的第一个数 (下标0) 还小，就直接排到第一位
  // // 因为是倒序比较，情况三：  如果不属于上述两种情况，就依次比较 找到合适的位置插入 （比如比5小 但是比3大 就插入到3和5之间）

  // const returnArr = [arr[0]];

  // for (let i = 1; i < arr.length; i++) {
  //   let flag = false;
  //   for (let j = returnArr.length - 1; j >= 0; j--) {
  //     if (arr[i] >= returnArr[j]) {
  //       if (flag) {
  //         // 情况三 这时候找到了较小的那个数 即举例中的3， 插入到3后面
  //         returnArr.splice(j + 1, 0, arr[i]);
  //       } else {
  //         // 情况一
  //         returnArr.push(arr[i]);
  //       }
  //       break;
  //     } else {
  //       // 情况二
  //       if (j === 0) {
  //         returnArr.unshift(arr[i]);
  //       } else {
  //         // 标志位表示属于 情况三
  //         flag = true;
  //       }
  //     }
  //   }
  // }

  // console.log(returnArr);
  // return returnArr;

  // // 如果不用中间量承接呢？
  // // !不建议用这个方法， 有点繁琐， 相比后面那个显得很鸡肋
  // // 倒序数组部分：首次只有一个值
  // // 正序数组部分：从下标1开始
  // // 情况一： _该正序数组元素_ 大于 倒序数组的最后一个元素（ length -1 ）， break
  // // 情况二： _该正序数组元素_ 小于 倒序数组的第一个元素（ 0 ）原始数组在下标为0的地方新增一个元素（_该正序数组元素_），随后把_该正序数组元素_从当前位置移除
  // // 情况三： _该正序数组元素_ 小于 倒序数组的最后一个元素（ length -1 ）, 但是大于 倒序数组的第一个元素，找到合适的位置并插入， 还需要把正序数组位置的元素移除

  // for (let i = 1; i < arr.length; i++) {
  //   let flag = false;
  //   for (let j = i - 1; j >= 0; j--) {
  //     if (arr[i] < arr[j]) {
  //       if (j === 0) {
  //         arr.splice(j, 0, arr[i]);
  //         arr.splice(i + 1, 1);
  //         break;
  //       } else {
  //         flag = true;
  //       }
  //     } else {
  //       if (!flag) {
  //         break;
  //       }
  //       arr.splice(j + 1, 0, arr[i]);
  //       arr.splice(i + 1, 1);
  //       break;
  //     }
  //   }
  // }

  // // * 下面的解法和思路更切合一点
  // // 倒序数组部分：首次只有一个值
  // // 正序数组部分：从下标1开始
  // // * 情况一：
  // // _该正序数组元素_ 大于等于 倒序数组的最后一个元素（ 下标 length -1 ）
  // // 操作：break
  // // * 情况二：
  // // _该正序数组元素_ 小于等于 倒序数组的第一个元素（ 下标 0 ）
  // // 操作：原始数组在（ 下标为0 ）的地方新增一个元素（ _该正序数组元素_ ），随后把该元素（ _该正序数组元素_ ）从当前位置移除
  // // * 情况三：
  // // _该正序数组元素_ 大于第一个元素 小于最后一个元素
  // // 操作：排除了上面的情况以后，倒序循环的情况下， 只要 _该正序数组元素_ 大于等于 某个 _倒序数组元素_, 即可插入到 _倒序数组元素_ 之前，并删除 _该正序数组元素_

  // for (let i = 1; i < arr.length; i++) {
  //   for (let j = i - 1; j >= 0; j--) {
  //     if (j === 0 && arr[i] <= arr[j]) {
  //       arr.splice(0, 0, arr[i]);
  //       arr.splice(i + 1, 1);
  //       break;
  //     }

  //     if (j === i - 1 && arr[i] >= arr[j]) {
  //       break;
  //     }

  //     if (arr[i] >= arr[j]) {
  //       arr.splice(j + 1, 0, arr[i]);
  //       arr.splice(i + 1, 1);
  //       break;
  //     }
  //   }
  // }

  // ?据说能改进为二分法

  console.log(arr);
  return arr;
}

// insertionSort([1, 21, 32, 4, 2, 0, 0, 9]);
