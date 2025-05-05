/*
 * Author: Kimiko Yamaguchi
 * Created: May 5th, 2025
 * License: public domain
 */

//takes user input and splits it apart into componets, sorts, and rejoins.
function sortUserName(userName) {
    return userName.split('').sort().join('');

}

let yourName = window.prompt("Please enter your name:");
let sortedName = sortUserName(yourName);

console.log(sortedName)

//output
document.writeln("Here's your name sorted alphabetically: " +
    sortedName + "</br>");