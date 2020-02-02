import React from "react";
import styled from "styled-components";
import * as palette from "../constants/color-palette";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 400px;
  font-size: 0.3em;
  color: black;
`;

const Label = styled.span`
  margin-bottom: 10px;
  color: white;
  font-size: 2em;
`;

const Slider = styled.input`
  -webkit-appearance: none;
  vertical-align: middle;
  outline: none;
  border: none;
  padding: 0;
  margin-top: 20px;
  margin-bottom: 20px;
  background: none;
  width: 70%;

  &::-webkit-slider-runnable-track {
    background-color: #d7dbdd;
    height: 6px;
    border-radius: 3px;
    border: 1px solid transparent;
  }

  &::-moz-range-track {
    background-color: ${palette.gray};
    height: 6px;
    border-radius: 3px;
    border: none;
  }

  &::-ms-track {
    color: transparent;
    border: none;
    background: none;
    height: 6px;
  }

  &::-ms-fill-lower {
    background-color: ${palette.gray};
    border-radius: 3px;
  }

  &::-ms-fill-upper {
    background-color: ${palette.gray};
    border-radius: 3px;
  }

  &::-ms-tooltip {
    display: none; /* display and visibility only */
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    border: none;
    height: 2em;
    width: 2em;
    border-radius: 50%;
    background: ${palette.darkgray};
    margin-top: -4px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    border-radius: 100%;
    background-color: ${palette.darkgray};
    height: 2em;
    width: 2em;
    margin-top: -11px;
  }
`;

class TimerInput extends React.Component {
  state = {
    time: 10
  };

  componentDidMount = () => {
    this.setState({
      time: this.props.time
    });
  };

  handleUpdate = e => {
    const timer = e.target.name;
    const newTime = e.target.value;
    this.setState({
      time: newTime
    });
    this.props.handleUpdate(timer, newTime);
  };

  render() {
    return (
      <Slider
        type="range"
        name={this.props.name}
        min={this.props.min}
        max={this.props.max}
        value={this.state.time}
        onChange={this.handleUpdate}
      />
    );
  }
}

class ConfigForm extends React.Component {
  state = {
    renderWorkout: false,
    renderRest: false
  };

  handleWorkoutClick = () => {
    this.setState({
      renderWorkout: !this.state.renderWorkout
    });
  };

  handleRestClick = () => {
    this.setState({
      renderRest: !this.state.renderRest
    });
  };

  render() {
    return (
      <FormContainer>
        <Label onClick={this.handleWorkoutClick}>
          Workout time: {this.props.workoutTime} seconds
        </Label>
        {this.state.renderWorkout ? (
          <TimerInput
            name="workoutTime"
            time={this.props.workoutTime}
            handleUpdate={this.props.updateTimer}
            min="0"
            max="180"
          />
        ) : null}
        <br />
        <Label onClick={this.handleRestClick}>
          Rest time: {this.props.restTime} seconds
        </Label>
        {this.state.renderRest ? (
          <TimerInput
            name="restTime"
            time={this.props.restTime}
            handleUpdate={this.props.updateTimer}
            min="0"
            max="60"
          />
        ) : null}
      </FormContainer>
    );
  }
}

export default ConfigForm;
