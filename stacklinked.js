class Stack {
    constructor() {
      this._list = new LinkedList();
    }
  
    push(val) {
      this._list.addFirst(val);
    }
  
    pop() {
      return this._list.removeFirst();
    }
  
    peek() {
      return this._list.peekFirst();
    }
  
    isEmpty() {
      return this._list.isEmpty();
    }
  }
  