import Question from './question';
import Quiz from './quiz';
import React from 'react';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {isEditMode: true, questions: {}};
    this.add_question = this.add_question.bind(this);
    this.change_mode = this.change_mode.bind(this);
  }

  add_question(){
    const nowID = Date.now()
    this.setState({questions: this.state.questions[nowID] = {id: nowID, q: "", a:"", truefalse: true}
  }

  change_mode(){
    this.setState({isEditMode: !this.state.isEditMode});
  }

  change_input(id, val, qora){
    if(qora === "question"){
      this.setState(this.state.questions[id][:q] = val);
    }else {
      this.setState(this.state.questions[id][:a] = val);
    }
  }

  //dropdown truefalse is true, shortanswer is false.
  change_question_type(id, val) {
    this.setState({a: "", this.state.problems[id][:truefalse] = (val === 'true'));
  }

  render() {
    // const editQuestions = this.state.questions.map((question) => {
    //   return <Question key={question.key} onChange={this.handleFieldChange}/>;
    // })
    const takeQuiz = <Quiz q={this.state.questions}/>
    debugger;
    return(
      <div>
        <button onClick={this.change_mode}>{this.state.isEditMode === true ? "Take Test" : "Edit Test"}</button>
        <div id="questions">
          <Question key=""
          {this.state.isEditMode ? this.state.questions : takeQuiz}
        </div>
        <button onClick={this.add_question} >add question</button>
      </div>
    )
  }
}
