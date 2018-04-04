import React from 'react';



export default class InformativeText extends React.Component {
  constructor(props){
    super(props);
    this.state = {infoText: 'hello'};
  }

  componentDidMount(){
    this.setState({infoText: 'world'})


  }

  render() {
    return (
      <div className="alert alert-warning">
        <pre>{this.state.infoText}</pre>
      </div>
    )
  }
}
