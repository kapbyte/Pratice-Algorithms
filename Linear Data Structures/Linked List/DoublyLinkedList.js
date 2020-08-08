function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.count = 0;

  // Append to end of list O(1)
  this.create = function(item) {
    var node = new Node(item);
    if (node.data == null) {
      return "Client tries to add a null item.";  
    }
    else if (this.tail == null) {
      this.head = node;
      this.tail = node;
    }
    else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.count++;
  }

  // O(1) insertion
  this.insertAtFront = function(item) {
    var node = new Node(item);
    if (node.data == null) {
      return "Client tries to add a null item.";  
    }
    else if (this.head == null) {
      this.head = node;
      this.tail = node;
    }
    else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.count++;
  }

  // O(1) insertion
  this.insertAtEnd = function(item) {
    var node = new Node(item);
    if (node.data == null) {
      return "Client tries to add a null item.";  
    }
    else if (this.head == null) {
      this.head = node;
      this.tail = node;
    }
    else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.count++;
  }

  this.deleteAtFront = function() {
    if (this.head == null) {
      return "List is empty";
    }
    else {
      var temp = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
      this.count--;
      return temp.data;
    }
  }

  this.deleteAtEnd = function() {
    if (this.tail == null) {
      return "List is empty";
    }
    else {
      var temp = this.tail;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      temp.prev = null
      this.count--;
      return temp.data;
    }
  }

  // Implement -> insertAtPosition, deleteAtPosition, reverseDoublyLinkedList

  // O(1) on all operations
}