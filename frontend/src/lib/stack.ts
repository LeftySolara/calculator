interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
}

class Stack<T> implements IStack<T> {
  private data: T[] = [];

  constructor(private capacity: number = Infinity) {}

  push(item: T): Stack<T> {
    if (this.size() === this.capacity) {
      throw Error("Stack has reached maximum capacity.");
    }
    this.data.push(item);
    return this;
  }

  pop(): T | undefined {
    return this.data.pop();
  }

  peek(): T | undefined {
    return this.data[this.size() - 1];
  }

  size(): number {
    return this.data.length;
  }
}

export default Stack;
