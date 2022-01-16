//  snippet-1
 
 const a=10;
 const b=20;
 Number.prototype.sum= function(...args){
 return args.reduce((acc,current)=>{
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