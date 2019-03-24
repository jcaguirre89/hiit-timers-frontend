import React from 'react';
import styled from 'styled-components';
import * as palette from '../constants/color-palette';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 0.3em;
    color: black;
`;

const ValueContainer = styled.span`
    border: 1px solid #2b3039;
    color: #aaa;
    font-size: 12px;
    padding: .4em .6em;
    border-radius: 3px;
`;

const Label = styled.label`
    margin-bottom: 10px;
`;

const Slider = styled.input`
-webkit-appearance: none;
vertical-align: middle;
outline: none;
border: none;
padding: 0;
background: none;
width: 80%;

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
        time: null 
    }

    componentDidMount = () => {
        this.setState({
            time: this.props.time,
        })
    }

    handleUpdate = (e) => {
        const timer = e.target.name;
        const newTime = e.target.value;
        this.setState({
            time: newTime,
        });
        this.props.handleUpdate(timer, newTime);
    };

    render() {
        return (
            <div>
                <Slider type='range' name={this.props.name} min={this.props.min} max={this.props.max}
                    value={this.state.time} onChange={this.handleUpdate} />
                <ValueContainer>{this.state.time}</ValueContainer>
             </div>
        )
    };
};


class ConfigForm extends React.Component {

    render() {
        return (
            <FormContainer>
                    <Label htmlFor='workoutTime'>Set workout time</Label>
                    <TimerInput
                        name='workoutTime'
                        time={this.props.workoutTime}
                        handleUpdate={this.props.updateTimer}
                        min="0"
                        max="120"
                        />
                    <br />
                    <Label htmlFor='restTime'>Set rest time</Label>
                    <TimerInput
                        name='restTime'
                        time={this.props.restTime}
                        handleUpdate={this.props.updateTimer}
                        min="0"
                        max="60"
                        />
            </FormContainer>
        )
    };
};

export default ConfigForm;