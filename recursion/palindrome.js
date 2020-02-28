// Write a recursive function to check if a string is a palindrome or not.
function isPalindrome(string) {
  string = string.toLowerCase();
  if (string.length <= 1) {
    return true;
  }
  if (string[0] !== string[string.length-1]) {
    return false;
  } 
  return isPalindrome(string.substr(1, string.length-2))
}
isPalindrome("Kayak")    // => true
isPalindrome("NEVERODDOREVEN")    // => true
isPalindrome("Tacocat")    // => true
isPalindrome("SELFLESS")    // => false