/*
 * Author: Kimiko Yamaguchi
 * Created: May 8th, 2025
 * License: public domain
 */

let array = [4,12,36,45,69,72,83]
console.log("My array:", array);

function squareRoot(x){
    var results = x * x
    return results;
}

var sqrtResults = array.map(squareRoot);
console.log("Results: ", sqrtResults);

var mapResults = array.map(function(x) {
    var results = x / 17
    return results;
})

console.log("Results: ", mapResults)