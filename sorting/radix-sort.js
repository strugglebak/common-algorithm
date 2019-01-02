/**
 * 基数排序
 * 排序为从小到大
 * 输入的参数是一个包含正整数的一维数组
 * 返回的值也是一个一维数组
 * @param   {Array}  array  [数组]
 * @return  {Array}
 */
function radixSort(array) {
}
function swap(array, preIndex, nextIndex) {
  let temp = array[preIndex];
  array[preIndex] = array[nextIndex];
  array[nextIndex] = temp;

  return array;
}

// test code
let testArray = [];
testArray = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log('testArray: ', testArray);
console.log('bubble sorting...');
testArray = radixSort(testArray);
console.log('end');
console.log('testArray: ', testArray);

