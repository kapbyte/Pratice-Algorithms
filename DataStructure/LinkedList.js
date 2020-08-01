function SLinkedList() {
  var Node = function Node(element) {
    this.element = element;
    this.next = null;
  }  
  this.head = null;
  this.count = 0;
  
  this.insertFront = function(item) {
    var node = new Node(item);
    if (node.element == null) {
      return "Client tries to add a null item.";  
    } 
    else if (this.head == null) {
      this.head = node;  
      this.count++;
    }
    else {
      node.next = this.head;
      this.head = node;
      this.count++;
    }
  }
  
  this.removefront = function() {
    if (this.head == null) {
      return "Client tries to remove front an empty list."; 
    }
    var popped_item = this.head;
    this.head = this.head.next;
    this.count--;
    return popped_item.element;
  }
  
  this.insertLast = function(item) {
    let current = this.head;
    let node = new Node(item);
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.count++;
  }

  this.insertAtPosition = function(item, pos) {
    if (pos < 0 || pos > this.count) {
      return "Invalid position";
    }
    else {
      var current = this.head, i = 1;
      var node = new Node(item);
      while (i < pos) {
        current = current.next;
        i++;
      }
      node.next = current.next;
      current.next = node;
    }
  }
}

var llist = new SLinkedList();
llist.insertFront(5);
llist.insertFront(2);
llist.insertFront(34);
llist.insertLast(42);
llist.insertAtPosition(600, 2);
