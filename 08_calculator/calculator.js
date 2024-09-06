const add = function(op1,op2) {
	return op1+op2
};

const subtract = function(op1,op2) {
	return op1-op2
};

const sum = function(arr) {
  let ans=0;
	for(const num of arr){
    ans+=num;
  }return ans;
};

const multiply = function(arr) {
  let ans=arr[0];
	for(let i=1;i<arr.length;i++){
    ans*=arr[i];
  }return ans;
};

const power = function(base,ex) {
	return base*(base**(ex-1))
};

const factorial = function(fact) {
  let ans=fact;
  if(fact===0){
    return 1;
  }else{
    for(let i=fact-1; i>1; i--){
      ans*=i;
      console.log(ans+'!');
    }
    return ans;
  }
};
console.log(factorial(5));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
