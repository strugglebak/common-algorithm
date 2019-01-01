/**
 * 插入排序
 * 排序为从小到大
 * 输入的参数是一个包含正整数的一维数组
 * 返回的值也是一个一维数组
 * @param   {Array}  array  [数组]
 * @return  {Array}
 */
function insertionSort(array) {
  let val = 0;
  let j = 0;
  for (let i = 1; i < array.length; ++i) { // 数组第一个默认排序好
    // 取出元素 X
    val = array[i];
    for (j = i - 1; j >= 0 && (array[j] > val); --j) { // 已经排好序的前面的数列倒着与元素 X 比较
      // 先让排好序的元素后移
      array[j+1] = array[j];
    }
    // 让元素 X 插到前面去
    array[j+1] = val;
  }
  return array;
}

// // test code
// let testArray = [];
// testArray = [44,3,38,5,47,15,36,26,27,2,46,4,19,50,48];
// console.log('testArray: ', testArray);
// console.log('insertion sorting...');
// testArray = insertionSort(testArray);
// console.log('end');
// console.log('testArray: ', testArray);
