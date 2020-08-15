/**
 *  Hash Table (Hashing) Implementation using seperate chaining
 */

function Node(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next;
}

function SeparateChainingHashTable(k) {
  var M = k;                    // number of chains
  var hashTable = new Array(M); // array of chains

  this.put = function(key, value) {
    var i = hash(key);
    for (var node = hashTable[i]; node != null; node = node.next) {
      if (key == node.key) { // Search hit: update value
        node.value = value;
        return;
      }
    }
    // Search miss: set new value
    hashTable[i] = new Node(key, value, hashTable[i]);
  }

  this.get = function(key) {
    var i = hash(key);
    for (var node = hashTable[i]; node != null; node = node.next) {
      if (key == node.key) { // Search hit: return value
        return node.value;
      }
    }
    // Search miss: return -1
    return -1;
  }

  function hash(key) {
    return (key.charCodeAt() & 0x7fffffff) % M;
  }
}