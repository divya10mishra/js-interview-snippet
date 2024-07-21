const promise1 = new Promise((resolve, reject) => {
  const timeout = setTimeout(() => {
    resolve("Hi I'm promise 1");
  }, 2000);
  return timeout;
});

const promise2 = new Promise((resolve, reject) => {
  const timer = setTimeout(() => {
    resolve("Hi I'm promise 2");
  }, 1000);
  return timer;
});

const promise3 = new Promise((resolve, reject) => {
  const timer = setTimeout(() => {
    try {
      reject("Hi I'm promise 3");
    } catch (e) {
      console.error(e);
    }
  }, 3000);
  return timer;
});

let apicallAll = Promise.all([promise1, promise2, promise3]);
let apicallSettle = Promise.allSettled([promise1, promise2, promise3]);
let apicallAny = Promise.any([promise1, promise2, promise3]);
let apicallRace = Promise.race([promise1, promise2, promise3]);

apicallAll
  .then((res) => {
    console.log(res, "all");
  })
  .catch((e) => {
    console.error("I'm fail, but i'll retry");
  });
// if any one is rejected. then all are considered rejected , it will go to catch that will be output
//I'm fail, but i'll retry

apicallSettle
  .then((res) => {
    console.log(res, "settle");
  })
  .catch((e) => {
    console.error(e);
  });
//   output will be array of object will status of every apicall
//   [
//     { status: 'fulfilled', value: "Hi I'm promise 1" },
//     { status: 'fulfilled', value: "Hi I'm promise 2" },
//     { status: 'rejected', reason: "Hi I'm promise 3" }
//   ] settle

apicallAny
  .then((res) => {
    console.log(res, "any");
  })
  .catch((e) => {
    console.error(e);
  });
// who ever resolved first is output
//Hi I'm promise 2 any

apicallRace
  .then((res) => {
    console.log(res, "race");
  })
  .catch((e) => {
    console.error(e);
  });
// who ever resolved/reject first is output
//Hi I'm promise 2 race
