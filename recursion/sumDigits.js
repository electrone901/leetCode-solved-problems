// Sum Digits
// Write a function that sums all the digits of a given integer (assume positive). Use recursion.
function sumDigits(num) {
  var numString = num.toString();
  var sum = 0;
  
  if (numString.length === 1) {
    sum += parseInt(numString);
  } else {
    sum = sum + parseInt(numString[0]) + sumDigits(parseInt(numString.slice(1)));
  }
  return sum;
}
sumDigits(1234);// => 10
