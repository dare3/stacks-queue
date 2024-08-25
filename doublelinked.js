class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
    }
  }
  class Deque {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    /** addFirst(val): add a new value to the front of the deque */
    addFirst(val) {
      const newNode = new Node(val);
  
      if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
  
      this.size++;
    }
  
    /** addLast(val): add a new value to the end of the deque */
    addLast(val) {
      const newNode = new Node(val);
  
      if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
  
      this.size++;
    }
  
    /** removeFirst(): remove and return the value from the front of the deque */
    removeFirst() {
      if (this.isEmpty()) {
        throw new Error("Remove from an empty deque");
      }
  
      const removedValue = this.head.val;
      this.head = this.head.next;
  
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null; // The deque is now empty
      }
  
      this.size--;
      return removedValue;
    }
  
    /** removeLast(): remove and return the value from the end of the deque */
    removeLast() {
      if (this.isEmpty()) {
        throw new Error("Remove from an empty deque");
      }
  
      const removedValue = this.tail.val;
      this.tail = this.tail.prev;
  
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null; // The deque is now empty
      }
  
      this.size--;
      return removedValue;
    }
  
    /** peekFirst(): return the value at the front of the deque without removing it */
    peekFirst() {
      if (this.isEmpty()) {
        throw new Error("Peek from an empty deque");
      }
      return this.head.val;
    }
  
    /** peekLast(): return the value at the end of the deque without removing it */
    peekLast() {
      if (this.isEmpty()) {
        throw new Error("Peek from an empty deque");
      }
      return this.tail.val;
    }
  
    /** isEmpty(): return true if the deque is empty, otherwise false */
    isEmpty() {
      return this.size === 0;
    }
  }
    