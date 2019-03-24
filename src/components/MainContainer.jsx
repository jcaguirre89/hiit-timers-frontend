import React from 'react';
import styled from 'styled-components';
import * as palette from '../constants/color-palette';

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: ${props => props.timerIsWorkout ? palette.green : palette.red};
    width: 100%;
    height: 100vh;
`;

export default MainContainer;