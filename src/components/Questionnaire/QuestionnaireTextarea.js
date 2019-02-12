import React, { Component } from "react";

class QuestionnaireTextarea extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        
    }

    handleSubmit(event) {
        alert(this.state.value + " was submitted as an answer to the question ")
        event.preventDefault();
        
    }

    render() {
        let question = this.props.question
        return (
            <div>
                <p>{ question }</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Answer:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default QuestionnaireTextarea