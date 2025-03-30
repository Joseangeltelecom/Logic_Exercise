// DFSmaxDepth.js
const BinaryTree = require("./BinaryTree");

function dfs(root) {
      if (root === null) {
        return 0;
      }
    
    let left = dfs(root.left);
    let right = dfs(root.right);
    return Math.max(left, right) + 1;
}

// Main function to create the tree and calculate the sum
const values = [
  4,
  2,
  7,
  1,
  null,
  6,
  9,
  null,
  8,
  null,
  null,
  null,
  null,
  null,
  null,
];
const tree = new BinaryTree();

values.forEach((value) => tree.insert(value));

const sum = dfs(tree.root);
console.log("Sum of all nodes:", sum);
