import React from 'react';
import styled from 'styled-components';
import * as palette from '../constants/color-palette';

const RoundButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${palette.blue};
    border-radius: 50%;
    border: 1px solid ${palette.blue};
    width: 100px;
    height: 100px;
    color: white;
    font-size: 1em;
    margin-right: 10px;
`;

export default RoundButton;