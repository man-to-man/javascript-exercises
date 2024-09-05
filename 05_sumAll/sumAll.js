const sumAll = function(start,end) {
    let ans=0;
    let operand=start;
    if(Number.isInteger(start) && Number.isInteger(end) && start>0 && end>0){
        if(start>end){
            
            while(operand>=end){
                ans+=operand;
                operand-=1;
            }
        }else{
            while(operand<=end){
                ans+=operand;
                operand+=1;
            }
        }return ans;
    }else{
        return 'ERROR';
    }

    
};
console.log(sumAll(-10,4));
// Do not edit below this line
module.exports = sumAll;
