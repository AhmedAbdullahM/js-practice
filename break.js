// for (var i=1; i<=20; i++){
//     console.log(i)

//     if(i>10){
//         break;
//     }
// }

// var roastGiven=0;
// while(roastGiven<10){
//     console.log('Give the roast,gift has brought');
//     roastGiven++;
//     if(roastGiven > 4){
//         break;
//     }
// }

// var items=['sun', 'moon', 'fan', 'ball', 'bell', 'bottle'];

// for(var i=0; i<items.length; i++){
//     var item=items[i];
//     if (item=='bell'){
//         break;
//     }
//     console.log(item);
// }

var numbers=[23, 25, 26, 35, 44, 45,100,78,88,33];

numbers.push(200)
for(var i=0; i<numbers.length; i++){
    var number=(numbers[i]);
    if(number==100){
        break;
    }
    console.log(number)
}

