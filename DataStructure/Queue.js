// Queue implementation using a linked list.
function QueueLinkedList() {
	var Node = function(element) {
		this.element = element;
		this.next = null;
	}

	this.first = null;
	this.last = null;
	this.count = 0;

	// Add an item (back)
	this.enqueue = function(item) {
		var node = new Node(item);
		if (node.element == null) {
      return "Client tries to add a null item to queue";  
    } else if (this.last == null) {
			this.first = node;
			this.last = node;
		} else {
			this.last.next = node;
			this.last = node;
		}
		this.count++;
	}

	// Remove the least recently added item (front)
	this.dequeue = function() {
		if (this.first == null) {
			return "Client tries to dequeue from an empty queue.";
		} else {
			var poppedItem = this.first.element;
			this.first = this.first.next;
			this.count--;
			return poppedItem;
		}
	}

	// Is the queue empty?
	this.isEmpty = function() {
		return this.first == null;
	}

	// Number of items in the queue
	this.size = function() {
		return this.count;
	}

	// O(1) -> on all operations
}

//--------------------------------------------------------------------------------------------------------------

// Stack implementation using an array
function Queue() {
	this.array = [];
	this.count = 0;

	// Add an item
	this.enqueue = function(item) {
		if (item == null) {
			return "Client tries to add a null item to queue";
		} else {
			this.array.push(item);
			this.count++;
		}
	}

	// Remove the least recently added item
	this.dequeue = function() {
		if (this.count == 0) {
			return "Client tries to dequeue from an empty queue.";
		} else {
			var dequeuedItem = this.array.shift();
			this.count--;
			return dequeuedItem;
		}
	}

	// Is the queue empty?
	this.isEmpty = function() {
		return this.count == 0;
	}

	// Number of items in the queue
	this.size = function() {
		return this.count;
	}
}