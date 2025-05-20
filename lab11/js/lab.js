/*
 * Author: Kimiko Yamaguchi
 * Created: May 19th, 2025
 * License: public domain
 */

function sortString(inputString) {
    return inputString.split('').sort().join('');
  }

$("#submit").click(function(){
    const userName = $("#user-name").val();
    userNameSorted = sortString(userName);
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});

