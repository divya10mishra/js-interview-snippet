// console.log(z)

// function x() {
  
//     var i=9;
//     return(function(){
     
//         console.log(i);//i=9, why not 8? function x is return at line 5 it will not reach line 8
//       });
//       i=8;   
//   }
 
//   var z = x();
//   console.log(z());
//   z();




// function x() {
//     var i=9;
//     function y(){
//         console.log(i);//i=8
//       };
//       i=8; 
//       y() ; 
//   }
 
//   var z = x();
//   console.log('first',z);//undefined?coz function is not returning anything so z is only initialized with undefined
  // z();//z is not a function?coz there is nothing in z but we called so not a function and not execute further
  // x();// this will call a function





// function x() {
//     var i=9;
    
//     function y(){
//         console.log(i);
//       };
//       i=8; 
//       y() ; 
//   }
 
//    //x();
//   console.log(x());
  





// function printSomething() {
// 	console.log( something );
// }

// function invokePrintSomething() {
// 	var something = 3;
// 	printSomething();
// }






// var something = 2;

// invokePrintSomething();

// var car = {
//   model: 'bmw',
//   color: 'red',
//   price: 2000
// }
// //car.type = 'manual'; 
// console.log(car);
// console.log(JSON.stringify(car));
// let from="divya";
// function showMessage(from, text = anotherFunction()) {
//   console.log(from+" "+text);
// }




// function anotherFunction(){
//   let text="to you";
// }
// showMessage(from,text=anotherFunction());








// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('Do you have permission from your parents?');
//   }
// }

// let age = 10;

// if ( !checkAge(age) ) {
//  return age;
// } 



// function min(a,b){
//   return(b>a)?a:b;
// }

// min(2, 5) == 2;



// function pow(x,n){
//   let pro=1;
//   for(let i=0;i<n;i++){
//     pro=pro*x;
//   }
//   return (console.log(pro));
// }

// pow(3,2);



// let ask = (question, yes, no) => confirm((question))? yes():no();
// ask(
//   "Do you agree?",
//   ()=>  alert("You agreed."),
//   ()=>  alert("You canceled the execution.")
// );


// a();//cannot access before initialization function expression is not hoisted
// const a = function(){
//   console.log("a called")
// }




//  a();//a is not a function bcoz var used if let or const used them initialization error as like above code
// zx();//zx is not defined
// var a = function zx(){
//   console.log("function called ");
// }
// a();//excecuted
// zx();//zx not defined as it is not defined in global space




// abc(
// functfion xyz(){
//   console.log("function executes");
// }())


// function abc(xyz){
//   console.log("function inside");
// }

// abc(xyz())
// function xyz(){
//  console.log("function executes");
// }



// let user = {
//   name: "John",
//   age: 30,
//   clone:{
//     name:"divya"//souce 
//   }
// };

// let var1 = user.clone.name = "sakhi"//trying cloning and changing value without disturbing source
// console.log(var1)
// console.log(user.clone.name) //it changes the source value also, inspite of cloning object and changing

// let user = {
//   name: "John",
//   age: 30,
//   clone:{
//     name:"divya"//souce 
//   }
// };

// let var1 = user.clone.name;
// var1 = "sakhi"//trying cloning and changing value without disturbing source, and it happend
// console.log(var1)//output-sakhi
// console.log(user.clone.name)//output-divya

// const user = {
//   name: "John",
//   age: 30,
//   clone:{
//     name:"divya"//souce 
//   }
// };

// const var1 = Object.assign({}, user) ;
// var1.clone.name = "sakhi"//trying cloning and changing value without disturbing source when using Object.assign but it overwrites
// console.log(var1.clone.name)
// console.log(user.clone.name)


// const person = {
//     isHuman: false,
//     printIntroduction: function() {
//       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
//   };
  
//   const me = Object.create(person);
  
//   me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
//   me.isHuman = true; // inherited properties can be overwritten
  
//   me.printIntroduction();









// function marry(man, woman){
// woman.husband = man;
// man.wife = woman;

// return{father:man, mother:woman}
// }

// let family = marry({name:"John"},{name:"Ann"})
// console.log(family);
 



// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
//   }
  
//   let user = makeUser();
// console.log(makeUser())





// let calculator = {
//     read(){
//         this.a=+prompt(0);
//         this.b=+prompt(0);
//     },
//     sum(){
//       return this.a+this.b;
//     },
//     mul(){
//         return this.a*this.b;
//     }
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );





