//  snippet-1
 
 const a=10;
 const b=20;
 Number.prototype.sum= function(...args){
 args.reduce((acc,current)=>{
 return acc + current;
},this)
} 
console.log(a.sum(1,2,3))//16
console.log(b.sum(1,2,3,4,5))//35 

// snippet-2

var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

function findPath(obj,str){
 }
console.log(findPath(obj, 'a.b.c')); // 12
console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
console.log(findPath(obj, 'a.b.d')); // undefined
console.log(findPath(obj, 'a.c')); // undefined
console.log(findPath(obj, 'a.b.c.d')); // undefined
console.log(findPath(obj, 'a.b.c.d.e')); // undefined
console.log(findPath(obj, 'a.b.j')); //false
console.log(findPath(obj, 'a.b.j.k')); //undefined
console.log(findPath(obj, 'a.k')); //null

// snippet-3

function sumDigits(n)
{
   
    
    return sum;
}

var sum = sumDigits(1235231);


// snippet-4   --  frequency of each character

function frequency(str){
    let str1 = str.toLowerCase();
    let arr = str1.split('');
    
    for(let i = 0;i<arr.length;i++){
      let count = 0;
      for(let j=0;j<arr.length;j++){
        if(arr[i]==arr[j] && i>j)
          break;
        
        else if(arr[i]==arr[j])
          count++;
      }
      if(count>0)
       console.log(count+arr[i])
    }
   }
frequency("Elements") // e3 l1 m1 n1 t1 s1
frequency("weerty") // w1 e2 r1 t1 y1 


// snippet-5   --  longest string with total length

function longestString(){

}
longestString(abcddgft)// abcd-4
