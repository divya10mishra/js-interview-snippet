console.log(1);

setTimeout(() => {
  console.log(7);
}, 3000);

setTimeout(() => {
  return new Promise((res, rej) => {
    res("text");
    console.log(8);
  });
}, 0);

// setImmediate(() => {
//   console.log(9);
// });

new Promise((res, rej) => {
  console.log(12);
});

setTimeout(() => {
  return new Promise((res, rej) => {
    res("text");
    console.log(6);
  });
}, 5000);

new Promise((res, rej) => {
  setTimeout(() => {
    console.log(15);
  }, 0);
});

//1,12,15,8,7,6




//====================snippet2=============================



console.log(1);
const pro = new Promise((resolve) => {
  console.log(2);
  resolve();
  console.log(3);
});
(async function (x) {
  console.log("IIFE", x);
  x = await pro;
  console.log("await", x);
})("hello");
console.log(4);
process.nextTick(() => {
  console.log("nextTick");
});
pro
  .then((data) => {
    console.log("data", data);
    return data || "bad day";
  })
  .then((data) => {
    console.log("then then", data);
  });
console.log(7);
setTimeout(() => {
  console.log(8);
}, 10);
setTimeout(() => {
  console.log(9);
}, 0);
//output:  1,2,3,IIFE hello,4,7,nextTick,await undefined,data undefined,then then bad day,9,8
