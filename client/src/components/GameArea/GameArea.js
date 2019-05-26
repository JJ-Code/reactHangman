/* eslint-disable jsx-a11y/heading-has-content */
import React, { Component } from 'react';
import "./GameArea.css"


class GameArea extends Component {

  render() {
    return (
      <div id="game-area">

        {/* create space for blank letters */}
        <div id="word-to-guess"></div>

        <br /><br />
        <div className="landing--line"> </div>
        {/* this is to create clicking board */}

        <h2 id="dom-update"></h2>
        <button id="reset-game" className="primary-btn" onClick="reset()" type="button">Reset Game</button>
        <div id="abc-tiles"></div>

        <div className="landing--line"> </div>
        <br /> <br />
        {/* this is to where the wrong tiles will go */}
        <div id="wrong-tiles"></div>

      </div>
    )
  }

}


export default GameArea;
