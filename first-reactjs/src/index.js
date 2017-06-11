import React from 'react';

import './index.css';
import DemoComponent from './Demo';


class Note extends React.Component {

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
