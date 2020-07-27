// Stack implementation using a linked list.
function StackLinkedList() {
	var Node = function(element) {
		this.element = element;
		this.next = null;
	}

	this.head = null; // Reference to first Node in linked list
	this.count = 0;

	// Add an item
	this.push = function(item) {
    var node = new Node(item);
    if (node.element == null) {
      return "Client tries to add a null item.";  
    } else if (this.head == null) {
      this.head = node;  
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.count++;
	}
	
	// Remove the most recently added item
	this.pop = function() {
		if (this.head == null) {
			return "Client tries to pop from an empty stack.";
		} else {
			var poppedItem = this.head.element;
			this.head = this.head.next;
			this.count--;
			return poppedItem;
		}
	}

	// Is the stack empty?
	this.isEmpty = function() {
		return this.head == null;
	}

	// Number of items in the stack
	this.size = function() {
		return this.count;
	}
}

// ----------------------------------------------------------------------------------------------------------------

// Stack implementation using an array
function Stack() {
	this.array = [];
	this.count = 0;

	// Add an item
	this.push = function(item) {		
		if (item == null) {
      return "Client tries to add a null item.";  
    } else {
			this.array.push(item);
			this.count++;
		}
	}

	// Remove the most recently added item
	this.pop = function() {
		if (this.count == 0) {
			return "Client tries to pop from an empty stack.";
		} else {
			var poppedItem = this.array.pop();
			this.count--;
			return poppedItem;
		}
	}

	// Is the stack empty?
	this.isEmpty = function() {
		return this.count == 0;
	}

	// Number of items in the stack
	this.size = function() {
		return this.count;
	}
}

// ----------------------------------------------------------------------------------------------------------------

// Stack implementation using array of fixed capacity
function FixedCapacityStack(capacity) {
	this.array = new Array(capacity);
	this.count = 0;
	this.top = 0;

	// Add an item
	this.push = function(item) {		
		if (item == null) {
      return "Client tries to add a null item.";  
    } else {
			this.array[this.top++] = item;
			this.count++;
		}
	}

	this.pop = function() {
		if (this.count == 0) {
			return "Client tries to pop from an empty stack.";
		} else {
			var poppedItem = this.array[--this.top];
			this.array[this.top] = undefined;
			this.count--;
			return poppedItem;
		}
	}

	// Is the stack empty?
	this.isEmpty = function() {
		return this.count == 0;
	}

	// Number of items in the stack
	this.size = function() {
		return this.count;
	}
}
//---------------------------------------------------------------------------------------------------------------

// Stack implementation using a resizing array

function ResizingStack() {
	this.array = new Array(1);
	this.count = 0;
	this.top = 0;

	this.push = function(item) {
		if (item == null) {
      return "Client tries to add a null item.";  
    } else if (this.top == this.array.length) {
			resize(2 * this.array.length);
		} else {
			this.array[this.top++] = item;
			this.count++;
		}
	}

	this.pop = function() {
		if (this.count == 0) {
			return "Client tries to pop from an empty stack.";
		} else {
			var poppedItem = this.array[--this.top];
			this.array[this.top] = undefined;
			this.count--;
			if (this.top > 0 && this.top == this.array.length) {
				resize(2 / this.array.length);
			} else {
				return poppedItem;
			}
		}
	}

	// Is the stack empty?
	this.isEmpty = function() {
		return this.count == 0;
	}

	// Number of items in the stack
	this.size = function() {
		return this.count;
	}

	this.resize = function(capacity) {
		this.copy = new Array(capacity);
		for (var i = 0; i < this.top; i++) {
			this.copy[i] = this.array[i];
		}
		this.array = this.copy;
	}
}
