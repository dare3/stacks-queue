class Queue {
    constructor() {
      this._list = new LinkedList();
    }
  
    enqueue(val) {
      this._list.addLast(val);
    }
  
    dequeue() {
      return this._list.removeFirst();
    }
  
    peek() {
      return this._list.peekFirst();
    }
  
    isEmpty() {
      return this._list.isEmpty();
    }
  }
  