import React, { Component } from 'react'; // stateful - require import Component to source
import Panel from '../Panel/Panel';

class PanelContainer extends Component {
  constructor(props) {
    super(props);
    /* 1. initial state */
    this.state = { 
      // declare here
    };
  }

  render() {
    return (
     <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 text-center"> 
            <Panel panelTitle="The Lord of the Rings" panelContent="This is a film about journey of a Hobbit who bring a ring of Condor, destroy it." />
            <Panel panelTitle="" panelContent="Film about the mission of people who must save Ryan private in World War II" />
            <Panel panelContent="Film content created in Prop"
                  panelTitle="Mission Impossible (overwrite Default Props)" />
          </div>
        </div>
      </div>
    );
  }
}
export default PanelContainer;
