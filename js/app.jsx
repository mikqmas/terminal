import Question from './question';
import Quiz from './quiz';
import React from 'react';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {isEditMode: true, questions: []};
    this.add_question = this.add_question.bind(this);
    this.change_mode = this.change_mode.bind(this);
  }

  add_question(){
    this.setState({questions: this.state.questions.concat([<Question key={this.state.questions.length} />])})
  }

  change_mode(){
    this.setState({isEditMode: !this.state.isEditMode});
  }

  render() {
    const editQuestions = this.state.questions;
    const takeQuiz = <Quiz q={this.state.questions}/>
    return(
      <div>
        <button onClick={this.change_mode}>{this.state.isEditMode === true ? "Take Test" : "Edit Test"}</button>
        <div id="questions">
          {this.state.isEditMode ? editQuestions : takeQuiz}
        </div>
        <button onClick={this.add_question} >add question</button>
      </div>
    )
  }
}
