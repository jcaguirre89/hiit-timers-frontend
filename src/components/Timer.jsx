import React from 'react';
import styled from 'styled-components';
import * as palette from '../constants/color-palette';

const TimerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 45%;
    font-size: 4em;
    color: white;
    font-weight: bold;
`;

function Timer(props) {
    
    return (
        <TimerContainer timerIsWorkout={props.timerIsWorkout}>
            <span>{props.timeRemaining}</span>
        </TimerContainer>
    );
};

export default Timer;