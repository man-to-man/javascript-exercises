const fibonacci = function(n) {
    n=parseInt(n);
    if(n>=0){
        let sum=0;
        let s=[0,1];
        for(let i=1;i<=n-1;i++){
            console.log(s);
            sum+=s[i-1]+s[i];
            s.push(sum)
            sum=0;
        }
        if(n!==0){
            return s[s.length-1];
        }else{
            return s[0];
        }
            
    }else{
        return 'OOPS';
    }
    
};
// Do not edit below this line
module.exports = fibonacci;
