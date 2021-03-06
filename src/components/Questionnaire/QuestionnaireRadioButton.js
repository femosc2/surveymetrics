import React, { Component } from 'react'
import QuestionnaireTextarea from './QuestionnaireTextarea';
import styled, {css} from "styled-components"

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
        const Checkbox = ({ className, checked, ...props }) => (
            <CheckboxContainer className={className}>
              <HiddenCheckbox checked={checked} {...props} />
              <StyledCheckbox checked={checked}>
                <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                </Icon>
              </StyledCheckbox>
            </CheckboxContainer>
          )

        const CheckboxList = styled.ul`
        margin: 0 auto;
        `

        const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
        border: 0;
        clip: rect(0 0 0 0);
        clippath: inset(50%);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        white-space: nowrap;
        width: 1px;
        transition: 1s;
        `

        const StyledCheckbox = styled.div`
        width: 16px;
        height: 16px;
        background: ${props => props.checked ? '#2cb1c9' : '#fff'}
        border-radius: 3px;
        transition: 1s;

        ${HiddenCheckbox}:focus + & {
            box-shadow: 0 0 0 3px pink;
        }
        `

        const CheckboxContainer = styled.div`
        display: inline-block;
        vertical-align: middle;
        `

        const Icon = styled.svg`
        fill: none;
        stroke: #fff
        stroke-width: 2px;
        margin-bottom: 10px;
        transition: 1s;
        `

        const answers = this.state.options.map((option, index) => {
            if (option.answer != null) {
            return (
                <CheckboxList>
                    <label>
                        <Checkbox value={option.answerOption} onChange={this.handleChange} 
                        checked={this.state.checkedOption == option.answerOption}
                         />
                        { option.answer }
                    </label>
                </CheckboxList>
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
