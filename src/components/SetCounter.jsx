import React from 'react';
import styled from 'styled-components';
import * as palette from '../constants/color-palette';

const SetCounterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    color: gray;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background: ${palette.gray};
`;

function SetCounter(props) {
    return (
        <SetCounterContainer onClick={props.clickSetCount}>
            <span>{props.count}</span>
        </SetCounterContainer>
    )
}

export default SetCounter;