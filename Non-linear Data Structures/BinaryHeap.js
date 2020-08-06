// Max heap implementation using an array[capacity]

function PriorityQueue(capacity) {
  this.pq = new Array(capacity);
  this.N = 0; // number of elements on pq
  this.pqMaxSize = capacity - 1; // this.pq[0] is not used
  
  /**In a heap, the parent of the node in position k is in position k/2; and, conversely, 
   * the two children of the node in position k are in positions 2k and 2k + 1. 
   * We can travel up and down by doing simple arithmetic on array indices: 
   * to move up the tree from a[k] we set k to k/2; to move down the tree we set k to 2*k or 2*k+1. 
   * */

  this.swim = function(k) {
    // Compare newly inserted item (child) against its parent
    while (k > 1 && this.pq[k] > this.pq[Math.floor(k/2)]) {
      // Swap
      var temp = this.pq[k]; 
      this.pq[k] = this.pq[Math.floor(k/2)];
      this.pq[Math.floor(k/2)] = temp;

      k = Math.floor(k/2);
    }  
  } 
  
  this.insert = function(x) {
    if (x == null) {
      return "Client tries to add a null item to heap";
    }
    else if (this.pqMaxSize == this.N) {
      return "Ooops! Heap is full";
    }
    else {
      this.N++; // add x starting from index 1
      this.pq[this.N] = x;
      this.swim(this.N);
    }
  }
  
  this.delMax = function() {
    if (this.N == 0) {
      return "Client tries to delete from an empty heap";
    }
    else {
      var maxItem = this.pq[1];
      this.pq[1] = this.pq[this.N];
      this.pq[this.N] = null;
      this.N--;
      this.sink(1);
      return maxItem; 
    }
  }
  
  this.sink = function(k) {
    while(2*k <= this.N) {
      var j = 2*k;
      
      // left child compare with right child
      if (j < this.N && this.pq[j] < (this.pq[j+1])) {
        j++;
      }
      // Compare bigger child with parent
      else if (this.pq[k] < this.pq[j] == false) {
        break;  
      }
      else {
        // Swap 
        var temp = this.pq[k];
        this.pq[k] = this.pq[j];
        this.pq[j] = temp;
      }

      k = j;
    }
  }

  this.isEmpty = function() {
    return this.N == 0;
  }

  this.size = function() {
    return this.N;
  }
}

var priorityQ = new PriorityQueue(4);
priorityQ.delMax();
priorityQ.insert();
priorityQ.insert(8);
priorityQ.insert(9);
priorityQ.insert(15);
priorityQ.insert(32);
priorityQ.delMax();
priorityQ.isEmpty();
priorityQ.size();