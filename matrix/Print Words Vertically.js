/*
Given a string s. Return all the words vertically in the same order in which they appear in s.
Words are returned as a list of strings, complete with spaces when is necessary. (Trailing spaces are not allowed).
Each word would be put on only one column and that in one column there will be only one word.

 

Example 1:

Input: s = "HOW ARE YOU"
Output: ["HAY","ORO","WEU"]
Explanation: Each word is printed vertically. 
 "HAY"
 "ORO"
 "WEU"
Example 2:

Input: s = "TO BE OR NOT TO BE"
Output: ["TBONTB","OEROOE","   T"]
Explanation: Trailing spaces is not allowed. 
"TBONTB"
"OEROOE"
"   T"
Example 3:

Input: s = "CONTEST IS COMING"
Output: ["CIC","OSO","N M","T I","E N","S G","T"]

*/


// find max
function findMax(str) {
    let max = 0;
    for(let word of str) {
        if(word.length > max) max = word.length;
    }
    return max;
}

var printVertically = function(str) {
    str = str.split(" ");  //split string into an array
    let result = []; 
    let max = findMax(str);
    
    for (let i=0;i < max; i++) { //loop as many times as max cause thats the number of words we should get 
        let res = "";
        
        for(let k of str) {
            if( i < k.length) {
                res += k[i];
            } else {
                res += " ";
            }
        }
        let len = res.length; // Remove trailing spaces
        for (let x = res.length-1; x>=0 ;x--) {
            if(res[x] != ' '){
                len=x;
                break;
            }
        }
        result.push(res.substring(0,len+1));
    }
    return result;
    
}