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

  if (!array) return null;

  // 将数据弄到 bucket 里面
  // 每个 bucket[index] 里面的值是 array 里面重复的数字
  let bucket = [];
  const minValue = Math.min(...array);
  for (let i = 0; i < array.length; ++i) {
    let index = array[i] - minValue;
    if (!bucket[index]) bucket[index] = [];
    bucket[index].push(array[i]);
  }

  let newArray = [];
  for (let i = 0; i < bucket.length; ++i) {
    for (let j = 0; bucket[i] && j < bucket[i].length; ++j) {
      newArray.push(bucket[i][j]);
    }
  }

  return newArray;
}

// test code
// let testArray = [];
// testArray = [0, 0, 11, 11, 3,44,38,50,47,15,36,26,27,2,44,4,19,50,48, 9999];
// console.log('testArray: ', testArray);
// console.log('bucket sorting...');
// testArray = bucketSort(testArray);
// console.log('end');
// console.log('testArray: ', testArray);
