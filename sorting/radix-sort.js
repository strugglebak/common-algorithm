/**
 * 基数排序
 * 将所有待比较数值（正整数）统一为同样的数字长度
 * 数字较短的数前面补零
 * 然后，从最低位开始，依次进行一次排序
 *
 * 排序为从小到大
 * 输入的参数是一个包含正整数(包括0)的一维数组
 * 返回的值也是一个一维数组
 * @param   {Array}  array  [数组]
 * @return  {Array}
 */
function radixSort(array) {

  if (!array) return null;

  // 得到最大数的数字长度
  let maxValue = Math.max(...array);
  let maxDigitLength = String(maxValue).length;

  // 排序,取位数取到最大数的最高位为止
  let mod = 10;
  let dev = 1;
  for (let i = 0; i < maxDigitLength; ++i) {
    // 得到每个数字的位数, 一位一位取出来
    // 将对应位数的数字放到 bucket 中
    let bucket = [];
    for (let j = 0; j < array.length; ++j) {
      let index = parseInt((array[j] % mod) / dev);
      if (!bucket[index]) bucket[index] = [];
      bucket[index].push(array[j]);
    }

    // 下次取 十位/百位/千位/...
    mod *= 10;
    dev *= 10;

    // 将 bucket 中排好的数依次取出，放入 array
    let index = 0;
    for (let j = 0; j < bucket.length; ++j) {
      for (let k = 0; bucket[j] && k < bucket[j].length; ++k) {
        array[index++] = bucket[j][k];
      }
    }
  }

  return array;
}


// // test code
let testArray = [];
testArray = [0, 0, 11, 11, 3,44,38,50,47,15,36,26,27,2,44,4,19,50,48, 9999];
console.log('testArray: ', testArray);
console.log('radix sorting...');
testArray = radixSort(testArray);
console.log('end');
console.log('testArray: ', testArray);
