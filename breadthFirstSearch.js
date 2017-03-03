class Queue {
  constructor() {
    this._storage = {};
    this._front = 0;
    this._back = 0;
  }

  print() {
    let queue = [];
    for (let i = this._front; i < this._back; i++) {
      queue.push(i);
    }
    console.log(queue);
  }

  enqueue(value) {
    this._storage[this._back++] = value;
  }

  dequeue() {
    const value = this._storage[this._front];
    delete this._storage[this._front++];
    return value;
  }

  size() {
    return this._back - this._front;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  BFS(cb) {
    let queue = new Queue();
    queue.enqueue(this);

    let node;
    while(queue.size()) {
      node = queue.dequeue();
      cb(node.value);
      node.left && queue.enqueue(node.left);
      node.right && queue.enqueue(node.right); 
    }
  }

  insert(value) {
    if (value < this.value) {
      this.left ? this.left.insert(value)
        : this.left = new BinarySearchTree(value);
    } else if (value > this.value) {
      this.right ? this.right.insert(value)
        : this.right = new BinarySearchTree(value);
    }
  }

  contains(value) {
    if (this.value === value) {
      return true;
    }
    if (value < this.value) {
      return !!(this.left && this.left.contains(value));
    } else {
      return !!(this.right && this.right.contains(value));
    }
  }
}

let tree = new BinarySearchTree(100);
tree.insert(50);
tree.insert(25);
tree.insert(10);
tree.insert(2);
tree.insert(15);
tree.insert(30);
tree.insert(300);
tree.insert(200);
tree.insert(400);
tree.insert(350);
tree.insert(500);

let traversed = [];
tree.BFS((node) => {
  traversed.push(node);
});
console.log(traversed);
