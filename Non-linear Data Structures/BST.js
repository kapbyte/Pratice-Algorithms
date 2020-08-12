function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}


function BinarySearchTree() {
  this.root = null;
  
  this.insert = function(data) {
    var newNode = new Node(data);
    if (this.root == null) {
      this.root = newNode;  
    }
    else {
      this.root = insertNode(this.root, newNode);  
    }
  }
  
  // Private method
  function insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left == null) {
        node.left = newNode;  
      }  
      else {
        node.left = insertNode(node.left, newNode);  
      }
    }
    else if (newNode.data > node.data) {
      if (node.right == null) {
        node.right = newNode;  
      }  
      else {
        node.right = insertNode(node.right, newNode);  
      }
    }
    else {
      return "Node already exists";  
    }
    return node;
  }
  
  this.search = function(key) {
    var node = this.root;
    while (node != null) {
      if (key < node.data) {
        node = node.left;  
      }
      else if (key > node.data) {
        node = node.right;
      }
      else {
        return node.data;
      }
    }
    return "Not found";
  }

  this.findMin = function() {
    var node = this.root;
    while (node.left != null) {
      node = node.left;
    }
    return node.data;
  }

  // L, Root, R
  this.inOrder = function() {
    inOrderHelper(this.root);
  }

  // Private method
  function inOrderHelper(node) {
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
  
// Inserting nodes to the BinarySearchTree 
BST.insert(15); 
BST.insert(25); 
BST.insert(10); 
BST.search(10);