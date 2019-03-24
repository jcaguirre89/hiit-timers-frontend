import React from 'react';

import styled from 'styled-components';
import { MdPlayArrow, MdPause } from 'react-icons/md';


import TimerConfigForm from './TimerConfigForm';
import SetCounter from './SetCounter';
import Timer from './Timer';
import StopButton from './/StopButton';
import StartButton from './StartButton';
import MainContainer from './MainContainer';

class TimerDashboard extends React.Component {
    state = {
        workoutTime: 5,
        restTime: 2,
        timerIsRunning: false,
        timerIsWorkout: true,
        timeRemaining: null,
        setCount: 0,
    }

    componentDidMount = () => {
        this.mountTimer();
    }

    resetSetCount = () => {
        if (window.confirm('Reset set count?')) {
            this.setState({
                setCount: 0,
            });
        };
        this.mountTimer();
    };

    mountTimer = () => {
        const timeRemaining = this.state.timerIsWorkout ?
            this.state.workoutTime :
            this.state.restTime;
        
        this.setState({
            timeRemaining
        });
    };

    handleStartStop = () => {
        const nextState = !this.state.timerIsRunning;
        //If nextState is true, timer is now running
        nextState ? this.startTimer() : this.stopTimer();
    }

    startTimer = () => {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        this.setState({
            timerIsRunning: true,
        });
    };

    stopTimer = () => {
        clearInterval(this.timerID);
        this.setState({
            timerIsRunning: false,
        });
    }

    tick = () => {
        const seconds = this.state.timeRemaining - 1
        this.setState({
            timeRemaining: seconds
        });
        this.checkTimer();
    };

    checkTimer = () => {
        if (this.state.timeRemaining <= 0) {
            this.resetTimer();
        }
    };

    resetTimer = () => {
        const nextState = !this.state.timerIsWorkout;
        //if nextState is false, timer switched to rest
        const newSetCount = nextState ? 
            this.state.setCount + 1 :
            this.state.setCount

        const timeRemaining = nextState ?
        this.state.workoutTime :
        this.state.restTime;

        this.setState({
            timerIsWorkout: nextState,
            setCount: newSetCount,
            timeRemaining: timeRemaining,
        })
    };

    updateTimer = (timer, time) => {
        this.stopTimer();
        this.setState({
            [timer]: time,
            timerIsRunning: false,
        });
        this.mountTimer();
    };


    render() {
        const totalTime = this.state.timerIsWorkout ? 
            this.state.workoutTime : 
            this.state.restTime;
        return (
            <MainContainer timerIsWorkout={this.state.timerIsWorkout}>
                <Timer
                    timerIsRunning={this.state.timerIsRunning}
                    timerIsWorkout={this.state.timerIsWorkout}
                    timeRemaining={this.state.timeRemaining}
                    totalTime={totalTime}
                />
                <div className="button-and-counter-container">
                    {this.state.timerIsRunning ? 
                    <StopButton onClick={this.handleStartStop}><MdPause /></StopButton> : 
                    <StartButton onClick={this.handleStartStop}><MdPlayArrow /></StartButton>
                }
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
        )
    };
};



export default TimerDashboard;