// function BigUser() {

//   this.name = "John";

//   return { name: "Godzilla" };  // <-- returns this object
// }

// alert( new BigUser().name );  // Godzilla, got that object


// function Calculator(){
//   this.read=function(){
//     a= +prompt(),
//     b= +prompt()
//   }
//   this.sum = function(){
//     return a+b;
//   }
//   this.mul = function(){
//     return a*b;
//   }
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


// const person = {
//   name: ['Bob', 'Smith'],
//   age: 32,
//   gender: 'male',
//   interests: ['music', 'skiing'],
//   bio: function() {
//     console.log(this);
//     alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
//   },
//   greeting: function() {
//     alert('Hi! I\'m ' + this.name[0] + '.');
//   }
// };
// console.log(person.bio);



// ----------------------objects-------------------------------

// var a = new Object(1);
// var b = {b:2}
// function D(k){
//   var hidden = 67; //private variable not aaccessible by all, but we can access it through any public variable
//   this.k=k;
//   //console.log(this,"this inside D");
//   this.hidden=hidden
//   console.log(hidden,"private variable but accessible inside same function")
//   var hiddenFun = function(){
//     return hidden;
//   }
//   this.hiddenFun = hiddenFun();
//   var temp = {};
//   temp.hiddenFun = hiddenFun;
//   return temp;
// }
// var c = new D(3);
// var e = new D(9);
// // console.log(a);
// // console.log(b);
//  console.log(c.k,"public property of objectD");
// console.log(e.k,"public property of objectD");
// console.log(c.hidden,"accessing through public property of objectD in global space");
// console.log(c.hiddenFun,"accessing private method which is returning private var")
   


//   -----method/function inside object and accessing-----


// var noodles ={
//     veggies:'all',
//     sauce:true,
//     pizza : function(){
//         this.toppings = true;
//          this.crust = 'cheese';
        
//     }
 
// }
// console.log(noodles.veggies);
// var pizzaA = new pizza()

// console.log(noodles.pizzaA.crust);


// -----functional objects/ Methods and yo access its propertise------


//  var pizza = function(){
//             this.toppings = true;
//             Object.prototype.crust = 'cheese';
//             return this.crust;
//         }
//         //console.log(pizza())
// var pizzaA = new pizza()
// console.log(pizzaA);







// --------------Object.create()-------
// const abc = Object.create(Object.prototype)
// const def = Object.create(null)
// const xyz = {}
// console.dir(def)


// ----prototype chaining and extending constructor using object.create---

// const Car = function(){};
// Car.prototype = {
//     color:'red',
//     Brand:'TATA'
// }

// console.dir(Car)

// const ToyCar = function(){};
// ToyCar.prototype = Object.create(Car.prototype)
// ToyCar.prototype={
//     color: 'jugnu',
//     Brand: 'Archies'
// }

// console.dir(ToyCar)

 
// console.log(num+","+x)
// num = 6;
// var x = 7

// let a = [];
// console.log(Array.isArray(a));

// let arr = [1, 2, 3, 4, 5];

// arr.length = 2; // truncate to 2 elements
// alert( arr ); // [1, 2]

// arr.length = 5; // return length back
// alert( arr[3] ); // 

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  
//   alert( matrix[1][2] );
// var name = "divya";
// function Eng(){
//   this.name = "yashi"
// }

// // console.log(new Eng().name)
// Eng.__proto__.name="dhruvit";
// Eng.prototype.channel="google.com"
// console.dir(new Eng().name)
// //console.dir(new Eng().channel)
// function parseData(data) {
//   /* Some computation */
//   return data;
// };

// class User {
//   constructor(name, ...data) {
//     const parsedData = parseData(data);

//     this.name = name;
//     this.data = parseData;

//     return parsedData;
//   }

//   getData() {
//     return this.data;
//   }
// }

// const Yomesh = new User('Yomesh', {
//   youtubeChannel: 'https://bit.ly/devtools-yt',
//   shouldSubscribe: true
// });
// console.log(Yomesh.getData());

// const counter={
//   value:0,
//   increment:function(){
//    this.value+1;
//   }
// };

// value = this.value++;
// console.log(counter.increment())
// function Person(name) {
//   this.name = name;

//   function person() {
//     return {
//       name: 'Prithvi'
//     };
//   }

//   var person = {
//     name: 'Ajay'
//   };

//   var person = false;

//   return person;
// }

