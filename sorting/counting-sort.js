/**
 * 计数排序
 * 排序为从小到大
 * 输入的参数是一个包含正整数的一维数组
 * 返回的值也是一个一维数组
 * @param   {Array}  array  [数组]
 * @return  {Array}
 */
function countingSort(array) {

  if (!array) return null;

  // 将数据弄到 bucket 里面
  // 每个 bucket[index] 里面的值是 array[i] 重复出现的次数
  let bucket = [];
  for (let i = 0; i < array.length; ++i) {
    let index = array[i];
    if (!bucket[index]) bucket[index] = 0;
    bucket[index] ++;
  }

  // 然后取出来排序
  let newArray = [];
  for (let i = 0; i < bucket.length; ++i) {
    for (let j = 0; bucket[i] && j < bucket[i]; ++j) {
      newArray.push(i);
    }
  }

  return newArray;
}

// test code
let testArray = [];
testArray = [0, 0, 11, 11, 3,44,38,50,47,15,36,26,27,2,44,4,19,50,48, 9999];
console.log('testArray: ', testArray);
console.log('counting sorting...');
testArray = countingSort(testArray);
console.log('end');
console.log('testArray: ', testArray);
