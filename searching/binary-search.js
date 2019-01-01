/**
 * 二分查找算法
 * 方式是递归查找
 * @param   {Array}  array  [数组]
 * @param   {Number} low    [起始下标]
 * @param   {Number} high   [终点下标]
 * @param   {Number} target [查找目标数]
 * @return  {Number} mid    [查找到的数对应的下标]
 */
function binarySearch(array, low, high, target) {
  if (low > high)
    return -1;
  var mid = parseInt((high + low) / 2);
  if (array[mid] > target)
    return binarySearch(array, low, mid - 1, target);
  if (array[mid] < target)
    return binarySearch(array, mid + 1, high, target);
  return mid;
}

// test code
// let testArray = [];
// testArray = [1, 3, 4, 6, 7, 8, 10, 36, 67, 88, 100];
// console.log('testArray: ', testArray);
// console.log('binary sorting...');
// let ret = binarySearch(testArray, 0, testArray.length, 36);
// console.log('end');
// console.log('ret: ', ret);
