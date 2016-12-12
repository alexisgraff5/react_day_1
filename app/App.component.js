import ReactDOM from 'react-dom';
import React from 'react';

var App = React.createClass({
  getInitialState() {
    return {
      name: 'lex',
      email: 'lex.graff@gmail.com',
      friends: [
        {name: 'brian'},
        {name: 'sterling'},
        {name: 'gustav'},
        {name: 'josh'},
        {name: 'elisha'},
      ]
    };
  },
  render() {
    return (
      <div>
        {this.state.name}
        <button onClick={this.clickHandler}>
          Update State
        </button>
        <input onChange={this.inputHandler}/>
        {this.state.friends
          .filter(friend => {
            return friend.name !== 'josh'
          })
          .map((friend) => {
          return <div
            onClick={this.friendNamer.bind(this, friend.name)}
            key={friend.name}>
            {friend.name}
          </div>
        })}
      </div>
    )
  },
  inputHandler(event) {
    this.setState({
      name: event.target.value,
    })
  },

  clickHandler() {
    this.setState({
      name: 'bob'
    });
  },

  friendNamer(name) {
    this.setState({
      name: name,
    });
  },

})

ReactDOM.render(<App />, document.getElementById("app"));
