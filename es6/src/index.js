import _ from 'lodash';
function component() {
     var element = document.createElement('div');
// Lodash, now imported by this script
     element.innerHTML =  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
     return element;
}

document.body.appendChild(component());