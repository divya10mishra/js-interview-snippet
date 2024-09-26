class RecentlyUsedList {
  constructor(capacity) {
    this.array = [];
    this.capacity = capacity;
  }

  add(item) {
    if (item == "") {
      return "not allowed";
    }
    let index = this.array.indexOf(item);
    if (index !== -1) {
      this.array.splice(index, 1);
    } else if (this.array.length > this.capacity) {
      this.array.pop();
    }
    this.array.unshift(item);
    console.log(this.array, "arr");
    return this.array;
  }
}

let rui = new RecentlyUsedList(5);
rui.add("sakhi");
rui.add("divya");
rui.add("yashi");
rui.add("divya");

// Develop a recently-used-list class to hold strings uniquely in Last-In-First-Out order.

// o) A recently-used-list is initially empty.
// o) The most recently added item is first, the least recently added item is last.
// o) Items can be looked up by index, which counts from zero.
// o) Items in the list are unique, so duplicate insertions are moved rather than added.
// Optional extras
// o) Null insertions (empty strings) are not allowed
// o) A bounded capacity can be specified at construction, so there is an upper limit to the number of items contained, with the least recently added items dropped on overflow.

//typescript

// export class recentlyUsedList {
//   private items: string[] = []
//   private capacity: number

//   constructor(capacity:number){
//     this.capacity = capacity

//   }

//   add(item:string):void{
//     const index = this.items.indexOf(item)
//     if(index !== -1){
//       this.items.splice(index,1)
//     }else if(this.items.length>this.capacity){
//          this.items.pop();
//      }
//     this.items.unshift(item)
//     console.log(this.items)
//   }

// }

// const rui = new recentlyUsedList(5);

//   rui.add("divya")
