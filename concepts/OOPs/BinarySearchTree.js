class Node {
  result = [];
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.result = [];
  }

  insert(value) {
    this.root = this.insertRecursively(this.root, value);
  }

  insertRecursively(node, value) {
    if (node === null) {
      return new Node(value);
    } else {
      if (value < node.value) {
        node.left = this.insertRecursively(node.left, value);
      } else {
        node.right = this.insertRecursively(node.right, value);
      }
    }
    return node;
  }

  search(value) {
    return this.searchRecursively(this.root, value);
  }

  searchRecursively(node, value) {
    if (node === null) {
      return false;
    } else if (node.value === value) {
      return true;
    } else {
      if (value < node.value) {
        return this.searchRecursively(node.left, value);
      } else {
        return this.searchRecursively(node.right, value);
      }
    }
  }

  inOrderTraversal() {
    return this.inOrderTraversalRecursively(this.root);
  }

  inOrderTraversalRecursively(node) {
    if (node !== null) {
      this.inOrderTraversalRecursively(node.left);
      this.result.push(node.value);
      this.inOrderTraversalRecursively(node.right);
    }
    return this.result;
  }
}

const bst1 = new BST();
bst1.insert(8);
bst1.insert(9);
bst1.insert(4);
bst1.insert(2);
console.log(bst1.inOrderTraversal(), "bst");
