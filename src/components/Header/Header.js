import React, { Component } from 'react';
import styled from 'styled-components';

class SurveyHeader extends Component {
    render() {
        const StyledHeader = styled.header`
        background-color: black;
        width: 100%;
        text-align: center;
        height: 250px;
        `
        return (
            <StyledHeader>
                <h1> SurveyMetrics </h1>
                <h2> ! </h2>
            </StyledHeader>
        )
    }
}

export default SurveyHeader