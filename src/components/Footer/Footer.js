import React, { Component } from 'react';
import styled from 'styled-components';

class SurveyFooter extends Component {
    render() {
        const StyledFooter = styled.footer`
        background-color: black;
        width: 100%;
        text-align: center;
        font-size: 10px;
        margin-top: 50px;
        `
        return (
            <StyledFooter>
                <p> By Felix Morau </p>
            </StyledFooter>
        )
    }
}

export default SurveyFooter