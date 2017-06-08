import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import hello_pkg from 'hello_pkg';
import DemoComponent from './Demo';


class Note extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <div >
        <h1>111 {DemoComponent.hoTen}</h1>
        <DemoComponent />
      </div>
    );
  }
}
// ReactDOM.render(
//   <Note />,
//   document.getElementById('root')
// );
