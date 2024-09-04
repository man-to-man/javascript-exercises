const reverseString = function(str) {
    arr=str.split('');
    let temp,bottomIndex=0,topIndex=arr.length-1;
    if (arr.length % 2 == 0){
        for(let i=0;i<(arr.length)/2;i++){
            console.log(arr);
            temp=arr[bottomIndex];
            arr[bottomIndex]=arr[topIndex];
            arr[topIndex]=temp;
            bottomIndex+=1;
            topIndex-=1;
        };return arr.join('');
    }else{
        for(let i=0;i<(arr.length-1)/2;i++){
            console.log(arr);
            temp=arr[bottomIndex];
            arr[bottomIndex]=arr[topIndex];
            arr[topIndex]=temp;
            bottomIndex+=1;
            topIndex-=1;
        };return arr.join('');
    }
    
};

// Do not edit below this line
module.exports = reverseString;
