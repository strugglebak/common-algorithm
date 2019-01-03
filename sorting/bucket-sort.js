/**
 * 桶排序
 * 排序为从小到大
 * 输入的参数是一个包含正整数的一维数组
 * 返回的值也是一个一维数组
 * Inspired from: https://gist.github.com/aturgarg/3196796
 * @param   {Array}  array  [数组]
 * @return  {Array}
 */
function bucketSort(array) {

  if (array === null || array.length === 0) {
    return null;
  }

  let newArray = [];

  const maxValue = Math.max(...array);
  const minValue = Math.min(...array);

  // 将数据弄到 bucket 里面
  let bucket = [];
  for (let i = 0; i < array.length; ++i) {
    bucket[array[i] - minValue] = [];
    bucket[array[i] - minValue].push(array[i]);
  }

  for (let i = 0; i < bucket.length; ++i) {
    for (let j = 0; bucket[i] && j < bucket[i].length; ++j) {
      newArray.push(bucket[i][j]);
    }
  }

  return newArray;
}

// // test code
// let testArray = [];
// testArray = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// console.log('testArray: ', testArray);
// console.log('bucket sorting...');
// testArray = bucketSort(testArray);
// console.log('end');
// console.log('testArray: ', testArray);
