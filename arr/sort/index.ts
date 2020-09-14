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

  let i = 0;

  while (i < arr.length - 1) {
    for (let j = i + 1; j < arr.length; j++) {
      const temp = arr[i];
      if (arr[i] < arr[j]) {
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    i++;
  }

  console.log(arr);
  return arr;
}

selectSort([1, 21, 32, 4, 2, 0, 0, 9]);
