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
  this.insert = function(item) {
    var node = new Node(item);
    if (node.data == null) {
      return "Client tries to add a null item.";  
    }
    else if (this.head == null) {
      this.head = node;
      this.tail = node;
      this.count++;
    }
    else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }
}