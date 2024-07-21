// let obj = {
//   fname: "divya",
//   lname: "mishra",
// };
// let obj1 = {
//   gender: "female",
// };
// function profile() {
//   console.log(`hello ${this.fname} ${this.lname} you are ${this.gender}`);
// }

// profile.bind({ ...obj, ...obj1 });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const array = ["a", "b"];
// const elements = [0, 1, 2];
// array.push.apply(array, elements);
// console.log(array);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let course = {
//   tech: "ReactJs",
//   paper: {
//     sub: "CA",
//   },
// };
// JSON.parse(JSON.stringify(course));
// course.paper.sub = "Computer";
// console.log(course, "tech");

console.log(Object.prototype.__proto__);
