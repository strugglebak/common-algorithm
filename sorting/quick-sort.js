/**
 * 快速排序
 * 从数列中挑出一个元素，称为“基准”（pivot），
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
function quickSort(array, pivotIndex, rightMostIndex) {
  // array: [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
  // index:  0  1   2   3  4   5   6   7   8   9  10  11 12  13  14

  if (!array) return null;

  if (pivotIndex >= rightMostIndex) {
    return;
  }

  // 设置基准数(上面数组的 3 为基准数, 下标为 0)
  // 此时 pivotIndex = 0
  //      pivot = 0
  let pivot = pivotIndex;

  // 先存一下基准下标
  // 此时 pivotIndex = 0
  //      storageIndex = 0
  let storeIndex = pivotIndex;
  for (let i = pivotIndex + 1; i <= rightMostIndex; ++i) {        // 向右找
    // 此时 i = 9
    //      pivot = 0
    //      array[i] = 2
    //      array[pivot] = 3
    if (array[i] < array[pivot]) {                                // 若找到一个比基准数还小的数
      // 此时 storeIndex = 1
      //      i = 9
      // 所以这里是 array 中 *2* 与 *44* 交换位置
      array = swap(array, i, ++storeIndex);                       // 与这个数交换
    }
  }
  // 此时 pivot = 0
  //      storeIndex = 1
  // 所以这里是 array 中 *3* 与 *2* 交换位置
  array = swap(array, pivot, storeIndex);                         // 快排一个小于基准数的子集合已经弄在一起了，但还是需要交换顺序

  // 此时，参数传递为
  // quickSort(array, 0, 0);
  quickSort(array, pivotIndex, storeIndex - 1);                   // 现在可以递归了

  //此时的 array 为
  // [2, 3, 38, 5, 47, 15, 36, 26, 27, 44, 46, 4, 19, 50, 48]
  // 即现在以 *38* 为基准，分开两个 partition 进行快排

  // 此时，参数传递为
  // quickSort(array, 2, 14);
  quickSort(array, storeIndex + 1, rightMostIndex);

  return array;
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
// console.log('quick sorting...');
// testArray = quickSort(testArray, 0, testArray.length - 1);
// console.log('end');
// console.log('testArray: ', testArray);
