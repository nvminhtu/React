import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import hello_pkg from 'hello_pkg';
import DemoComponent from './Demo';
hello_pkg();
class Note extends React.Component {
  constructor(props){
    super(props);
    this.name ='phu';
  }
  render() {
    return (
      <div >
        <h1>{this.name}</h1>
        <DemoComponent />
      </div>
    );
  }
}
ReactDOM.render(
  <Note />,
  document.getElementById('root')
);