// var yomesh = new Person('Yomesh');
// console.log(yomesh);
// function Person(name) {
//   this.name = name;

//   function person() {
//     return {
//       name: 'Prithvi'
//     };
//   }

//   var person = {
//     name: 'Ajay'
//   };

//   return person;
// }

// var yomesh = new Person('Yomesh');
// console.log(yomesh);





// function Person(name) {
//   this.name = name;

//   function person() {
//     return {
//       name: 'Prithvi'
//     };
//   }

//   var person = {
//     name: 'Ajay'
//   };

//    var person = false;

//   return person;
// }

// var yomesh = new Person('Yomesh');
// console.log(yomesh);

// var a = 10;
// function abc(){
//    b = 2;
// console.log(b)
// }
// abc();
// console.log(b)

// console.log([1,2,3].flatMap(function tuple(v){
//    return [v*2,String(v*2)]

// function User(){
//    this.fname = "divya";
//    this.lname = "mishra";
//    this.gender = "male";
// }
// var user1 = new User();
// User.prototype.status = function(){
//    console.log(user1.fname+" high")
// }
// User.prototype.fullName = function(){
//   console.log(user1.fname+user1.lname)
// }
// console.log(user1.fullName())
// console.log(user1.status())
// console.log(User.prototype)



// var obj = {
//     a: {
//         b: {
//             c: 12,
//             j: false
//         },
//         k: null
//     }
// };

// function findPath(obj,str){
    // const keys = str.split(/[\.\[\]'"]/).filter(e => e);
    //const keys = str.split('.')
    // let ret = obj;
    
    // try {
    //   keys.forEach(key => {
    //     ret = ret[key];
    //   });
    //   return ret;
    // } catch(e) {
    //   return undefined;
    // }
    
//     return keys
//   }



// console.log(findPath(obj, 'a.b.c')); // 12
//  console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
//  console.log(findPath(obj, 'a.b.d')); // undefined
//  console.log(findPath(obj, 'a.c')); // undefined
//  console.log(findPath(obj, 'a.b.c.d')); // undefined
//  console.log(findPath(obj, 'a.b.c.d.e')); // undefined
//  console.log(findPath(obj, 'a.b.j')); //false
//  console.log(findPath(obj, 'a.b.j.k')); //undefined
//  console.log(findPath(obj, 'a.k')); //null

// function findPath(obj,str){
//  const keys = str.split('.');
//  keys.forEach(key => {
//      obj = obj[key]
//  });
//  return obj;
// }





// const obj = {
//    a:"divya",
//    b:function(){
//        console.log(this)
//    },
//    c:()=>{
//        console.log(this);
//    }
// }

// console.log(b.bind(obj))
// console.log(obj.c())
// let third = obj.b;
// let third1 = third.bind(obj)
// third1()
//third()

// obj.b()
// let a
// function abc(a){
    
//     console.log("first",a)
//     return((a)=>{
//        console.log("second",a)
//        return(function(){
//            console.log("third",this)
//        })
//     })
// }

// abc(5)(20)(50)
// function explicitBinding(){
//     console.log("Explicit Binding");
//   }
//   var obj = {
//       a: 2
//   };
  //explicitBinding.call(obj);

//   var Person = function() {
// 	return {
// 		name: "diya",
// 		age: 25,
// 		sayName: function() {
// 			console.log(this.name);
// 		},
// 		mother: {
// 			name: 'stacey',
// 			sayName: function() {
// 				console.log(this.name);
// 			}
// 		}
// 	};
// };

// var jim = Person();
// jim.sayName();			// this -> jim
// jim.mother.sayName();	

// console.log(++[[]][+[]]+[+[]])

// let name = {
//     fname : 'divya',
//     lname : 'mishra'
// }

// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Lydia';
//     let age = 21;
//   }
//   sayHi()


// console.log(function(log){
//   return () => log("HBD");
// })();

// let x = -123;
// let reverse = x.toString().split('').reverse().join('');
// console.log(reverse);
// foo();
// foo();
// function foo() {
//   console.log(3);
// }

// var foo = function() {
//   console.log(2);
// };

// function foo() {
//   console.log(1);
// }

// foo();
// foo()

// function xyz(x){

// x();
// console.log("inner")
// }
// xyz(function (){
//   console.log("callback");
// })

// const person1 = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// const person2 = {
//   firstName:"John",
//   lastName: "Doe",
// }
// let a =person1.fullName.apply(person2);
// console.log(a); 
// console.log(person1.fullName());



