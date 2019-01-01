/**
 * 插入排序
 * 排序为从小到大
 * 输入的参数是一个包含正整数的一维数组
 * 返回的值也是一个一维数组
 * @param   {Array}  array  [数组]
 * @return  {Array}
 */
function mergeSort(array) {

  if (array.length === 1) {
    return array;
  }

  // 将数组分成两半
  let n = parseInt(array.length / 2);
  let left = array.slice(0, n);
  let right = array.slice(n);

  // 递归排序
  left = mergeSort(left);
  right = mergeSort(right);

  // 将数组左半边和右半边合并
  return merge(left, right);
}
function merge(left, right) {
  let final = [];
  while (left.length && right.length) {
    // 依次取出最小放到 final 里面
    final.push(left[0] <= right[0] ? left.shift() : right.shift());
  }
  // 剩下的 left.concat(right) 的值就是最大的
  // 然后再 final.concat(left.concat(right)) 将最后的这个最大数连接起来
  return final.concat(left.concat(right));
}

// // test code
// let testArray = [];
// testArray = [44,3,38,5,47,15,36,26,27,2,46,4,19,50,48];
// console.log('testArray: ', testArray);
// console.log('merge sorting...');
// testArray = mergeSort(testArray);
// console.log('end');
// console.log('testArray: ', testArray);

