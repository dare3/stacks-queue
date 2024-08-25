class Stack {
    constructor() {
      this._array = [];
    }
  
    push(val) {
      this._array.push(val);
    }
  
    pop() {
      if (this.isEmpty()) throw new Error("Pop from an empty stack");
      return this._array.pop();
    }
  
    peek() {
      if (this.isEmpty()) throw new Error("Peek from an empty stack");
      return this._array[this._array.length - 1];
    }
  
    isEmpty() {
      return this._array.length === 0;
    }
  }
  