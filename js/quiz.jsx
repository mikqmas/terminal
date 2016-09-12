import React from 'react';
import Takequiz from './takequiz';

export default class Quiz extends React.Component {
  constructor(props){
    super(props);
    this.state = {currQuestion: 0};
    this.move_question = this.move_question.bind(this);
  }

  move_question(e){
    const move = e.target.value === "+1" ? this.state.currQuestion += 1 : this.state.currQuestion -= 1
    this.setState({currQuestion: move})
  }

  render() {
    const next = this.state.currQuestion === (this.props.q.length - 1) ? <button onClick={this.submit}>Submit</button> : <button value="+1" onClick={this.move_question}>Next</button>
    const prev = this.state.currQuestion === 0 ? null : <button value="-1" onClick={this.move_question}>Previous</button>
    return(
      <div>
        {prev}
          <Takequiz q={this.props.q[this.state.currQuestion]} />
        {next}
      </div>
    )
  }
}
