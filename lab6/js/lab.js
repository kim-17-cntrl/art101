/*
 * Author: Kimiko Yamaguchi
 * Created: April 28th, 2025
 * License: public domain
 */

// Define Variables

myTransport = ["car", "bike", "walking", "bus"];

myMainRide = {
  make : "Toyota",
  model : "camry",
  color : "green",
  year : 2014,

  age : function() {
    return 2025 - this.year;
  }
}

//output
document.writeln("One way I get around is by: " + myTransport[1] + "<br>");
document.writeln("Another way I get around is by: " + myTransport[2] + "<br>");
document.writeln("Another way I get around is by: " + myTransport[3] + "<br>");
document.writeln("Another way I get around is by: " + myTransport[4] + "<br>");

document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

