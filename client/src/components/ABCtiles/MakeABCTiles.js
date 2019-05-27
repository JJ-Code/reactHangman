import React, {
  Component
} from 'react';
import "./ABCtiles.css";
import { Img } from "./Img";


class MakeABCTiles extends Component {

  makeLetterObj() {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
      'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
      't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    return alphabet.map(value => {
      let tileObj = {
        src: `./images/${value}-title.jpg`,
        letter: value,
      }
      return tileObj;
    });
  };

  randomAbcArr() {
    //shuffling thru the array to make ABC tiles random 
    return this.makeLetterObj().map((a) => ({
      sort: Math.random(),
      value: a
    }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value)
    //console.log(randArr)
  }

  render() {

    const abcItems = this.randomAbcArr().map((abc) =>
      <Img src={abc.src} letter={abc.letter} />
    )
    console.log(abcItems);
    //console.log(abcItems[0].letter);

    return (
      <div id="abc-tiles"> {abcItems} </div>
    )
  }
}//end of MakeABCTiles

export default MakeABCTiles;


