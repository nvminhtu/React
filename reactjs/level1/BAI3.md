# BÀI 3: JSX - làm quen và sử dụng

import React from 'react' loads the React library, which is pretty 
central to our whole application and thus is required.

class Detail extends React.Component { defines a new React component. React components can be big (like pages) or small (like a custom component to render breadcrumbs) and they are very flexible.

render() { starts the render() method of our component. This is called by React when the component needs to be drawn to the screen, and needs to return something that can be drawn in the browser.

What's left in this class is just the closing brace } that ends the render() method and the second closing brace that ends the class we're creating.

export default Detail; The "export" keyword means this component is being exposed to the rest of our app to use, and "default" means it's the only thing this class will expose.