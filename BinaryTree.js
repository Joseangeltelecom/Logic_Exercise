// BinaryTree.js
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this.insertRec(this.root, value);
  }

  insertRec(root, value) {
    if (root === null) {
      return new TreeNode(value);
    }

    if (value < root.value) {
      root.left = this.insertRec(root.left, value);
    } else if (value > root.value) {
      root.right = this.insertRec(root.right, value);
    }

    return root;
  }
}

module.exports = BinaryTree;
