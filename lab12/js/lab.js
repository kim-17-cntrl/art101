/*
 * Author: Kimiko Yamaguchi
 * Created: May 22th, 2025
 * License: public domain
 */

function sortingHat(str) {
    const mod = str.length % 4;
    const houses = [
      {
        name: "Gryffindor",
        description: "You belong in Gryffindor, Where dwell the brave at heart, Their daring, nerve, and chivalry Set Gryffindors apart",
        image: "./img/gryffindor.png"
      },
      {
        name: "Hufflepuff",
        description: "You belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, And unafraid of toil.",
        image: "./img/huffle.png"
      },
      {
        name: "Ravenclaw",
        description: "In wise old Ravenclaw, If you've a ready mind, Where those of wit and learning, Will always find their kind.",
        image: "./img/raven.png"
      },
      {
        name: "Slytherin",
        description: "In Slytherin, You'll make your real friends, Those cunning folk use any means, To achieve their ends.",
        image: "./img/slytherin.png"
      }
    ];
    return houses[mod];
  }
  
  
  $("#button").click(function () {
    let name = $("#input").val();
    let result = sortingHat(name);

    let html = `
      <div style="margin-top: 20px; border: 2px solid #333; padding: 10px; max-width: 400px;">
        <h3>The Sorting Hat has sorted you into <span style="color: darkred;">${result.name}</span>!</h3>
        <p>${result.description}</p>
        <img src="${result.image}" alt="${result.name} Crest" style="max-width: 100px; display: block; margin-top: 10px;">
      </div>`;
    $("#output").append(html);
  });