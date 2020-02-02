import React from "react";

import * as palette from "../constants/color-palette";
import TimerConfigForm from "./TimerConfigForm";
import SetCounter from "./SetCounter";
import Timer from "./Timer";
import RoundButton from "./Buttons";
import MainContainer from "./MainContainer";

class TimerDashboard extends React.Component {
  state = {
    workoutTime: 50,
    restTime: 10,
    timerIsRunning: false,
    timerIsWorkout: true,
    timeRemaining: null,
    setCount: 0
  };

  componentDidMount = () => {
    this.resetTimer();
  };

  componentWillUnmount = () => {
    this.stopTimer();
  };

  resetSetCount = () => {
    if (window.confirm("Reset set count?")) {
      this.setState({
        setCount: 0
      });
    }
    this.stopTimer();
    this.resetTimer();
  };

  handleStartStop = () => {
    const nextState = !this.state.timerIsRunning;
    nextState ? this.startTimer() : this.stopTimer();
  };

  startTimer = () => {
    this.timerID = setInterval(() => this.tick(), 1000);
    this.setState({
      timerIsRunning: true
    });
  };

  stopTimer = () => {
    clearInterval(this.timerID);
    this.setState({
      timerIsRunning: false
    });
  };

  tick = () => {
    const seconds = this.state.timeRemaining - 1;
    this.setState({
      timeRemaining: seconds
    });
    this.checkTimer();
  };

  checkTimer = () => {
    if (this.state.timeRemaining <= 0) {
      this.nextPhase();
    }
  };

  nextPhase = () => {
    // Called whenever the timer reaches 0.
    if (this.state.timerIsWorkout) {
      this.workoutToRest();
    } else {
      this.restToWorkout();
    }
  };

  workoutToRest = () => {
    this.setState({
      timerIsWorkout: false,
      timeRemaining: this.state.restTime
    });
  };

  restToWorkout = () => {
    this.setState({
      timerIsWorkout: true,
      setCount: this.state.setCount + 1,
      timeRemaining: this.state.workoutTime
    });
  };

  resetTimer = () => {
    //Reset the timer to the start of the workout phase
    const timeRemaining = this.state.timerIsWorkout
      ? this.state.workoutTime
      : this.state.restTime;

    this.setState({
      timeRemaining: timeRemaining,
      timerIsWorkout: true
    });
  };

  updateTimer = (timer, time) => {
    // Called when a slider is moved to update the time in a given timer
    this.stopTimer();
    this.setState({
      [timer]: time,
      timerIsRunning: false
    });
    this.resetTimer();
  };

  render() {
    const totalTime = this.state.timerIsWorkout
      ? this.state.workoutTime
      : this.state.restTime;
    return (
      <MainContainer timerIsWorkout={this.state.timerIsWorkout}>
        <Timer
          timerIsRunning={this.state.timerIsRunning}
          timerIsWorkout={this.state.timerIsWorkout}
          timeRemaining={this.state.timeRemaining}
          totalTime={totalTime}
        />
        <div className="button-and-counter-container">
          {this.state.timerIsRunning ? (
            <RoundButton
              onClick={this.handleStartStop}
              background={palette.blue}
            >
              <span className="fas fa-pause" />
            </RoundButton>
          ) : (
            <RoundButton
              onClick={this.handleStartStop}
              background={palette.blue}
            >
              <span className="fas fa-play" />
            </RoundButton>
          )}
          <SetCounter
            count={this.state.setCount}
            clickSetCount={this.resetSetCount}
          />
        </div>
        <TimerConfigForm
          workoutTime={this.state.workoutTime}
          restTime={this.state.restTime}
          updateTimer={this.updateTimer}
        />
      </MainContainer>
    );
  }
}

export default TimerDashboard;
