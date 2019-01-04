/**
 * 简单堆排序算法
 * @param   {Array}   array  [数组]
 * @return  {Array}
 */
function heapSort(array) {

  if (!array) return null;

  let length = array.length;

  // 构建初始大顶堆
  // 这里先默认数组已经按完全二叉树排好了
  // 因为要判断左右节点，所以这里 i 只取数组长度一半
  // 从堆底开始向堆顶调整
  // 得到初始的无序序列(R[1], R[2], ...R[n])
  for (let i = Math.floor(length/2); i >= 0; i--) {
    maxHeapify(array, i, length);
  }

  // 将堆顶元素(R[1])和最后一个元素(R[n])交换(堆顶元素最大，放到最后面)
  // 此时有
  // 新的有序序列(R[n])
  // 新的无序序列(R[1], R[2], ...R[n-1])
  for (let i = length - 1; i > 0; i--) {
    swap(array, i, 0);

    // 新的堆顶(R[1]) 可能违反堆的性质
    // 所以需要重新对当前无序序列(R[1], R[2], ...R[n-1])进行调整
    maxHeapify(array, 0, i-1);
  }
}
function maxHeapify(array, index, length) {
  while (true) {
    // 数组下标与树结构的对应关系
    let parent = index;
    let left = index*2 + 1;
    let right = index*2 + 2;

    if (left < length && array[left] > array[parent]) {
      parent = left; // 记录位置,为交换做准备
    }

    if (right < length && array[right] > array[parent]) {
      parent = right; // 记录位置,为交换做准备
    }

    // 下标若没变，说明此树符合大顶堆
    if (parent === index) {
      return;
    }

    swap(array, index, parent);
    index = parent; // 继续向堆顶寻找
  }
}
function swap(array, preIndex, nextIndex) {
  let temp = array[preIndex];
  array[preIndex] = array[nextIndex];
  array[nextIndex] = temp;
}

// // test code
// let testArray = [3,44,38,5,47,3,15,36,26,27,50,2,46,4,19,50,48];
// console.log('testArray: ', testArray);
// console.log('heap sorting...');
// heapSort(testArray);
// console.log('testArray: ', testArray);

