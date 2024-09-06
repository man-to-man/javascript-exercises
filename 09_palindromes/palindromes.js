const palindromes = function (str) {
    let format=[];
    for(const ch of str){
        if(ch.match(/^[a-zA-Z0-9]+$/g)){
            format.push(ch.toLowerCase());
        }
    }
    let n=format.length;
    console.log(format);
    console.log(format.slice(0,Math.floor(n/2)+1));
    console.log(format.slice(Math.floor(n/2),n).reverse());
    if(n%2!==0){
        if(format.slice(0,Math.floor(n/2)+1).join('')
            ===
        format.slice(Math.floor(n/2),n).reverse().join('')){
            return true;
        }else{
            return false;
        }
    }else{
        if(format.slice(0,(n/2)).join('')
            ===
        format.slice((n/2),n).reverse().join('')){
            return true;
        }else{
            return false;
        }
    }
}
console.log(palindromes('r3ace3car'));
// Do not edit below this line
module.exports = palindromes;
