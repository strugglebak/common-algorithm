/**
 * 冒泡排序
 * 排序为从小到大
 * 输入的参数是一个包含正整数的一维数组
 * 返回的值也是一个一维数组
 * @param   {Array}  array  [数组]
 * @return  {Array}
 */
function bubbleSort(array) {
  let indexOfLastUnsortedElement = array.length - 1;
  let newArray = [];
  let isSwapped = true;
  while(isSwapped) {
    isSwapped = false;
    for (let i = 0; i < indexOfLastUnsortedElement; ++i) {
      console.log('newArray', newArray);
      if (array[i] > array[i+1]) {
        newArray = swap(array, i, i+1);
        isSwapped = true;
      }
    }
    --indexOfLastUnsortedElement;
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
// testArray = [29,10,14,37,14,11,3,6,49,0];
// console.log('testArray: ', testArray);
// console.log('bubble sorting...');
// testArray = bubbleSort(testArray);
// console.log('end');
// console.log('testArray: ', testArray);

