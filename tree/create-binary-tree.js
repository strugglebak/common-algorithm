/**
 * 生成二叉树算法
 * 通过数组创建一颗二叉树
 * @param   {Array}   array  [数组]
 * @return  {Object}  node   [一颗树的对象]
 */
function createBinaryTree(array) {
  if (!array) return null;

  let node = {};
  for (let i = 0; i < array.length; ++i) {
    node[i] = {};
    node[i].value = array[i]
    node[i].left = null;
    node[i].right = null;
  }

  for (let i = 0; i < array.length; ++i) {
    let root = i;
    let left = 2*i + 1;
    let right = 2*i + 2;

    node[root].left = node[left];
    node[root].right = node[right];
  }

  return node[0];
}
function printTree(prefix, node, isLeft) {
  if (node) {
    console.log(prefix + (isLeft ? "|-- " : "\\-- ") + node.value);
    printTree(prefix + (isLeft ? "|   " : "    "), node.left, true);
    printTree(prefix + (isLeft ? "|   " : "    "), node.right, false);
  }
}

// // test code
// let testArray = [1, 2, 3, 4, 5, 6, 7];
// console.log('testArray', testArray);
// let node = createBinaryTree(testArray);
// printTree('', node, false);
