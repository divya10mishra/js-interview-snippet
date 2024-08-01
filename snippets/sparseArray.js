let strings = ['ab','ab', 'abc']
let queries = ['ab','abc','bc']

function sparseArray(strings,queries){
  let memory = []
  for(let value of strings){
    memory[value] = (memory[value] || 0)+1
  }
  console.log(memory,"memory") // [ab:2,abc:1]
  return queries.map((query)=>{
    return memory[query]||0
  })
}
console.log(sparseArray(strings,queries))

//output = 2,1,0
//problem = no. of times strings ocurrences in queries
//logic = allocate memory array which will take counts of each item occurences in strings. If the string is encountered for the first time, initialize its count to 0, 
//if occurred again increment it with +1 (line7)
