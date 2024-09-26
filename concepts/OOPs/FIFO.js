class FIFO {
  constructor() {
    this.result = [];
  }
  add(value) {
    this.result.push(value);
  }

  remove() {
    this.result.shift();
  }

  sort() {
    this.result.sort((a, b) => b - a);
  }
}

const instance = new FIFO();
instance.add(7);
instance.add(1);
instance.add(9);
instance.add(2);
instance.sort();

console.log(instance, "ins");
