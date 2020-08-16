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
    if (key == null) return "Client calls put(key, value) with null key";
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
    if (key == null) return "Client calls get(key) with null key";
    var i = hash(key);
    for (var node = hashTable[i]; node != null; node = node.next) {
      if (key == node.key) { // Search hit: return value
        return node.value;
      }
    }
    // Search miss: return -1
    return -1;
  }

  this.delete = function(key) {
    if (key == null) return "Client calls delete(key) with null key";
    var i = hash(key);
    var pre = new Node(-1, -1, this.hashTable[i]); 
    for (var prev = pre; prev.next != null; prev = prev.next) {
      if (prev.next.key == key) {
        prev.next = prev.next.next;
        break;
      }
    }
    this.hashTable[i] = pre.next;
  }

  function hash(key) {
    return (key.charCodeAt() & 0x7fffffff) % M;
  }
}

var SCHT = new SeparateChainingHashTable(3);
SCHT.get("c");
SCHT.get();
SCHT.put("hi", "love");
SCHT.put("code", "house");
SCHT.put("school", "imt");
SCHT.put("code", "JS");
SCHT.get("code");