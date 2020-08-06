// Queue implementation using a linked list.
function QueueLinkedList() {
	var Node = function(element) {
		this.element = element;
		this.next = null;
	}

	this.first = null;
	this.last = null;
	this.count = 0;

	// Add an item (rear)
	this.enqueue = function(item) {
		var node = new Node(item);
		if (node.element == null) {
      return "Client tries to add a null item to queue";  
		} 
		else if (this.last == null) {
			this.first = node;
			this.last = node;
			this.count++;
		} 
		else {
			this.last.next = node;
			this.last = node;
			this.count++;
		}
	}

	// Remove the least recently added item (front)
	this.dequeue = function() {
		if (this.first == null) {
			return "Client tries to dequeue from an empty queue.";
    } 
    else {
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

// Stack implementation using an dynamically sized array
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

// --------------------------------------------------------------------------------------------------------------
// Stack implementation using an array of size k
function Queue(k) {
	this.queue = new Array(k);
	this.queueMaxSize = k;
	this.front = -1;
	this.rear = -1;
	this.count = 0;

	// Add item to queue (rear)
	this.enqueue = function(item) {
		if (this.front == -1 && this.rear == -1) {
			this.front = 0;
			this.rear = 0;
			this.queue[this.rear] = item;
			this.count++;
		}
		else if (this.rear == this.queueMaxSize - 1) {
			return "Client tries to enqueue to a filled queue";
		}
		else {
			this.rear++;
			this.queue[this.rear] = item;
			this.count++;
		}
	}

	// Remove the least recently added item (front)
	this.dequeue = function() {
		if (this.front == -1 && this.rear == -1) {
			return "Client tries to dequeue from an empty queue.";
		}
		else if (this.front == this.rear) {
			var dequeuedItem = this.queue[this.front];
			this.queue[this.front] = undefined;
			this.front = -1;
			this.rear = -1;
			this.count--;
			return dequeuedItem;
		}
		else {
			var dequeuedItem = this.queue[this.front];
			this.queue[this.front] = undefined;
			this.front++;
			this.count--;
			return dequeuedItem;
		}
	}

	// Is the queue empty?
	this.isEmpty = function() {
		return this.front == -1 && this.rear == -1;
	}

	// Number of items in the queue
	this.size = function() {
		return this.count;
	}
}


//----------------------------------------------------------------------------------------------------------------
// IMPLEMENT A CIRCULAR QUEUE
/**
Your implementation should support following operations:

MyCircularQueue(k): Constructor, set the size of the queue to be k.
Front: Get the front item from the queue. If the queue is empty, return -1.
Rear: Get the last item from the queue. If the queue is empty, return -1.
enqueue(item): Insert an element into the circular queue. Return true if the operation is successful.
dequeue(): Delete an element from the circular queue. Return true if the operation is successful.
isEmpty(): Checks whether the circular queue is empty or not.
isFull(): Checks whether the circular queue is full or not.
*/

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.queue = new Array(k);
	this.front = -1;
	this.rear = -1;
  this.queueSize = k;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.front == -1 && this.rear == -1) {
		this.front = 0;
		this.rear = 0;
		this.queue[this.rear] = value;
    return true;
	}
	else if ((this.rear + 1) % this.queueSize == this.front) {
		return false;
	}
	else {
		this.rear = (this.rear + 1) % this.queueSize;
    this.queue[this.rear] = value;
    return true
  }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.front == -1 && this.rear == -1) {
    return false;
  }
  else if (this.front == this.rear) {
    this.front = -1;
    this.rear = -1;
    return true;
  } 
  else {
    this.front = (this.front + 1) % this.queueSize;
    return true;
  }
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if (this.front == -1 && this.rear == -1) {
    return -1;
  } 
  else {
    return this.queue[this.front];
  }
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if (this.front == -1 && this.rear == -1) {
    return -1;
  } 
  else {
    return this.queue[this.rear];
  }  
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.front == -1 && this.rear == -1;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return ((this.rear + 1) % this.queueSize) == this.front;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

//-----------------------------------------------------------------------------------------------------------

/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
  this.queue = new Array(k);
  this.queueSize = k;
  this.front = -1;
  this.rear = -1;
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
  if (this.front == -1 && this.rear == -1) {
    this.front = 0;
    this.rear = 0;
    this.queue[this.front] = value;
    return true;
  }
  else if ((this.front == 0 && this.rear == this.queueSize - 1) || (this.front == this.rear + 1)) {
    return false;
  }
  else if (this.front == 0) {
    this.front = this.queueSize - 1;
    this.queue[this.front] = value;
    return true;
  }
  else {
    this.front--;
    this.queue[this.front] = value;
    return true;
  }
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
  if (this.front == -1 && this.rear == -1) {
    this.front = 0;
    this.rear = 0;
    this.queue[this.rear] = value;
    return true;
  }
  else if ((this.front == 0 && this.rear == this.queueSize - 1) || (this.front == this.rear + 1)) {
    return false;
  }
  else if (this.rear == this.queueSize - 1) {
    this.rear = 0;
    this.queue[this.rear] = value;
    return true;
  }
  else {
    this.rear++;
    this.queue[this.rear] = value;
    return true;
  }
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
  if (this.front == -1 && this.rear == -1) {
    return false;
  }
  else if (this.front == this.rear) {
    this.front = -1;
    this.rear = -1;
    return true;
  }
  else if (this.front == this.queueSize - 1) {
    this.front = 0;
    return true;
  }
  else {
    this.front++;
    return true;
  }
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
  if (this.front == -1 && this.rear == -1) {
    return false;
  }
  else if (this.front == this.rear) {
    this.front = -1;
    this.rear = -1;
    return true;
  }
  else if (this.rear == 0) {
    this.rear = this.queueSize - 1;
    return true;
  }
  else {
    this.rear--;
    return true;
  }
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
  if (this.front == -1 && this.rear == -1) {
    return -1;
  }
  else {
    return this.queue[this.front]; 
  }
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
  if (this.front == -1 && this.rear == -1) {
    return -1;
  } else {
    return this.queue[this.rear];
  }
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
  return this.front == -1 && this.rear == -1;    
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
  return (this.front == 0 && this.rear == this.queueSize - 1) || (this.front == this.rear + 1);
};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */