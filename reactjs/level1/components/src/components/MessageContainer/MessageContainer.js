import React, { Component } from 'react'; // stateful - require import Component to source
import Message from '../Message/Message';
import Button from '../Button/Button';

class MessageContainer extends Component {
  
  constructor(props) {
    super(props);
    
    /* 1. initial state */
    this.state = { 
      isLoved: false,
    };
    /* 2. callback function in react - must */
    this.handleToggleLove = this.handleToggleLove.bind(this);
    
  }
  // use below code in createClass (ES5)
  // getInitialState() {
  //   return {
  //     isLoved: false
  //   };
  // }
  
  handleToggleLove() {
    this.setState({
      isLoved: ! this.state.isLoved
    });
  }

  render() {
    let messageText = '';
    if(this.state.isLoved === true) {
      messageText = `YEAH, she accepted me, I will mary her! `;
    } else {
      messageText = `Oh no, I don't know the reason why!!!! `;
    }
    var buttonText = this.state.isLoved ? 'Unlove' : 'Love';

    return (
      <div className="message">
        <Message text={messageText} isLoved={this.state.isLoved} />
        <Button text={buttonText} onClick={this.handleToggleLove} />
      </div>
    );
  }
}

export default MessageContainer;