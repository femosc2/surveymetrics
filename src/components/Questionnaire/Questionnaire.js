import React from 'react'
import QuestionnaireRadioButton from './QuestionnaireRadioButton';
import QuestionnaireTextArea from './QuestionnaireTextarea';
import QuestionnaireScale from "./QuestionnaireScale";

class Questionnaire extends React.Component {    
    render() {
        return (
        <section className="survey">
          <QuestionnaireTextArea question="Is this a question?" />
          <QuestionnaireRadioButton question="How many answers are there to this question?" numberOfQuestions="6"
           answer1="Answer 1"
           answer2="Answer 2"
           answer3="Answer 3"
           answer4="Answer 4"
           answer5="Answer 5"
           answer6="Answer 6"
            />
          <QuestionnaireScale question="This question is a scale question" />
        </section>
        )
    }
}

export default Questionnaire
