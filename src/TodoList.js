import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.texts.map((value, index) => <li key={index}>{value}</li>)}
      </ul>
    )
  }
}

export default TodoList;
