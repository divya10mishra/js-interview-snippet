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
