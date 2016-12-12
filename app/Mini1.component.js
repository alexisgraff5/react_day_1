//Display a list of friends (Templating)
//Show an 'active' friend's info (bound to state)
//Be able to switch between friends (event handling)

import ReactDOM from 'react-dom';
import React from 'react';

var Mini = React.createClass({
  getInitialState() {
    return {
      activeFriend: {},
      friends: [
        {name: 'heather', email: 'hbullock@gmail.com'},
        {name: 'amber', email: 'ambs@aol.com'},
        {name: 'rebecca', email: 'tualarebecca@gmail.com'},
        {name: 'shelley', email: 'shellbell@gmail.com'},
        {name: 'kendall', email: 'kenny@yahoo.com'},
        {name: 'ashton', email: 'ashtontowner@gmail.com'},
      ]
    };
  },
  render() {
    return (
      <div>
        <button onClick={this.toggleEmails}>Show Email</button>
        <div>
          <h1>{this.state.activeFriend.name}</h1>
          <h1>{this.state.activeFriend.email}</h1>
        </div>
        {this.state.friends
          .map(friend => {
            return (
              <div
                onClick={this.setActiveFriend.bind(this, friend)}
                key={friend.email}>
                {friend.name}
                {this.state.showEmail ? friend.email : null}
              </div>
            )
          })}
      </div>
    )
  },

  toggleEmails() {
    this.setState({
      showEmail: !this.state.showEmail,
    });
  },

  setActiveFriend(friend) {
    this.setState({
      activeFriend: friend,
    });
  },


});


ReactDOM.render(<Mini />, document.getElementById("app"));
