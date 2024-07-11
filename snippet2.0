//recursive currying

function prod(a){
    let calc = a
   return function inner(b){
       if(b===undefined){
          return calc
       }else{
           calc = calc*b
           return inner //do not call only pass the reference of inner function otherwise it will react the max call stack
       }
      
   }
    
}
 console.log(prod(5)(2)(4)(3)())//120

 //-------------------------------------------------------------------------------------------------------------------------------------


 //print array of all string values
 let obj = {
    student:'divya',
    parents:{
        mother:'sandhya',
        father:'deepu'
    },
    education:{
        college:{
            highschool:'lps',
            inter:'dps',
            graduation:{
                under:'national',
                post:'sastra'
            }
        }
    }
}

let arr = []
function makeArray(obj){
     Object.values(obj).map((item)=>{
        if(typeof item == 'string'){
            arr.push(item)
        }
        if(typeof item == 'object'){
            makeArray(item)
        }
    })
    
    
}
makeArray(obj)//['divya',  'sandhya','deepu',  'lps','dps','national,'sastra']
console.log(arr)
 
