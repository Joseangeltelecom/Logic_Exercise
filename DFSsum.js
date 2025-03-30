// DFSSolution.js
const BinaryTree = require("./BinaryTree");

function dfs(root) {
  if (root === null) {
    return 0;
  }
    
    let left = dfs(root.left);
    let right = dfs(root.right);
    return root.value + left + right;
}

// Main function to create the tree and calculate the sum
const values = [4, 2, 1, 3, 6, 7, 9];
const tree = new BinaryTree();

values.forEach((value) => tree.insert(value));

const sum = dfs(tree.root);
console.log("Sum of all nodes:", sum);
