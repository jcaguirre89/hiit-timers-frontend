import React from 'react';
import styled from 'styled-components';

const SetCounterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    color: gray;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background: lightgray;
`;

function SetCounter(props) {
    return (
        <SetCounterContainer>
            <span>{props.count}</span>
        </SetCounterContainer>
    )
}

export default SetCounter;