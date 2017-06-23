/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/* Project 01: Null HelloWorld */
/* 
import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
} 

// skip this line if using Create React Native App
AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp); */

/* Project 01: Props Component - HelloWorld */
/* import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class HelloWorld extends Component {
  render() {
  	let pic = {
  		uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  	};
  	
  	return (
  		<Image source={pic} style={{width: 193, height: 110}} />
  	);
  }
}
*/ 

/* Project 03: Props Component - <Text /> - HelloWorld */

import React, { Component } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}</Text>
    );
  }
}

export default class HelloWorld extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name="Tu" />
        <Greeting name="Dat" />
        <Greeting name="Trang" />
      </View>
    );
  }
} 

// skip this line if using Create React Native App
AppRegistry.registerComponent('HelloWorld', () => HelloWorld);


