const convertToCelsius = function(F) {
  const initCalc=(F-32)*(5/9);
  let divider=1;
  let cnt=0;
  while(Math.trunc(initCalc) % divider===0){
    console.log(cnt);
    divider*=10;
    cnt+=1;
    console.log(cnt);
    
  }
  return parseFloat(initCalc.toPrecision(cnt));
};
console.log(convertToCelsius(100));

const convertToFahrenheit = function(C) {
  const initCalc = C*(9/5)+32;
  let divider=1;
  let cnt=0;
  while(Math.trunc(initCalc) % divider===0){
    divider*=10;
    cnt+=1;
  }
  return parseFloat(initCalc.toPrecision(cnt));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
