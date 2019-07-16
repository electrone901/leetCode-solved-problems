/**
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:
s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

    PSEUDO CODE:
        create:
            tempNum = []
            number = []
            string = []
        - loop through i=0 to s.length
            if(s[i] == number) then tempNum.push(s[i])

            else {
                for edge cases we need to check if:
                    - if cur itsn't a numb then we need to clean/format our numbers and reset our tempNum 
                    - if cur = ] then:
                        pop everything & add it to string until cur = [
                        let tempStr = '';
                        let cur = string.pop();
                        while(!cur.match(/\[/)) {
                            tempStr = cur + tempStr;
                            cur = string.pop();
                        }
                        pop everything & add it to string until cur = [
                push it to  string.push(s[i])
            }
 */
var decodeString = function(s) {
    let temp_Num = [];
    let number = [];
    let string = [];
    
    for(let i = 0; i < s.length; i++) {
        // if it's num then push it to stack_Num
        if(s[i].match(/\d/)) {
            temp_Num.push(s[i]);
        }
        else {
            
            // if cur itsn't a numb then we need to clean our numbers and reset our temp_Num stack 
            if(temp_Num.length > 0) {
                number.push(temp_Num.join(""));
                temp_Num = [];
            }
            
            // if it's ], pop it & add it to result until cur = [
            if(s[i].match(/\]/)) {
                let tempStr = '';
                let cur = string.pop();
                while(!cur.match(/\[/)) {
                    tempStr = cur + tempStr;
                    cur = string.pop();
                }
                
                // use the number in the stack, Number() converst data type to numb
                let tempNumToNum = Number(number.pop());
                while(tempNumToNum > 0 ) {
                    string.push(tempStr);
                    tempNumToNum--;
                }
            }
            else {
                string.push(s[i]);
            }
        }
         
    }
    console.log('string', string)
    return string.join("");
};







