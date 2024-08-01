const myPromise = Promise.resolve(Promise.resolve("Promise"));

function funcOne() {
  setTimeout(() => console.log("Timeout 1!"), 0); //timer
  myPromise.then((res) => res).then((res) => console.log(`${res} 1!`));
  console.log("Last line 1!");
}

async function funcTwo() {
  const res = await myPromise;
  console.log(`${res} 2!`);
  setTimeout(() => console.log("Timeout 2!"), 0);
  console.log("Last line 2!");
}

funcOne();
funcTwo();

// lastline 1
// promise1
// timeout1

// promise 2
// last line2
// timeout2
