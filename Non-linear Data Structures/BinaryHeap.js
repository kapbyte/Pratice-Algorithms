// Max heap implementation using an array[capacity]

function PriorityQueue(capacity) {
  var pq = new Array(capacity);
  var N = 0; // number of elements on pq
  var pqMaxSize = capacity - 1; // this.pq[0] is not used
  
  /**In a heap, the parent of the node in position k is in position k/2; and, conversely, 
   * the two children of the node in position k are in positions 2k and 2k + 1. 
   * We can travel up and down by doing simple arithmetic on array indices: 
   * to move up the tree from a[k] we set k to k/2; to move down the tree we set k to 2*k or 2*k+1. 
   * */
  
  this.insert = function(x) {
    if (x == null) {
      return "Client tries to add a null item to heap";
    }
    else if (pqMaxSize == N) {
      return "Ooops! Heap is full";
    }
    else {
      N++; // add x starting from index 1
      pq[N] = x;
      swim(N);
    }
  }

  function swim(k) {
    // Compare newly inserted item (child) against its parent
    while (k > 1 && pq[k] > pq[Math.floor(k/2)]) {
      // Swap
      var temp = pq[k]; 
      pq[k] = pq[Math.floor(k/2)];
      pq[Math.floor(k/2)] = temp;

      k = Math.floor(k/2);
    }  
  } 
  
  this.delMax = function() {
    if (this.N == 0) {
      return "Client tries to delete from an empty heap";
    }
    else {
      var maxItem = pq[1];
      pq[1] = pq[N];
      pq[N] = null;
      N--;
      sink(1);
      return maxItem; 
    }
  }
  
  function sink(k) {
    while(2*k <= N) {
      var j = 2*k;
      
      // left child compare with right child
      if (j < N && pq[j] < (pq[j+1])) {
        j++;
      }
      // Compare bigger child with parent
      else if (pq[k] < pq[j] == false) {
        break;  
      }
      else {
        // Swap 
        var temp = pq[k];
        pq[k] = pq[j];
        pq[j] = temp;
      }

      k = j;
    }
  }

  this.isEmpty = function() {
    return N == 0;
  }

  this.size = function() {
    return N;
  }
}

var priorityQ = new PriorityQueue(4);
priorityQ.insert(8);
priorityQ.insert(9);
priorityQ.insert(15);
priorityQ.delMax();
priorityQ.isEmpty();
priorityQ.size();