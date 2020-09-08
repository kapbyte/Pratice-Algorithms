function insertionSort(arr) {
  for (let i = 1, len = arr.length; i < len; i++) {
    let temp = arr[i];
    let j = i-1;
    while (j >= 0 && arr[j] > temp) {
      arr[j+1] = arr[j];  
      j--;
    }
    arr[j+1] = temp;
  }  
  return arr;
}
insertionSort([5, 4, 10, 1, 6, 2]);

//---------------------------------------------------------------------------------------------------------
// Implemented mergesort algorithm
function merge(a, aux, low, mid, high) {
  // Copy
  for (let k = low; k <= high; k++) {
    aux[k] = a[k];  
  }
  
  // Merge
  let i = low, j = mid+1;
  for (let k = low;  k <= high; k++) {
    if (i > mid) {
      a[k] = aux[j++];  
    }
    else if (j > high) {
      a[k] = aux[i++];
    }
    else if (aux[j] < aux[i]) {
      a[k] = aux[j++];  
    }
    else {
      a[k] = aux[i++];  
    }
  }
}

function sort(a, aux, low, high) {
  if (high <= low) return;
  let mid = Math.floor(low + (high - low) / 2);
  sort(a, aux, low, mid);
  sort(a, aux, mid+1, high);
  merge(a, aux, low, mid, high);
}

function mergeSort(a) {
  let aux = new Array(a.length);
  sort(a, aux, 0, a.length-1);
  return a;
}

mergeSort([2, 5, 1, 3, 7, 2, 3, 8, 6, 3]);

//------------------------------------------------------------------------------------------------------------------
// Implemented quicksort algorithm
function quicksort(a) {
  sort(a, 0, a.length - 1);
}

function sort(a, low, high) {
  if (high <= low) return;
  let j = partition(a, low, high);
  sort(a, low, j-1);
  sort(a, j+1, high);
}

function partition(a, low, high) {
  let i = low, j = high+1
  while(true) {
    
    while (a[++i] < a[lo]) { // find item on left to swap
      if (i == hi) break;
    }

    while (a[lo] < a[--j]) { // find item on right to swap
      if (j == lo) break;
    }

    if (i >= j) break;      // check if pointers cross
    exch(a, i, j);          // swap
  }

  exch(a, lo, j);           // swap with partitioning item
  return j;                 // return index of item now known to be in place
}

function exch(a, i, j) {
  let temp = i;
  a[i] = a[j];
  a[j] = temp;
}