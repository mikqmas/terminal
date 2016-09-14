import React from 'react';

export default class Takequiz extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    // Check whether question is truefalse or short answer
    let answer;
    if(this.props.truefalse){
      answer = (<form>
        True<input onChange={this.props.AnswerQuestion} id={this.props.id} type="radio" name="truefalse" value="true" checked={this.props.a === "true" ? "checked" : ""}/>
      False<input onChange={this.props.AnswerQuestion} type="radio" id={this.props.id} name="truefalse" value="false" checked={this.props.a === "false" ? "checked" : ""}/></form>);
    }else {
      answer = <input type="text" id={this.props.id} name="answer" onChange={this.props.AnswerQuestion} placeholder="answer" value={this.props.a}/>;
    }
    return(
      <div>
        <p>{this.props.q}</p>
        {answer}
      </div>
    )
  }
}
