function SLinkedList() {
  var Node = function Node(element) {
    this.element = element;
    this.next = null;
  }  
  this.head = null;
  this.size = 0;
  
  this.push_front = function(item) {
    var node = new Node(item);
    if (node.element == null) {
      return "Client tries to add a null item.";  
    } 
    else if (this.head == null) {
      this.head = node;  
    }
    else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  
  this.pop_front = function() {
    var popped_item = this.head;
    this.head = this.head.next;
    this.size--;
    return popped_item.element;
  }
  
  this.count = function() {
    return this.size;  
  }
  
  this.empty = function() {
    return this.head == null; 
  }
  
  this.push_back = function(item) {
    let current = this.head;
    let node = new Node(item);
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.size++;
  }
  
  this.front = function() {
    return this.head.element;  
  }
  
  this.back = function() {
    let current = this.head;
    while (current.next) {
      current = current.next;  
    }
    return current.element;
  }
  
  // this.insert = function(index, item) {
  //   var current = this.head;
  //   var position = 0;
  //   var node = new Node(item);
  //   while (current.next) {
  //     if (position == index) {
        
  //     } 
  //     else {
  //       current = current.next;  
  //     }
  //   }
  // }
}

var llist = new SLinkedList();
llist.push_front(5);
llist.push_front(2);
llist.push_front(34);
llist.front();
llist.back();
llist.push_back(42);
