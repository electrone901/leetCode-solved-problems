/*
Count and Say

The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.
Example 1:

Input: 1
Output: "1"
Example 2:

Input: 4
Output: "1211"

    PSEUDO CODE:
    1 - It's important to reliaze it always start with 1 because if we find 2 that means = 'one'2 => '12'
        therefore have a str = 1;
    2 - Loop through the num & everytime you loop
        2.1
        split the str: strArr = str.split(')
        str = ''
        count = 1

        2.2 
        Loop through the strArr & everytime you loop:
        check if(strArr[j] !== strArr[j+1]) {
            str += count + strArr[j] ;
            count = 1;
        }
        else {
            count++;
        }
    3 - return str;
*/
var countAndSay = function(num) {
    if (num === 1) return '1';

    let str = '1';
    for (let i = 0; i < num; i++) {
        let strArray = str.split('');
        str = '';
        let count = 1;

        for (let j = 0; j < strArray.length; j++) {
            if (strArray[j] !== strArray[j + 1]) {
                str += count + strArray[j];
                count = 1;
            } else {
                count++;
            }
        }
    }
    return str;
}
countAndSay(4); //Output: "1211"