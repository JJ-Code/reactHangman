import React from "react";
import "./ClueBttn.css"

const ClueBttn = ()=>{
  return(
  <div id="clue">
    <button id="get-clue" className="primary-btn" onclick="getClue()" type="button">Get Clue</button>
    <div id="got-clue">
      <h3> <span id="clue-ppl"> </span> </h3>
    </div>
   
      </div>
  )
}

export default ClueBttn;