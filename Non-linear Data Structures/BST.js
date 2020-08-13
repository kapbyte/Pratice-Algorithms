function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.put = function(data) {
    this.root = putHelper(this.root, data);
  }
                                                                                                                  
  // Private method
  function putHelper(node, data) {
    if (node == null) return new Node(data);
    if (data < node.data) {
      node.left = putHelper(node.left, data);
    }
    else if (data > node.data) {
      node.right = putHelper(node.right, data);
    }
    else {
      return "Node already exists";
    }
    return node;
  }

  this.get = function(key) {
    return getHelper(this.root, key);
  }

  function getHelper(node, key) {
    if (key == null) return "Client calls get() with a null key";
    if (node == null) return "Not found";
    if (key < node.data)  {
      return getHelper(node.left, key);
    }
    else if (key > node.data)  {
      return getHelper(node.right, key);
    }
    else {
      return node.data;
    }
  }

  this.getMin = function() {
    if (this.root == null) return "Client calls max() on empty tree";
    return getMinHelper(this.root);
  }

  function getMinHelper(node) {
    if (node.left == null) return node;
    else return getMinHelper(node.left);
  }

  this.deleteMin = function() {
    if (this.root == null) return "Client calls deleteMin() with empty tree";
    return deleteMinHelper(this.root);
  }

  function deleteMinHelper(node) {
    if (node.left == null) return node.right;
    node.left = deleteMinHelper(node.left);
    return node;
  }

  this.delete = function(key) {
    if (key == null) return "Client calls delete() with null key";
    return deleteHelper(this.root, key);
  }

  function deleteHelper(node, key) {
    if (node == null) return null;
    if (key < node.data) node.left = deleteHelper(node.left, key);
    else if (key > node.data) node.right = deleteHelper(node.right, key);
    else {
      if (node.right == null) return node.left;
      if (node.left == null) return node.right;
      var temp = node;
      node = getMinHelper(temp.right);
      node.right = deleteMinHelper(temp.right);
      node.left = temp.left;
    }
    return node;
  }

  // L, Root, R
  this.inOrder = function() {
    inOrderHelper(this.root, this.array);
    return this.array;
  }

  // Private method
  function inOrderHelper(node, array) {
    if (node == null) return;
    inOrderHelper(node.left);
    console.log(`${node.data}`);
    inOrderHelper(node.right);
  }

  // Root, L, R
  this.preOrder = function() {
    preOrderHelper(this.root);
  }

  // Private method
  function preOrderHelper(node) {
    if (node == null) return;
    console.log(`${node.data}`);
    preOrderHelper(node.left);
    preOrderHelper(node.right);
  }

  // L, R, Root
  this.postOrder = function() {
    postOrderHelper(this.root);
  }

  // Private method
  function postOrderHelper(node) {
    if (node == null) return;
    postOrderHelper(node.left);
    postOrderHelper(node.right);
    console.log(`${node.data}`);
  }
}

var BST = new BinarySearchTree(); 
BST.put(15); 
BST.put(25); 
BST.put(10);