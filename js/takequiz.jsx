import React from 'react';

export default class Takequiz extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    debugger;
    return(
      <div>
        {this.props.q}
      </div>
    )
  }
}
