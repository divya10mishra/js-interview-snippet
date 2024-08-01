//recursive currying

function prod(a) {
  let calc = a;
  return function inner(b) {
    if (b === undefined) {
      return calc;
    } else {
      calc = calc * b;
      return inner; //do not call only pass the reference of inner function otherwise it will react the max call stack
    }
  };
}
console.log(prod(5)(2)(4)(3)()); //120

//-------------------------------------------------------------------------------------------------------------------------------------
