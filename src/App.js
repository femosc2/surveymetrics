import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionnaireRadioButton from './components/Questionnaire/QuestionnaireRadioButton';
import QuestionnaireTextArea from "./components/Questionnaire/QuestionnaireTextarea"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <QuestionnaireTextArea question="Is this a question?" />
          <QuestionnaireRadioButton question="How many answers are there to this question?" numberOfQuestions="6"
           answer1="Answer 1"
           answer2="Answer 2"
           answer3="Answer 3"
           answer4="Answer 4"
           answer5="Answer 5"
           answer6="Answer 6"
            />
        </header>
      </div>
    );
  }
}

export default App;