// const counter = {
//   count: 0,
//   next: function () {
    
//       return ++this.count;
//   }
// };

// console.log(counter.next());


// let car = {
//   brand: 'Honda',
//   getBrand: function () {
//       return this.brand;
//   }
// }

// let bike = {
//   brand: 'Harley Davidson'
// }

// let brand = car.getBrand.call(bike); // try call/apply/bind here to check the diff. basically if we want to invoke later sometime bind is used to invoke thr only call/apply
// console.log(brand());


// let getThis = () => 10;
// console.log(getThis())



// function Car() {
//   this.speed = 120;
// }

// Car.prototype.getSpeed = () => {
//   return this.speed;
// }

// var car1 = new Car();
// console.log(car1.getSpeed();


// const a=10;
// const b=20;
// var total=0;
// const sum= () => { for(i in sum){
//    total = total+i;
//   return total;
// } }
// console.log(sum(1,2,3));
// console.log(a.sum(1,2,3)); // 16
// console.log(b.sum(1,2,3,4,5)); // 35


// console.log(multiply(2)(3)(4)); // output : 24
// console.log(multiply(4)(3)(4)); // output : 48
// console.log(multiply()(3)(4)); // Invalid input
// console.log(multiply(4)("abc")(4)) // Invalid input

// function multiply(x){
//   return (function (y){
//      return (function (z) {
//        if(typeof(x=="number")&&typeof(y=="number")&&typeof(z=="number")){
//         return (x*y*z);
//        }
//        else{
//          return ("invalid input")
//        }
//      })
//   })
// }
// console.log(multiply(4)(5)(4));


// console.log( [1,2,3].concat([4,5,6])  );
// Number.prototype.sum = function (...args){
//   Yaha this = 10 
//   Then after args ke upper loop + this and return karne ka
//   }

// const a=10;
// const b=20;
// var total = 0;
// Number.prototype.sum= (...args) => {
//   console.log(a)
//   for(var i=0;i<=args.length;i++){
//     total+=i;
//   }
//   return total;
// }

// console.log(a.sum(1,2,3)); // 16
// console.log(b.sum(1,2,3,4,5)); // 35



// var abc = setTimeout(function(){
//   console.log("6")
//   return ;
// },1000)
// console.log(abc)
// console.log("abc")


// function createNewFunction(array){
//   let i=0;
//   function add2(){
//     const element = array[i]
//     i++;
//     return element;
//   }
//   return add2;
// }

// const newFunction = createNewFunction([2,3,4]);
// const result = newFunction();
// const result2 = newFunction();
// console.log("result=",result)
// console.log("result2=",result2)
// fetch('https://dummyjson.com/products/1')
// .then(data=>{
//   console.log(data,"data")
// })

// const array = [20,30,30,40,50,60,60,60];
// const array2 = [];
//  const aar3= array.filter((ele,index)=>{
//     if (array2.indexOf(ele)==-1){
//       array2.push(ele)
//     }
//     else {
//       return ele;
//     }
//   })
// console.log(aar3);

// Array.prototype.myFilter = function(callback){
//    var arr = [];
//    for(let i=0;i<this.length;i++){
//      if(callback.call(this,this[i],i)){
//        arr.push(this[i])
//      }
//    }
//    return arr
// }
// const array = [2,5,6,6,7];
// const greatest = array.myFilter(ele =>{
//    return ele>5;
// })
// console.log(greatest)

// Array.prototype.myMap = function(callbackfn){
//   var arr = [];
//   for(let i = 0;i<this.length;i++){
//     arr.push(callbackfn(this[i],i,this))
//   }
//   return arr
// }
// const array = [20,30,40,50,40,60,60,40]
// const array1 = array.myMap(ele=>{
//    return ele*2;
// })
// console.log(array1)
// let arr = [10,3,5,10,3,3,15,3]
// let uniqueArr= [];
// let duplicateElement=[];
// const dupli=arr.forEach((item)=>{
//     if(uniqueArr.indexOf(item)<0)
//     {
//         uniqueArr.push(item)
//     }
//     else if(duplicateElement.indexOf(item)<0)
//     {
//         duplicateElement.push(item)
//     }
// })
// console.log()




// call by value -- Primitive types(Number,String,null,undefined,Symbol,boolean)
// let a = 'shiyaa';
// let b = a;
// b = 'reena';
// console.log(a,"-original");
// console.log(b, "-copied");