/* 以下是关于 merge 函数的打印栈
 *
 * testArray:  [ 44, 3, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48 ]
 * merge sorting...
 *
 * merge start --------------------------------------------
 * start left  [ 3 ]
 * start right  [ 38 ]
 * final [ 3 ]
 * end left []
 * end right [ 38 ]
 * left.concat.(right) [ 38 ]
 * final.concat(left.concat(right) [ 3, 38 ]
 * ---------------------------------------------- merge end
 *
 *  merge start --------------------------------------------
 *  start left  [ 44 ]
 *  start right  [ 3, 38 ]
 *  final [ 3 ]
 *  final [ 3, 38 ]
 *  end left [ 44 ]
 *  end right []
 *  left.concat.(right) [ 44 ]
 *  final.concat(left.concat(right) [ 3, 38, 44 ]
 *  ---------------------------------------------- merge end
 *
 *  merge start --------------------------------------------
 *  start left  [ 5 ]
 *  start right  [ 47 ]
 *  final [ 5 ]
 *  end left []
 *  end right [ 47 ]
 *  left.concat.(right) [ 47 ]
 *  final.concat(left.concat(right) [ 5, 47 ]
 *  ---------------------------------------------- merge end
 *
 *  merge start --------------------------------------------
 *  start left  [ 15 ]
 *  start right  [ 36 ]
 *  final [ 15 ]
 *  end left []
 *  end right [ 36 ]
 *  left.concat.(right) [ 36 ]
 *  final.concat(left.concat(right) [ 15, 36 ]
 *  ---------------------------------------------- merge end
 *
 *  merge start --------------------------------------------
 *  start left  [ 5, 47 ]
 *  start right  [ 15, 36 ]
 *  final [ 5 ]
 *  final [ 5, 15 ]
 *  final [ 5, 15, 36 ]
 *  end left [ 47 ]
 *  end right []
 *  left.concat.(right) [ 47 ]
 *  final.concat(left.concat(right) [ 5, 15, 36, 47 ]
 *  ---------------------------------------------- merge end
 *
 *  merge start --------------------------------------------
 *  start left  [ 3, 38, 44 ]
 *  start right  [ 5, 15, 36, 47 ]
 *  final [ 3 ]
 *  final [ 3, 5 ]
 *  final [ 3, 5, 15 ]
 *  final [ 3, 5, 15, 36 ]
 *  final [ 3, 5, 15, 36, 38 ]
 *  final [ 3, 5, 15, 36, 38, 44 ]
 *  end left []
 *  end right [ 47 ]
 *  left.concat.(right) [ 47 ]
 *  final.concat(left.concat(right) [ 3, 5, 15, 36, 38, 44, 47 ]
 *  ---------------------------------------------- merge end
 *
 *  merge start --------------------------------------------
 *  start left  [ 26 ]
 *  start right  [ 27 ]
 *  final [ 26 ]
 *  end left []
 *  end right [ 27 ]
 *  left.concat.(right) [ 27 ]
 *  final.concat(left.concat(right) [ 26, 27 ]
 *  ---------------------------------------------- merge end
 *
 *  merge start --------------------------------------------
 *  start left  [ 2 ]
 *  start right  [ 46 ]
 *  final [ 2 ]
 *  end left []
 *  end right [ 46 ]
 *  left.concat.(right) [ 46 ]
 *  final.concat(left.concat(right) [ 2, 46 ]
 *  ---------------------------------------------- merge end
 *
 *  merge start --------------------------------------------
 *  start left  [ 26, 27 ]
 *  start right  [ 2, 46 ]
 *  final [ 2 ]
 *  final [ 2, 26 ]
 *  final [ 2, 26, 27 ]
 *  end left []
 *  end right [ 46 ]
 *  left.concat.(right) [ 46 ]
 *  final.concat(left.concat(right) [ 2, 26, 27, 46 ]
 *  ---------------------------------------------- merge end
 *
 *  merge start --------------------------------------------
 *  start left  [ 4 ]
 *  start right  [ 19 ]
 *  final [ 4 ]
 *  end left []
 *  end right [ 19 ]
 *  left.concat.(right) [ 19 ]
 *  final.concat(left.concat(right) [ 4, 19 ]
 *  ---------------------------------------------- merge end
 *
 *  merge start --------------------------------------------
 *  start left  [ 50 ]
 *  start right  [ 48 ]
 *  final [ 48 ]
 *  end left [ 50 ]
 *  end right []
 *  left.concat.(right) [ 50 ]
 *  final.concat(left.concat(right) [ 48, 50 ]
 *  ---------------------------------------------- merge end
 *
 *  merge start --------------------------------------------
 *  start left  [ 4, 19 ]
 *  start right  [ 48, 50 ]
 *  final [ 4 ]
 *  final [ 4, 19 ]
 *  end left []
 *  end right [ 48, 50 ]
 *  left.concat.(right) [ 48, 50 ]
 *  final.concat(left.concat(right) [ 4, 19, 48, 50 ]
 *  ---------------------------------------------- merge end
 *
 *  merge start --------------------------------------------
 *  start left  [ 2, 26, 27, 46 ]
 *  start right  [ 4, 19, 48, 50 ]
 *  final [ 2 ]
 *  final [ 2, 4 ]
 *  final [ 2, 4, 19 ]
 *  final [ 2, 4, 19, 26 ]
 *  final [ 2, 4, 19, 26, 27 ]
 *  final [ 2, 4, 19, 26, 27, 46 ]
 *  end left []
 *  end right [ 48, 50 ]
 *  left.concat.(right) [ 48, 50 ]
 *  final.concat(left.concat(right) [ 2, 4, 19, 26, 27, 46, 48, 50 ]
 *  ---------------------------------------------- merge end
 *
 *  merge start --------------------------------------------
 *  start left  [ 3, 5, 15, 36, 38, 44, 47 ]
 *  start right  [ 2, 4, 19, 26, 27, 46, 48, 50 ]
 *  final [ 2 ]
 *  final [ 2, 3 ]
 *  final [ 2, 3, 4 ]
 *  final [ 2, 3, 4, 5 ]
 *  final [ 2, 3, 4, 5, 15 ]
 *  final [ 2, 3, 4, 5, 15, 19 ]
 *  final [ 2, 3, 4, 5, 15, 19, 26 ]
 *  final [ 2, 3, 4, 5, 15, 19, 26, 27 ]
 *  final [ 2, 3, 4, 5, 15, 19, 26, 27, 36 ]
 *  final [ 2, 3, 4, 5, 15, 19, 26, 27, 36, 38 ]
 *  final [ 2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44 ]
 *  final [ 2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46 ]
 *  final [ 2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47 ]
 *  end left []
 *  end right [ 48, 50 ]
 *  left.concat.(right) [ 48, 50 ]
 *  final.concat(left.concat(right) [ 2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50 ]
 *  ---------------------------------------------- merge end
 *  end
 *  testArray:  [ 2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50 ]
 *
 * */
