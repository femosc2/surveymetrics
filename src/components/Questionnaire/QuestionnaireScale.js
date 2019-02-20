import React from 'react';
import styled, {css} from "styled-components"

class QuestionnaireScale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.question = props.question
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            options: [{
                    answerOption: 0,
                    answer: 0
                },
                {
                    answerOption: 1,
                    answer: 1
                },
                {
                    answerOption: 2,
                    answer: 2
                },
                {
                    answerOption: 3,
                    answer: 3
                },
                {
                    answerOption: 4,
                    answer: 4
                },
                {
                    answerOption: 5,
                    answer: 5
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
        display: inline-block;
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
        stroke: white;
        stroke-width: 2px;
        margin-bottom: 10px;
        `


        
        const answers = this.state.options.map((option, index) => {
            if (option.answer != null) {
            return (
                <CheckboxList>
                    <label>
                        <Checkbox value={option.answerOption} onChange={this.handleChange} 
                        checked={this.state.checkedOption == option.answerOption}
                         />
                         <br />
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

    export default QuestionnaireScale