// call by reference -- non-primitive (Object, Array, Function)

//array
// let c = [10, 20, 30, 40];
// let d = c;
// d[2] = 90;
// // console.log(c,"-original");
// // console.log(d, "-copied");

// //Object
// let obj1 = { a: 40, b: 50, c: {d:60} };
// let obj2 = Object.create({},obj1)
// // obj2.a=30
// // obj2.c.d=90


// console.log(obj1, '-original');
// console.log(obj2, '-copied');

// function(){
//   //... 
// }
// let a = setTimeout(()=>{
//   console.log("first")
//  },0)
//  let b = setTimeout(()=>{
//  console.log("second")
//  },1000)
//  let c = setTimeout(() => {
//    console.log("third with await")
//  }, 4000)
//  let d = setTimeout(()=>{
//  console.log("forth after await")
//  },3000)
 
// async function abc(){
//   console.log(a)
//   console.log(b)
// //  await console.log(c)
//   console.log(d)
// }
//   abc()


// function myPromise(){
//   let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      console.log("setTimeout")
//      resolve()
//     },2000)
//     setTimeout(()=>{
//       console.log("setTimeout rejected")
//       reject()
//      },1000)
//    })
//    promise.then(()=>{console.log("then")})
//    promise.catch(()=>{console.log("catch")})

//    return promise
// }

// myPromise()

// function wait () {
  
//    return res
// }

// // function waitr (){
 
// // }
// async function myAsync () {
//   const res =  new Promise((resolve,reject)=>{
//     setTimeout((()=>{
//      resolve('2 sec')
//       //console.log("sixth")
//      }),2000)
//    })
  
   
//    const result = new Promise((resolve,reject)=>{
//      resolve("third")
//      // console.log("third")
//    })
   
//   console.log("first")
//   const one = await res
//   console.log(one)
//   console.log("after 2sec")
//   const two = await result
//   console.log(two)
//   console.log("end")
// }
// myAsync()
//  console.log("second")


// const myPromise = () => Promise.resolve('I have resolved!');
 
// function firstFunction() {
//   myPromise().then(res => console.log(res));
//   console.log('second');
// }
 
// async function secondFunction() {
//   console.log(await myPromise());
//   console.log('second');
// }
 
// //firstFunction();
// secondFunction();
// const nums = [1,2,3,4]
// var runningSum = function(nums) {
//   let n = nums.length
//   // console.log(n,"n")
//   let arr = [n]
//   nums[0]=arr[0]
//   for(let i = 1; i < nums.length; i++){    
//           arr[i]=nums[i] + nums[i-1]
//           // console.log(arr[i],"arr[i")
//   }
//  console.log(arr)
// };


// runningSum(nums)


// constructor function

// function Car(name){
//   this.name = name 
// }
// let obj = {
//   name:'divya'
// }

// let taxi = new Car(obj)
// console.log(taxi)

// function Counter(){
// 	let count = 10
//  this.increment = function (){
// 	 count++
// 	console.log(count)
// }
//  this.decrement = function (){
// 	 count--
// 	console.log(count)
// }

// }

// let counter1 = new Counter()
// counter1.increment()
// counter1.decrement()

// function number (){
//     for(var i = 0; i<=5; i++){
//       function close(i){
//       setTimeout(function(){
//         console.log(i)
//       },i* 1000)
//     }
//      close(i) 
//     } 
// }

// number()


function validatePhone(phone) {
  var re = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
  return re.test(phone);
}
let userInput=2345;
let isValidPhone=validatePhone(userInput);
console.log(isValidPhone)
// $('#phone').on('keyup', function(){
// 	let userInput=$(this).val();
// 	let isValidPhone=validatePhone(userInput);
// 	if(isValidPhone) {
// 		//hide message code here
// 		$(this).parent().find('div:eq(0)').text('');
// 		//fire ajax from here and validate if exists
// 		$.ajax({
// 			type:'post',
// 			url: '',
// 			data: JSON.stringify({}),
// 			success: function(response) {
// 				console.log('response: ', response)
// 			},
// 			error: function(error) {
// 				console.log('error: ', error)
// 			}
// 		})
// 	} else {
// 		//show message code here
// 		$(this).parent().find('div:eq(0)').text('Invalid Phone Number').css('color','red')
// 	}
// })


function fact(num){
  let product = 1;
  while(num>1){
    console.log(product)
    product = num*fact(num-1)
  }
  return product
}

console.log(fact(5))