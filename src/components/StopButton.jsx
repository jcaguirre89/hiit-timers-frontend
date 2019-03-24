import React from 'react';
import styled from 'styled-components';
import * as palette from '../constants/color-palette';

const StopButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${palette.red};
    border-radius: 50%;
    border: 1px solid ${palette.red};
    width: 100px;
    height: 100px;
    color: white;
    font-size: 1.5em;
    margin-right: 10px;
`;

export default StopButton;