import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texts: [],
      input: ''
    }
    this.inputChange = this.inputChange.bind(this);
    this.inputSubmit = this.inputSubmit.bind(this);
  }
  inputChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  inputSubmit() {
    if(this.state.input.length > 0) {
      this.setState({
        texts: [...this.state.texts, this.state.input],
        input: ''
      });
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> TodoApp </h1>
          <input type="text" onChange={this.inputChange}/>
          <button onClick={this.inputSubmit}>Add List</button>
          <TodoList texts = {this.state.texts}/>
        </header>
      </div>
    );
  }
}

export default App;
