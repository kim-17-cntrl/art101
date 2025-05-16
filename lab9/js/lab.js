/*
 * Author: Kimiko Yamaguchi
 * Created: May 12th, 2025
 * License: public domain
 */


$("#Yippee").click(function(){
    $("#challenge").toggle();
    $("#challenge").toggleClass("special");
});

$("#ahhh").click(function(){
    $("#problem").toggle();
    $("#problem").toggleClass("special");
});

$("#woah").click(function(){
    $("#results").toggle();
    $("#results").toggleClass("special");
});