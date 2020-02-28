// Liftoff - write a function that prints the numbers n to 1 and then 'Liftoff!' using recursion.
function liftoff(n) {
  
  if (n > 0) {
    console.log(n);
    liftoff(n-1);
  } else {
    console.log('Liftoff!')
  }
}

liftoff(8);