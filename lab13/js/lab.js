/*
 * Author: Kimiko Yamaguchi
 * Created: May 26th, 2025
 * License: public domain
 */

function fizzBuzzBoom() {
    let oneLongString = "";
  
    for (let i = 1; i <= 200; i++) {
      let str = "";
  
      if (i % 3 === 0) str += "Fizz";
      if (i % 5 === 0) str += "Buzz";
      if (i % 7 === 0) str += "Boom";
  
      oneLongString += i + ": " + (str || i) + "!<br>";
    }

    $("#output").html(oneLongString);
  }
  
  fizzBuzzBoom();