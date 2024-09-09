const data = [{
    name:'Zalice',
    grades:{Maths:20,English:50,History:78}
},
{
    name:'Bob',
    grades:{Maths:20,English:50,History:78}
},
{
    name:'Megha',
    grades:{Maths:20,English:50,History:78}
}]

// output : {
//     Maths:[{name:'Alice', grade: 20},{name:'Bob', grade: 20},{name:'Megha', grade: 20}],
//     English:[{name:'Alice', grade: 20},{name:'Bob', grade: 20},{name:'Megha', grade: 20}],
//     History:[{name:'Alice', grade: 20},{name:'Bob', grade: 20},{name:'Megha', grade: 20}]
// }


function transform(data){
 let result = {}
 
//  data.forEach(student=>Object.entries(student)
//  .forEach(([sub,grade])=>{
//      if(!result[sub]) result[sub] = []
//      result[sub].push({name:student.name,grade:grade})
//  }))

data.reduce((acc,curr)=>{
    Object.entries(curr.grades).forEach(([sub,grade])=>{
        if(!acc[sub]){
            acc[sub]=[]
        }
        acc[sub].push({name:curr.name, grade})
    })
    
 //   console.log(acc,"acc")
  
    return acc
},result)
 
 console.log(result,"result")
 
 let sorted = {}
 
 Object.entries(result).map(([sub,obj])=> 
 sorted[sub]=obj.sort((a,b)=>a.name.localeCompare(b.name))
    )

 
 console.log(sorted,"sorted")
}

transform(data)



//output:


{
  Maths: [
    { name: 'Zalice', grade: 20 },
    { name: 'Bob', grade: 20 },
    { name: 'Megha', grade: 20 }
  ],
  English: [
    { name: 'Zalice', grade: 50 },
    { name: 'Bob', grade: 50 },
    { name: 'Megha', grade: 50 }
  ],
  History: [
    { name: 'Zalice', grade: 78 },
    { name: 'Bob', grade: 78 },
    { name: 'Megha', grade: 78 }
  ]
} result


{
  Maths: [
    { name: 'Bob', grade: 20 },
    { name: 'Megha', grade: 20 },
    { name: 'Zalice', grade: 20 }
  ],
  English: [
    { name: 'Bob', grade: 50 },
    { name: 'Megha', grade: 50 },
    { name: 'Zalice', grade: 50 }
  ],
  History: [
    { name: 'Bob', grade: 78 },
    { name: 'Megha', grade: 78 },
    { name: 'Zalice', grade: 78 }
  ]
} sorted

=== Session Ended. Please Run the code again ===












