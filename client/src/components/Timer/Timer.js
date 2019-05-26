import React, {
  Component
} from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
    //this.timerWrapper = this.timerWrapper.bind(this);
  }


  componentDidMount() {
    this.interval = setInterval(() => {
      console.log(this.state.seconds)
      if (this.state.seconds >= 0) {
        this.setState({
          seconds: this.state.seconds + 1
        });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  // timerWrapper() {
  //   //const timerId = document.getElementById('timer');
  //   //let time
  //   setInterval(() => {
  //     if (this.state.seconds >= 1) {
  //       this.setState({
  //         seconds: this.state.seconds + 1
  //       });
  //     }
  //     //time.innerHTML = this.state.counter
  //     console.log(this.state.counter);
  //   }, 1000);
  // };

  render() {
    return (
      <div className="col-md-4">
        <h2> Timer: <span className="timer" id="timer"> {this.state.seconds} </span> </h2>
      </div>
    )
  }
}

export default Timer;