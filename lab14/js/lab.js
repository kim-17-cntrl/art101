/*
 * Author: Kimiko Yamaguchi
 * Created: May 26th, 2025
 * License: public domain
 */

var numbers = [];

function add_more() {
    // Get user inputs
    let num = Number(document.getElementById('result').value);
    numbers.push(num);
    document.getElementById('output').innerHTML = "Numbers: " + numbers.join(", ");
    document.getElementById('result').value = "";
}

function average() {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    let avg = sum / numbers.length;
    document.getElementById('output').innerHTML += "<br>Average: " + avg;
  }