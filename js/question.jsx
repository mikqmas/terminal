import React from 'react';

export default class Question extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    // Check if question is true/false or short answer
    let answer;
    if(this.props.truefalse){
      answer = (<form>
      True<input onChange={this.props.changeAnswer} id={this.props.id} type="radio" name="truefalse" value="true" checked={this.props.a === "true" ? "checked" : ""}/>
      False<input onChange={this.props.changeAnswer} type="radio" id={this.props.id} name="truefalse" value="false" checked={this.props.a === "false" ? "checked" : ""}/></form>);
    }else {
      answer = <input type="text" id={this.props.id} name="answer" value={this.props.a} onChange={this.props.changeAnswer} placeholder="answer" />;
    }
    return(
      <div>
        <input type="text" name="question" id={this.props.id} value={this.props.q} onChange={this.props.changeQuestion} placeholder="question" />
        <select id={this.props.id} name="question_type" onChange={this.props.changeType}>
          <option value="true">True/False</option>
          <option value="false">Short Answer</option>
        </select>
        {answer}
      </div>
    )
  }
}
