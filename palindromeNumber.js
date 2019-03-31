/*

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward 
as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. 
Therefore it is not a palindrome.

    PSEUDO CODE:
        - convert num to string and split it 
        - variables:
            str = num.toString()
            start = 0
            end str.length-1
        - while(s < e) {
            check if s != e return false
            else s++ e--
        } 
        - at the end return true
*/
var isPalindrome = function(x) {
    let str = x.toString().split(''),
        start = 0,
        end = str.length-1;
    while(start <end) {
        if(str[start] != str[end]) {
            return false;
        }
        else {
            start++;
            end--;
        }
    }
    return true;
};
isPalindrome(121); //true
isPalindrome(-121); //false
