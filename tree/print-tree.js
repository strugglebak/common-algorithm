/**
 * 简单打印二叉树
 * @param   {String}  prefix  [前缀]
 * @param   {Object}  node    [树节点]
 * @param   {Boolean} isLeft  [左节点判断标识位]
 */
function printTree(prefix, node, isLeft) {
  if (node) {
    console.log(prefix + (isLeft ? "|-- " : "\\-- ") + node.value);
    printTree(prefix + (isLeft ? "|   " : "    "), node.left, true);
    printTree(prefix + (isLeft ? "|   " : "    "), node.right, false);
  }
}

/**

// Original Tree    ==>   Reversed Tree
//      4                       4
//    /   \                   /   \
//   2     7                 7     2
//  / \   / \               / \   / \
// 1   3 6   9             9   6 3   1

// test code1
let testTree = {
  left: {
    left: {
      value: 1
    },
    right: {
      value: 3
    },
    value: 2
  },
  right:{
    left: {
      value: 8
    },
    right: {
      value: 9
    },
    value: 7
  },
  value: 4
};

printTree('', testTree, false);
