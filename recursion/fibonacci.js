/*
Fibonacci
Create a function that takes a number n and returns the nth number in the Fibonacci sequence. The Fibonacci sequence is a series of numbers in which each number is the sum of the two numbers preceding it.

ex: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55....
the base case is when n is 1 and n is 2 because they both equal 1 and fibonacci n is the sum of fibonacci n-1 and fibonacci n-2

*/

function fibonacci(n) {
  if ((n === 1) || (n === 2)) {
    return 1;
  }
  return fibonacci(n-1) + fibonacci(n-2);
}
function fibonacci(num) {
  if(num <= 2) return 1;
  else {
    return fibonacci(num-1) + fibonacci(num-2);
  }
}
fibonacci(6);// => 8