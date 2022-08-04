// string type variable
var bottle='water';
var bottleColor='yellow';
// Number type variable
var sunglassPrice=120;

// Bulean type variable

var isExpensive=true;

var tableItems=['bottle','pen', 'eyeglass', 'mouse', 'headphone'];

var item3=tableItems[3];

tableItems[2]='Keyboard';

var headphoneIndex=tableItems.indexOf('headphone');
var phoneIndex=tableItems.indexOf('phone');

//conditionals

if(tableItems.length<6){
    
    if(tableItems.length<9){
        console.log('we re right');
    }
    console.log('buy more');
}
// console.log(phoneIndex)