import React from 'react';

export default class Takequiz extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        {this.props.q.q}
        {this.props.q.a}
      </div>
    )
  }
}
