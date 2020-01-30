/*

*/
var minFlips = function(a, b, c) {
    // convert to binary
    a = a.toString(2);
    b = b.toString(2);
    c = c.toString(2);
    // get max to loop throug and normalize arrays
    let n = Math.max(a.length, b.length, c.length);
    
    a = normalize(a,n);
    b = normalize(b,n);
    c = normalize(c,n);
    
    return flips(a, b, c,n)
};
// then just check for:
//     if c[i] == 0 then if a[i]!= 0 count++ , if b[i]!= 0 count++ 
//     if c[i] == 1 then if a[i]!= 1 && b[i]!= 1 count++ 
function flips(a, b, c,n){
    let count = 0;
    for(let i = 0; i < n; i++) {
        if(c.charAt(i) =='0') {
            if(a.charAt(i) !='0') count++;
            if(b.charAt(i) !='0') count++;
        }
        
        else if(c.charAt(i) =='1') {
            if((a.charAt(i) =='0') && (b.charAt(i) =='0')) count++;
        }
    }
    return count;
}

function normalize(s,max) {
    if(s.length == max) return s;
    
    let str = '',
        diff = max - s.length;
    
    while(diff != 0) {
        str += '0';
        diff--;
    }
    str += s;    
    return str;
}

console.log(minFlips(4,2,7));//=>1



