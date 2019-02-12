import React, { Component } from 'react'
import QuestionnaireTextarea from './QuestionnaireTextarea';

class QuestionnaireRadioButton extends Component {
    constructor(props) {
        super(props);
        let amountOfOptions;
        this.question = props.question
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            amountOfOptions: props.numberOfQuestions,
            options: [
                {
                    answerOption: 0,
                    answer: props.answer1
                },
                {
                    answerOption: 1,
                    answer: props.answer2
                },
                {
                    answerOption: 2,
                    answer: props.answer3
                },
                {
                    answerOption: 3,
                    answer: props.answer4
                },
                {
                    answerOption: 4,
                    answer: props.answer5
                },
                {
                    answerOption: 5,
                    answer: props.answer6
                },
                {
                    answerOption: 6,
                    answer: props.answer7
                },
                {
                    answerOption: 7,
                    answer: props.answer8
                },
                {
                    answerOption: 8,
                    answer: props.answer9
                },
                {
                    answerOption: 9,
                    answer: props.answer10
                },
                
        ],
        checkedOption: "",
        }
    }

    

    handleSubmit(event) {
        alert(this.state.value + " was submitted as an answer to question ")
        event.preventDefault();
        
    }

    handleChange = (changeEvent) => {
       this.setState({
           checkedOption: changeEvent.target.value
       })
       console.log(this.state.checkedOption)
    }

    render() {
        const answers = this.state.options.map((option, index) => {
            if (option.answer != null) {
            return (
                <div>
                <div className="radio">
                    <label>
                        <input type="radio" value={option.answerOption} onChange={this.handleChange} 
                        checked={this.state.checkedOption == option.answerOption}
                         />
                        { option.answer }
                    </label>
                </div>
                </div>
            )
        }
        })
        return (
            <div>
                <p> {this.question} </p>
                { answers }
            </div>
        )}
    }

export default QuestionnaireRadioButton
