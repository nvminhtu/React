import React from 'react';

// Sử dụng variable attribute trong 1 component
var attr = {
  title: 'Cute Cat',
  src: 'http://blog.dssoft32.com/wp-content/uploads/2017/05/Cat.jpg',
  alt: 'cat',
  width:  '200px'
};

// Tạo 1 class Cat và hiển thị các attribute
class Cat extends React.Component{
  	render() {
	    return
	      (<div>
	        <h1>{attr.title}</h1>
	        <img 
	          src={attr.src} 
	          alt={attr.alt} 
	          width={attr.width} />
	      </div>)
    }
}

export default Cat;
