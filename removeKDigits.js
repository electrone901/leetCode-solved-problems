/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 
 Input: num = "1432219", k = 3

 Time Complexityt: n * m quite slow
 Space Complexityt: 0(1)
 */
var removeKdigits = function(num, k) {

    while(k > 0) {
        let n = num.length;
        let i = 0;
        // check if the cur is <= next if dont stops looping & deletes the val[i], & k--
        while(i + 1 < n && parseInt(num[i]) <= parseInt(num[i+1])) {
            i++;
        }
        
        // split the numArr & remove the big number & join back
        num = num.split('');
        num.splice(i,1);
        num = num.join("");
        k--;
    }
    
    // we need to remove leading 0
    let counter = 0;
    while(counter < num.length && num[counter] === '0') counter++;
    num = num.split('');
    num.splice(0, counter);
    num = num.join("");
    return  num;
};
removeKdigits("1432219", 3);//1219
removeKdigits("10200", 1);//200
