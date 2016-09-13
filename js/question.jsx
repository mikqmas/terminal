import React from 'react';

export default class Question extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let answer;
    if(this.props.truefalse){
      answer = (<form onChange={this.props.changeAnswer}>True<input id={this.props.id} type="radio" name="truefalse" value="true"/>False<input type="radio" id={this.props.id} name="truefalse" value="false"/></form>);
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
