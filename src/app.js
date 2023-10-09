/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".net", ".es"];

  for (let index = 0; index < pronoun.length; index++) {
    for (let index1 = 0; index1 < adj.length; index1++) {
      for (let index2 = 0; index2 < noun.length; index2++) {
        for (let index3 = 0; index3 < noun.length; index3++) {
          console.log(pronoun[index] + adj[index1] + noun[index2] + ".com");
        }
      }
    }
  }
};
