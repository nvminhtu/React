import React from 'react';
import ReactDOM from 'react-dom';
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
  <ShoppingList shopName='Xudi Garden'></ShoppingList>,
  document.getElementById('root')
);