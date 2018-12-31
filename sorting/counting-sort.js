/**
 * 计数排序
 * 排序为从小到大
 * 输入的参数是一个包含正整数的一维数组
 * 返回的值也是一个一维数组
 * @param   {Array}  array  [数组]
 * @return  {Array}
 */
function countingSort(array) {
  const buffer = [];
  let newArray = [];

  // 先把数存到这个新数组里面
  for (let i = 0; i < array.length; ++i) {
    const val = array[i];
    if (buffer[val]) {
      buffer[val] ++;
    } else {
      // 如果 temp[val] === undefined
      buffer[val] = 1;
    }
  }
  // 然后取出来排序
  for (let i = 0; i < temp.length; ++i) {
    let length = temp[i];
    if (length) {
      for (let j = 0; j < length; ++j) {
        newArray.push(i);
      }
    }
  }

  return newArray;
}

// test code
// let testArray = [];
// testArray = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// console.log('testArray: ', testArray);
// console.log('counting sorting...');
// testArray = countingSort(testArray);
// console.log('end');
// console.log('testArray: ', testArray);
