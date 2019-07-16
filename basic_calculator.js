/*
Basic Calculator
Implement a basic calculator to evaluate a simple expression string.

The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, 
non-negative integers and empty spaces .

Example 1:
Input: "1 + 1"
Output: 2


Example 2:
Input: " 2-1 + 2 "
Output: 3


Example 3:
Input: "(1+(4+5+2)-3)+(6+8)"
Output: 23
Note:
You may assume that the given expression is always valid.
Do not use the eval built-in library function.

PSEUDO CODE:
    - always try to use a data structure and break down the problem
    - for this problem we have:
        open parethesis
        close parethesis
        spaces
        the plus +
        minus sign -
        number
    - initialized var:
        stack = []
        result = 0
        number = 0
        sign = 1

    - loop through the string check for:
        if is number:
            calculateNum = 10 * calculateNum + curVal //in case is more then 1 digit. Ex: 123
            if(cur == numb) 
            num = 10 * number + Number(cur) convert cur to number 
        if(cur == "+")
            result += sign * number //get the number  with sign
            number = 0;
            sign = 1
        if(cur == "-")
            result += sign * number //get the number  with sign
            number = 0;
            sign = -1
        if(cur == "(")
            push res to the stack then sign & reset number =0, sign=1 so we can calculate the inside parenthesis
            stack.push(result)
            stack.push(sign)
            number = 0;
            sign = 1
        if(cur == ")")
            result += sign * number
            number = 0;
            result * = stack.pop(); // get sign & multiplite it by cur result 
            result += stack.pop(); //then get the prev result & add it to the cur result

    outside the loop check if number !==0  
        if(number !== 0)
            result += sing * number
    return result
*/
function calculator(s) {
    if(s.length === 0) return 0;

    s = s.replace(/\s/g,'');// remove space

    let stack = [],
        result = 0,
        number = 0,
        sign = 1;
    for(let i = 0; i < s.length; i++) {
        let cur = s[i];

        if(!isNaN(cur)) {
            number = 10 * number + Number(cur);
        }

        else if(cur === "+") {
            result += sign * number;
            number = 0;
            sign = 1;
        }

        else if(cur === "-") {
            result += sign * number;
            number = 0;
            sign = -1;
        }
        
        else if(cur === "(") {
            // push result to stack first then sign so we can use it later to calculate the inside parenthesis
            stack.push(result);
            stack.push(sign);
            // reset number & sign
            number = 0;
            sign = 1;
        }

        else if(cur === ")") {
            result += sign * number;
            number = 0;
            // get sign & multiply it with the current result
            result *= stack.pop();
            // get the prev result & add it to the cur result
            result += stack.pop();
        }
    }
    if(number !== 0) result += sign * number;
    return result;
}

