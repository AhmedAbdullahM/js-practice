// 

var numbers=[23, 25, 26, 35, 44, 45,100,78,88,33];

numbers.push(200)
for(var i=0; i<numbers.length; i++){
    var number=(numbers[i]);
    if(number>70){
        continue;
    }
    console.log(number)
}

