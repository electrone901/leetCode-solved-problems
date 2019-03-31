/** 
Reverse Integer

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:
    Input: 123
    Output: 321

Example 2:
    Input: -123
    Output: -321

Example 3:
    Input: 120
    Output: 21


    PSEUDO CODE:
        - declare variables:
            result;
            max = 2 ** 31 -1  => represents 32Bits positive
            min = -1 * 2 ** 31  => represents 32Bits negative
            str = convert num to str, split, reverse, join & multiply with sign to get the sign use Math.sign(num)
        - check if(res> max || res < min) return 0
        - else return res
*/
function reverseInteger(num) {
    let max = 2 ** 31 -1;
    let max = -1 * 2 ** 31;
    let str = num.toString().split('').reverse.join('');
    let result = str * parseInt(num);
    if(result > max || result < min) {
        return 0;
    }
    else {
        return result;
    }
}
