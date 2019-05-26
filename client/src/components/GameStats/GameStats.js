import React, {
  Component
} from 'react';
import "./GameStats.css"
import Timer from "../Timer";


class GameStats extends Component{
  constructor(props) {
    super(props);
    this.state = { counter: null };
  }

  render(){
    return (
      <div className="row">
        <div className="col-md-4">
          <h2>Number of Lives: <span className="lives-score"> </span> </h2>
        </div>

        {/* <div className="col-md-4">
        <h2>Timer: <span className="timer" id="timer"> </span> </h2>
      </div> */}
      
        <Timer />

        <div className="col-md-4">
          <h2>Wins: <span className="win-score"> </span></h2>
          <h2>Losses: <span className="loss-score"></span></h2>
        </div>
      </div>
    )

  }

}



export default GameStats;