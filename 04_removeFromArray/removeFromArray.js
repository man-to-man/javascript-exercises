const removeFromArray = function(arr, ...toErase) {
    newArr=[];
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<toErase.length; j++){
            if((toErase.includes(arr[i])===false)&&(newArr.includes(arr[i])===false)){
                newArr.push(arr[i]);
            };
        };
    }
    return newArr;
};
console.log(removeFromArray([1,2,3,4],3,2))
// Do not edit below this line
module.exports = removeFromArray;
