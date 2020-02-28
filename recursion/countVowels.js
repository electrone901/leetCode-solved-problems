// Count Vowels
// Write a function that accepts a string and returns the number of vowels in that string. Use recursion.
// compare the first letter to the vowels array to determine if it's a vowel, then run the rest of the string through recursion, until the string is empty, so my base case will be when there isn't a string left
function countVowels(string) {
    var vowels = ['a','e','i','o','u'];
    var count = 0;
    
    if (!string.length) {
      return count;
    }
    if (vowels.indexOf(string[0]) > -1) {
      count++;
    } 
    return count + countVowels(string.substr(1));
  }
  // countVowels('Four score and seven years')    // => 9
  
  function countVowelsRecursive(str){
    str = str.toLowerCase();
    let count = 0;
    let vowels = 'aeiou';
  
    if(str.length === 0) return count;
    else if(vowels.includes(str[0])) {
      count++;
      return count + countVowelsRecursive(str.slice(1));
    }
    else {
      return countVowelsRecursive(str.slice(1));
    }
  }
  // countVowelsRecursive('Four score and seven years')