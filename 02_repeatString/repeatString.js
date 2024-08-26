const repeatString = function(str,iter) {
    if(iter<0){
        return 'ERROR';
    }else{
        out_str="";
    for(let i=0;i<iter;i++){
        out_str+=str; 
    }
    return out_str;
    }
};
console.log(repeatString('hey',3));
// Do not edit below this line
module.exports = repeatString;
