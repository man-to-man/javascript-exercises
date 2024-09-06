const convertToCelsius = function(F) {
  const initCalc=(F-32)*(5/9);
  let copyCalc=initCalc;
  let cnt=0;
  while(Math.trunc(copyCalc)!==0){
    copyCalc/=10;
    cnt+=1;
    console.log(cnt);
  }
  return parseFloat(initCalc.toPrecision(cnt+1));
};
console.log(convertToCelsius(-100));

const convertToFahrenheit = function(C) {
  const initCalc = C*(9/5)+32;
  let copyCalc=initCalc;
  let cnt=0;
  while(Math.trunc(copyCalc)!==0){
    copyCalc/=10;
    cnt+=1;
    console.log(cnt);
  }
  return parseFloat(initCalc.toPrecision(cnt+1));
};
console.log(convertToFahrenheit(-10));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
