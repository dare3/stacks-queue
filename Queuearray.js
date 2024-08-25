class Queue {
    constructor() {
      this._array = [];
    }
  
    enqueue(val) {
      this._array.push(val);
    }
  
    dequeue() {
      if (this.isEmpty()) throw new Error("Dequeue from an empty queue");
      return this._array.shift();
    }
  
    peek() {
      if (this.isEmpty()) throw new Error("Peek from an empty queue");
      return this._array[0];
    }
  
    isEmpty() {
      return this._array.length === 0;
    }
  }
  