class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    addFirst(val) {
      const newNode = new Node(val);
      if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.size++;
    }
  
    addLast(val) {
      const newNode = new Node(val);
      if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size++;
    }
  
    removeFirst() {
      if (this.isEmpty()) throw new Error("Remove from an empty list");
      const removedValue = this.head.val;
      this.head = this.head.next;
      this.size--;
      if (this.isEmpty()) this.tail = null;
      return removedValue;
    }
  
    peekFirst() {
      if (this.isEmpty()) throw new Error("Peek from an empty list");
      return this.head.val;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  }
  