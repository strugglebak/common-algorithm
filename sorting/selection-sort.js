/**
 * 选择排序
 * 排序为从小到大
 * 输入的参数是一个包含正整数的一维数组
 * 返回的值也是一个一维数组
 * @param   {Array}  array  [数组]
 * @return  {Array}
 */
function selectionSort(array) {
  let newArray = [];
  for (let i = 0; i < array.length - 1; ++i) { // 从第 i 个开始
    // 重新对最小值以及最小下标进行赋值
    let minIndex = i;
    let minVal = array[i];
    for (let j = i + 1; j < array.length; ++j) { // 从第 i+1 个开始
      if (array[j] < minVal) {
        minIndex = j; // 记住最小值下标,为交换最准备
        minVal = array[j]; // 啊，中央就决定，你是最小值了!
      }
    }
    // 比完这一轮之后就 swap
    newArray = swap(array, minIndex, i);
  }

  return newArray;
}
function swap(array, preIndex, nextIndex) {
  let temp = array[preIndex];
  array[preIndex] = array[nextIndex];
  array[nextIndex] = temp;

  return array;
}

// // test code
// let testArray = [];
// testArray = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// console.log('testArray: ', testArray);
// console.log('selection sorting...');
// testArray = selectionSort(testArray);
// console.log('end');
// console.log('testArray: ', testArray);
