import React, { Component } from 'react'; // stateful - require import Component to source

class Panel extends Component {
  constructor(props) {
    super(props);
    /* 1. initial state */
    this.state = { 
      panelTitle: "Default Film Name"
    };
  }

  render() {
     let style = {
      marginTop: "20px"
    };

    return (
      <div className="panel panel-default text-left" style={style}>
        <div className="panel-heading">This is a list of best film.</div>
        <div className="panel-body">
          <p>Did you know that?</p>
          <p><strong>{this.props.panelTitle}</strong>.</p> 
          <p>There is something unique about this component instance too...</p>
          <p><strong>{this.props.panelContent}</strong>.</p>
        </div>
      </div>
    );
  }
}
export default Panel;