const findTheOldest = function(people) {
    let difArray=[];
    let birthYears=[];
    for(let i=0;i<people.length;i++){
        difArray.push(people[i].yearOfDeath-people[i].yearOfBirth);
        birthYears.push(people[i].yearOfBirth);
    }
    for(let j=0;j<difArray.length;j++){
        if(Number.isNaN(difArray[j])){
            difArray[j]=1;
        }
    }
    if(difArray.includes(1)==true){
        if(birthYears[difArray.indexOf(1)]==Math.min.apply(null,birthYears)){
            return people[difArray.indexOf(1)];
        }else{
            return people[difArray.indexOf(Math.max.apply(null,difArray))];
        }
    }else{
        return people[difArray.indexOf(Math.max.apply(null,difArray))];
    }
}


// Do not edit below this line
module.exports = findTheOldest;
