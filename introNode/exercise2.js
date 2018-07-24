//Node exercise

//define function average()
//takes a single parameter: an array of all test schoes
//returns the averate score in the array rounded


var scores = [90, 98, 89, 100, 100, 86, 94]
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49]
function average (values) {
    var sum = 0;
    for (var i=0; i<values.length; i++) {
        sum += values[i];
    }
    return Math.round(sum/values.length);
}

console.log(average(scores));
console.log(average(scores2));
