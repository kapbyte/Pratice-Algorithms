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
      this.root = this.insertNode(this.root, newNode);  
    }
  }
  
  this.insertNode = function(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left == null) {
        node.left = newNode;  
      }  
      else {
        node.left = this.insertNode(node.left, newNode);  
      }
    }
    else if (newNode.data > node.data) {
      if (node.right == null) {
        node.right = newNode;  
      }  
      else {
        node.right = this.insertNode(node.right, newNode);  
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
}

var BST = new BinarySearchTree(); 
  
// Inserting nodes to the BinarySearchTree 
BST.insert(15); 
BST.insert(25); 
BST.insert(10); 
BST.search(10);