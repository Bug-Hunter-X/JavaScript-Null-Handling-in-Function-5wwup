function foo(a, b) {
  // Handle null or undefined using nullish coalescing
  a ??= 0; 
  b ??= 0;

  //check for other invalid inputs and return error
  if(typeof a !== 'number' || typeof b !== 'number'){
    return "Error: Inputs must be numbers";
  }
  return a + b; 
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo("a", 2)); //Output: Error: Inputs must be numbers