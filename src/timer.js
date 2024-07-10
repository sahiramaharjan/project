import React, { Component } from "react";
import "./timer.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerValue: 0,
    };
    this.valueId = null;
  }

  startTimer = () => {
    if (!this.valueId) {
      this.valueId = setInterval(() => {
        this.setState((prevState) => ({
          timerValue: prevState.timerValue + 1,
        }));
      }, 1000);
    }
  };

  stopTimer = () => {
    if (this.valueId) {
      clearInterval(this.valueId);
      this.valueId = null;
    }
  };
  formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  render() {
    return (
      <div className="container">
        <h1 className="value">Timer: {this.state.timerValue} seconds</h1>
        <div className="container2">
          <button className="button" onClick={this.startTimer}>Start Timer</button>
          <button className="button" onClick={this.stopTimer}>Stop Timer</button>
        </div>
      </div>
    );
  }
}

export default Timer;
