/**
 * 简单翻转二叉树算法
 * @param   {Object}  node  [一颗树的对象]
 * @return  {Object}  node  [一颗树的对象]
 */
function reverseBinaryTree(node) {
  if (!node) {
    return;
  }

  let left = reverseBinaryTree(node.left);
  let right = reverseBinaryTree(node.right);

  node.left = right;
  node.right = left;

  return node;
}
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
testTree = reverseBinaryTree(testTree);
printTree('', testTree, false);


// Original Tree    ==>   Reversed Tree
//      4                       4
//        \                   /
//         7                 7
//        / \               / \
//       6   9             9   6

// test code2
let testTree2 = {
  left: null,
  right: {
    left: {
      value: 6
    },
    right: {
      value: 9
    },
    value: 7
  },
  value: 4
}

printTree('', testTree2, false);
testTree2 = reverseBinaryTree(testTree2);
printTree('', testTree2, false);

**/
