//  snippet-1

const a = 10;
const b = 20;
Number.prototype.sum = function (...args) {
  args.reduce((acc, current) => {
    return acc + current;
  }, this);
};
console.log(a.sum(1, 2, 3)); //16
console.log(b.sum(1, 2, 3, 4, 5)); //35

// snippet-2

var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};

function findPath(obj, str) {
  let arr = ["[", ".", "]"];
  let key = [];
  if (str.length > 0) {
    for (let i = 0; i < str.length; i++) {
      if (!arr.includes(str[i])) {
        key.push(atr[i]);
      }
    }
    let value = key.reduce((obj, curr) => {
      return obj[curr];
    }, obj);
  }
}
console.log(findPath(obj, "a.b.c")); // 12
console.log(findPath(obj, "a.b")); // {c: 12, j: false}
console.log(findPath(obj, "a.b.d")); // undefined
console.log(findPath(obj, "a.c")); // undefined
console.log(findPath(obj, "a.b.c.d")); // undefined
console.log(findPath(obj, "a.b.c.d.e")); // undefined
console.log(findPath(obj, "a.b.j")); //false
console.log(findPath(obj, "a.b.j.k")); //undefined
console.log(findPath(obj, "a.k")); //null

// snippet-3

function sumDigits(n) {
  let sum = 0;
  while (n) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  console.log("Sum of digits in a number ", sum);
}

var sum = sumDigits(1235231);

// snippet-4   --  frequency of each character

function frequency(str) {
  let str1 = str.toLowerCase();
  let arr = str1.split("");

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j] && i > j) break;
      else if (arr[i] == arr[j]) count++;
    }
    if (count > 0) console.log(count + arr[i]);
  }
}
frequency("Elements"); // e3 l1 m1 n1 t1 s1
frequency("weerty"); // w1 e2 r1 t1 y1

// snippet-5   --  longest string with total length

function longestString() {}
longestString("abcddgft"); // abcd-4

// snippet-6 -- sorted array

let arr = [9, 67, -0, -100, 55];
let ab = arr.sort((x, y) => {
  return x - y;
});
console.log(ab);

// snippet -7 --factorial

function fact(num) {
  if (x == 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}

console.log(fact(5));

// snippet-8 -- fibonacci

function fibo(n) {
  let arr = [0, 1];
  let c = 0;
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

console.log(fibo(5));

// snippet-9 chopped array

function chopped(arr, len) {
  let arr1 = [];
  let i = 0;
  while (i < arr.length) {
    arr1.push(arr.slice(i, i + len));
    i + len;
  }
  return arr1;
}

console.log(chopped([6, 7, 9, 8], 2));

// snippet-10 chaining method

function chain() {
  let temp = {
    total: 0,
    crore: function (n) {
      return (this.total += n * Math.pow(10, 7));
    },
    lac: function (n) {
      return (this.total += n * Math.pow(10, 5));
    },
  };
}

chain(temp().crore(7).lac(8).thousand(7).crore(8).value());

//snippet-11 -- length of longest string

function longestString(s) {
  if (!s) {
    return 0;
  }

  //sliding window
  let start = 0;
  let end = 0;
  let maxlength = 0;
  let unique = new Set();

  while (end < s.length) {
    if (!unique.has(s[end])) {
      unique.add(s[end]);
      end++;
      maxlength = Math.max(maxlength, unique.size);
    } else {
      unique.delete(s[start]);
      start++;
    }
  }

  return maxlength;
}

console.log(longestString("abcabcbb"));
