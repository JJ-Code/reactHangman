import React from 'react';
import "./ABCtiles.css"


//Connect the alphabet to the image tiles
const makeObj = () => {
  let letObjArr = [];
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  for (let i = 0; i < alphabet.length; i++) {
    let abcPic = `assets/images/${alphabet[i]}-title.jpg`;
    let tileObj = {
      letter: alphabet[i],
      src: abcPic
    }
    letObjArr.push(tileObj);
    //console.log(tileObj)
  } //end of forloop
  return letObjArr
}; //close of makeObj 


//Make the alphabet image board 
const makeTiles = (funcArr) => {
  let abcDiv = document.getElementById('abc-tiles');
  //console.log(funcArr)
  //shuffling thru the array to make ABC tiles random 
  let randomFunArr = funcArr.map((a) => ({
    sort: Math.random(),
    value: a
  }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
  console.log(randomFunArr)

  for (let i = 0; i < randomFunArr.length; i++) {
    const abcImage = document.createElement("img");
    abcImage.src = randomFunArr[i].src;
    abcImage.setAttribute("data-letter", randomFunArr[i].letter);
    abcImage.classList.add("letter");
    abcDiv.appendChild(abcImage);
  }
}; //end of makeTiles