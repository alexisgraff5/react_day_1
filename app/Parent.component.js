import ReactDOM from 'react-dom';
import React from 'react';
import Child from './Child.component.js';

const Parent = React.createClass({
  getInitialState() {
    return {
      name: 'Wesley',
    }
  },
  render() {
    return (
      <div>
        <Child
          changeName={this.changeName.bind(this)}
          superName={this.state.name}
        />
      </div>
    )
  },
  changeName(name) {
    this.setState({
      name: name,
    })
  }



});

ReactDOM.render(<Parent />, document.getElementById("app"));
