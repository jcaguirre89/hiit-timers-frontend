import React from 'react';
import styled from 'styled-components';
import * as palette from '../constants/color-palette';

const TimerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 70vh;
    font-size: 3em;
    color: 'black';
    font-weight: bold;
    background: ${props => props.timerIsWorkout ? palette.green : palette.red};
`;


function Timer(props) {
    
    return (
        <TimerContainer timerIsWorkout={props.timerIsWorkout}>
            <span>{props.timeRemaining}</span>
        </TimerContainer>
    );
};

export default Timer;