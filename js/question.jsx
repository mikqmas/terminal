import React from 'react';

export default class Question extends React.Component {
  constructor(props){
    super(props);
    this.state = {truefalse: true, q: "", a: ""}
    this.change_question_type = this.change_question_type.bind(this);
    this.change_input = this.change_input.bind(this);
  }

  change_input(e){
    if(e.target.name === "question"){
      this.setState({q: e.target.value});
    }else {
      this.setState({a: e.target.value});
    }
  }

  //dropdown truefalse is true, shortanswer is false.
  change_question_type(e) {
    this.setState({a: "", truefalse: (e.target.value === 'true')});
  }

  render() {
    debugger;
    let answer;
    if(this.state.truefalse){
      answer = (<form onChange={this.change_input}>True<input type="radio" name="truefalse" value="true"/>False<input type="radio" name="truefalse" value="false"/></form>);
    }else {
      answer = <input type="text" name="answer" value={this.state.a} onInput={this.change_input} placeholder="answer" />;
    }

    return(
      <div>
        <input type="text" name="question" value={this.state.q} onInput={this.change_input} placeholder="question" />
        <select name="question_type" onChange={this.change_question_type}>
          <option value="true">True/False</option>
          <option value="false">Short Answer</option>
        </select>
        {answer}
      </div>
    )
  }
}
