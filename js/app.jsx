import Question from './question';
import Quiz from './quiz';
import React from 'react';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {isEditMode: true, questions: [], answers: [], truefalse: []};
    this.add_question = this.add_question.bind(this);
    this.change_mode = this.change_mode.bind(this);
    this.change_question = this.change_question.bind(this);
    this.change_answer = this.change_answer.bind(this);
    this.change_question_type = this.change_question_type.bind(this);
  }

  add_question(){
    let questionsArr = this.state.questions.concat([""]);
    let answersArr = this.state.answers.concat([""]);
    let truefalseArr = this.state.truefalse.concat([true]);
    this.setState({questions: questionsArr, answers: answersArr, truefalse: truefalseArr});
  }

  change_mode(){
    this.setState({isEditMode: !this.state.isEditMode});
  }

  change_question(e){
    let copyQuestions = this.state.questions
    copyQuestions[e.target.id] = e.target.value
    this.setState({questions: copyQuestions});
  }
  change_answer(e) {
    let copyAnswers = this.state.answers
    copyAnswers[parseInt(e.target.id)] = e.target.value
    this.setState({answers: copyAnswers});
  }
  change_question_type(e) {
    debugger;
    let i = parseInt(e.target.id);
    let copyTrueFalseArr = this.state.truefalse
    copyTrueFalseArr[i] = e.target.value === "true" ? true : false;
    let copyAnswers = this.state.answers
    copyAnswers[i] = ""
    this.setState({truefalse: copyTrueFalseArr, answers: copyAnswers});
  }

  //dropdown truefalse is true, shortanswer is false.
  // change_question_type(id, val) {
  //   this.setState({a: "", this.state.problems[id][:truefalse] = (val === 'true'));
  // }

  render() {
    // const editQuestions = this.state.questions.map((question) => {
    //   return <Question key={question.key} onChange={this.handleFieldChange}/>;
    // })
    let displayQuestions = [];
    for(let i = 0; i < this.state.questions.length; i++){
      displayQuestions.push(<Question key={i} id={i} q={this.state.questions[i].q}
        a={this.state.answers[i]} truefalse={this.state.truefalse[i]} changeAnswer={this.change_answer}
        changeQuestion={this.change_question} changeType={this.change_question_type}/>)
    }
    const takeQuiz = <Quiz q={this.state.questions}/>
    return(
      <div>
        <button onClick={this.change_mode}>{this.state.isEditMode === true ? "Take Test" : "Edit Test"}</button>
        <div id="questions">
          {displayQuestions}
        </div>
        <button onClick={this.add_question} >add question</button>
      </div>
    )
  }
}

// {this.state.isEditMode ? this.state.questions : takeQuiz}
