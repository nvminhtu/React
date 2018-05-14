import React from 'react';
import ReactDOM from 'react-dom';
import Detail from './pages/detail';
import './index.css';

class ShoppingList extends React.Component {
    render(){
        return (
            <div className="ShoppingList">
                <h1>Shopping list for { this.props.shopName}</h1>
                <ul>
                    <li>Sen đá nâu</li>
                    <li>Sen thạch ngọc</li>
                    <li>Sen đá Thái</li>
                    <li>Sen mặt nạ lông</li>
                </ul>
            </div>
        );
    }
}
// ========================================

ReactDOM.render(
  <div>
    <ShoppingList shopName='Xudi Garden'></ShoppingList>
    <Detail message='This is my message' />
  </div>,
  document.getElementById('root')
);