import React, { Component } from 'react';
import logo from './logo.svg';
import styled, {css} from "styled-components"
import Questionnaire from './components/Questionnaire/Questionnaire';
import SurveyHeader from "./components/Header/Header"
import SurveyFooter from "./components/Footer/Footer"

class App extends Component {
  render() {
    const Container = styled.div`
    margin: 0 auto;
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    `
    return (
      <Container>
        <SurveyHeader />
        <Questionnaire />
        <SurveyFooter />
      </Container>
    );
  }
}

export default App;
