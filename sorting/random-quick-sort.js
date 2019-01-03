/**
 * 随机快速排序
 * 从数列中随机挑出一个元素，称为“基准”（pivot），
 * 重新排序数列，所有比基准值小的元素摆放在基准前面，所有比基准值大的元素摆在基准后面（相同的数可以到任何一边）
 * 在这个分割结束之后，该基准就处于数列的中间位置。这个称为分割（partition）操作。
 * 递归地（recursively）把小于基准值元素的子数列和大于基准值元素的子数列排序
 * 排序为从小到大
 * 输入的参数是一个包含正整数的一维数组
 * 返回的值也是一个一维数组
 * @param   {Array}   array           [数组]
 * @param   {Number}  pivotIndex      [基准数下标]
 * @param   {Number}  rightMostIndex  [右边最远下标]
 * @return  {Array}
 */
function randomQuickSort(array, pivotIndex, rightMostIndex) {
  // array: [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
  // index:  0  1   2   3  4   5   6   7   8   9  10  11 12  13  14

  if (!array) return null;

  if (pivotIndex >= rightMostIndex) {
    return;
  }

  // 这里随机选择一个基准数 pivot
  let pivot = getRandomIntInclusive(pivotIndex, rightMostIndex);

  let storeIndex = pivotIndex;
  for (let i = pivotIndex + 1; i <= rightMostIndex; ++i) {        // 向右找
    if (array[i] < array[pivot]) {                                // 若找到一个比基准数还小的数
      array = swap(array, i, ++storeIndex);                       // 与这个数交换
    }
  }
  array = swap(array, pivot, storeIndex);                         // 快排一个小于基准数的子集合已经弄在一起了，但还是需要交换顺序

  quickSort(array, pivotIndex, storeIndex - 1);                   // 现在可以递归了
  quickSort(array, storeIndex + 1, rightMostIndex);

  return array;
}

function swap(array, preIndex, nextIndex) {
  let temp = array[preIndex];
  array[preIndex] = array[nextIndex];
  array[nextIndex] = temp;

  return array;
}
// 得到一个两数之间的随机整数(包括这两个数)
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

// test code
// let testArray = [];
// testArray = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// console.log('testArray: ', testArray);
// console.log('random quick sorting...');
// testArray = randomQuickSort(testArray, 0, testArray.length - 1);
// console.log('end');
// console.log('testArray: ', testArray);
