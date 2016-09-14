import Question from './question';
import TakeQuiz from './takequiz';
import React from 'react';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {isEditMode: true, resultMode: false, questions: [], answers: [], truefalse: [], studentAnswer: [], index: 0};
    this.add_question = this.add_question.bind(this);
    this.change_mode = this.change_mode.bind(this);
    this.change_question = this.change_question.bind(this);
    this.change_answer = this.change_answer.bind(this);
    this.change_question_type = this.change_question_type.bind(this);
    this.AnswerQuestion = this.AnswerQuestion.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  add_question(){
    let questionsArr = this.state.questions.concat([""]);
    let answersArr = this.state.answers.concat([""]);
    let truefalseArr = this.state.truefalse.concat([true]);
    this.setState({questions: questionsArr, answers: answersArr, truefalse: truefalseArr});
  }

  // Change from edit to student mode.
  change_mode(){
    this.setState({isEditMode: !this.state.isEditMode, resultMode: false, index: 0});
  }

  // Handles question input
  change_question(e){
    let copyQuestions = this.state.questions
    copyQuestions[e.target.id] = e.target.value
    this.setState({questions: copyQuestions});
  }

  // Handles answer input
  change_answer(e) {
    let copyAnswers = this.state.answers
    copyAnswers[parseInt(e.target.id)] = e.target.value
    this.setState({answers: copyAnswers});
  }

  // Changes answer between true/false and short answer
  change_question_type(e) {
    let i = parseInt(e.target.id);
    let copyTrueFalseArr = this.state.truefalse
    copyTrueFalseArr[i] = e.target.value === "true" ? true : false;
    let copyAnswers = this.state.answers
    let copyStudentAnswers = this.state.studentAnswer
    copyAnswers[i] = ""
    copyStudentAnswers[i] = ""
    this.setState({truefalse: copyTrueFalseArr, studentAnswer: copyStudentAnswers, answers: copyAnswers});
  }

  // Handles student answer
  AnswerQuestion(e){
    let copyStudentAnswers = this.state.studentAnswer
    copyStudentAnswers[parseInt(e.target.id)] = e.target.value
    this.setState({studentAnswer: copyStudentAnswers});
  }

  // Reports result
  handleSubmit(){
    this.setState({resultMode: true});
  }

  render() {
    let displayQuestions = [];
    let takeQuiz = [];
    let display;
    if(this.state.isEditMode){
      for(let i = 0; i < this.state.questions.length; i++){
        displayQuestions.push(<Question key={i} id={i} q={this.state.questions[i]}
          a={this.state.answers[i]} truefalse={this.state.truefalse[i]} changeAnswer={this.change_answer}
          changeQuestion={this.change_question} changeType={this.change_question_type}/>)
      }
      display = <div>{displayQuestions}<button onClick={this.add_question} >add question</button></div>;
    }else if(this.state.resultMode){
      let points = 0
      for(let i = 0; i < this.state.answers.length; i++){
        if(this.state.answers[i] && this.state.answers[i].toLowerCase().replace(/\W/g, "") === this.state.studentAnswer[i].toLowerCase().replace(/\W/g, "")){
          points += 1
        }
      }
      display = <div>{points} / {this.state.answers.length}: {Math.round(points / this.state.answers.length * 100)}%</div>
    }else {
      for(let i = 0; i < this.state.questions.length; i++){
        takeQuiz.push(<TakeQuiz key={i} id={i} q={this.state.questions[i]}
          a={this.state.studentAnswer[i]} truefalse={this.state.truefalse[i]} AnswerQuestion={this.AnswerQuestion}
          changeQuestion={this.change_question} changeType={this.change_question_type}/>)
      }

      let next, prev
      if(this.state.index < this.state.questions.length - 1){
        next = <button value="+1" onClick={(()=>{this.setState({index: this.state.index += 1})}).bind(this)}>Next</button>
      }else {
        next = <button onClick={this.handleSubmit}>Submit</button>
      }
      if(this.state.index > 0){
        prev = <button value="-1" onClick={(()=>{this.setState({index: this.state.index -= 1})}).bind(this)}>Previous</button>
      }
      display = <div>{prev}{takeQuiz[this.state.index]}{next}</div>;
    }
    return(
      <div>
        <button onClick={this.change_mode}>{this.state.isEditMode === true ? "Take Test" : "Edit Test"}</button>
        <div id="questions">
          {display}
        </div>

      </div>
    )
  }
}

// {this.state.isEditMode ? this.state.questions : takeQuiz}
