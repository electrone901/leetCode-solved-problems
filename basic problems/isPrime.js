/*
Prime - Challenge:

The function `prime(num)` accepts a number argument and returns the boolean `true` if the number is a prime number otherwise it returns return `false`. 

Examples:


- INPUT: prime(5);
- OUTPUT: true


- INPUT: prime(10);
- OUTPUT: false


*/

// Write Code Below
function prime(num) {
  for (let i = 2; i < num - 1; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
prime(10); //false
