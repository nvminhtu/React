import React from 'react';
import Question from './components/Question';

class App extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Quiz</h2>
        </div>
        <Question content="What is your favourite food?" />
      </div>
    );
  }
  

}

export default App;
