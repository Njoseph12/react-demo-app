import React, { Component } from "react";
//import our service
import JeopardyService from "../jeopardyService";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      submitted: false,
      formData: {
        answer: "",
      },
    };
  }

  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }
  //when the component mounts, get a the first question
  handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;

    this.setState({ formData });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.formData.answer === this.state.data.answer) {
      this.setState((state, props) => ({
        score: state.score + state.data.value,
        formData: {
          answer: "",
        },
      }));
    } else {
      this.setState((state, props) => ({
        score: state.score - state.data.value,
        formData: {
          answer: "",
        },
      }));
    }
    this.getNewQuestion();
  };

  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {
    console.log(this.state.data);
    if (!this.state.data.id) {
      return <div></div>;
    }
    return (
      // <div>{category}</div>,
      <div className="jeopardyStats">
        <label>
          <h2>Category:</h2>
          <div>{this.state.data.category.title}</div>
        </label>
        <label>
          <h2>Question:</h2>
          <div>{this.state.data.question}</div>
        </label>

        <label>
          <h2>Value:</h2>
          {this.state.data.value}
        </label>
        <label>
          <h2>Score:</h2>
          <div>{this.state.score}</div>
        </label>

        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="answer">Your Answer</label>
              <input
                type="text"
                name="answer"
                value={this.state.formData.answer}
                onChange={this.handleChange}
              />
            </div>
            <button>Submit Form</button>
          </form>
        </div>
      </div>
    );
  }
}
export default Jeopardy;
