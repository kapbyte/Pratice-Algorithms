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

function partition(arr, low, high) {
  let pivot = arr[low];
  let start = low, end = high;
  
  while(start < end) {

    // find item on left to swap
    while(arr[start] <= pivot) {
      start++;  
    }

    // find item on right to swap
    while(arr[end] > pivot) {
      end--;  
    }

    // check if pointers cross
    if (start < end) {
      exch(arr, start, end);
    }
  }

  exch(arr, low, end);  // swap with partitioning item
  return end;           // return index of item now known to be in place
}

function sort(arr, low, high) {
  if (low < high) {
    let pivotIndex = partition(arr, low, high);
    sort(arr, low, pivotIndex-1);
    sort(arr, pivotIndex+1, high);
  }
}

function exch(arr, start, end) {
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
}

function quicksort(arr) {
  sort(arr, 0, arr.length-1);
  return arr;
}

quicksort([3, 4, 1, 7, 0]);