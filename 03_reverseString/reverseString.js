const reverseString = function(str) {
    let temp,bottomIndex=0,topIndex=str.length-1;
    if (str.length % 2 == 0){
        for(let i=0;i<(str.length)/2;i++){
            console.log(str);
            temp=str[bottomIndex];
            str[bottomIndex]=str[topIndex];
            str[topIndex]=temp;
            bottomIndex+=1;
            topIndex-=1;
        };return str;
    }else{
        for(let i=0;i<(str.length-1)/2;i++){
            console.log(str);
            temp=str[bottomIndex];
            str[bottomIndex]=str[topIndex];
            str[topIndex]=temp;
            bottomIndex+=1;
            topIndex-=1;
        };return str;
    }
    
};

// Do not edit below this line
module.exports = reverseString;
