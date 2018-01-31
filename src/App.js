import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { messages: [] }
    this.messageBank = ["Hello, how are you?", "I did not understand what you meant", "Goodbye my friend"];
    this.name = "Bob";
    this.botName = "Josie"
  }
  addBotMessage = () => {
    var idx = Math.floor(Math.random() * this.messageBank.length) //gets random message from messageBank
    this.setState({ messages: this.state.messages.concat({ name: this.botName, body: this.messageBank[idx] }) })
  }
  componentDidMount() {

  }
  displayLine = () => {
    return this.state.messages.map((x) => (<div>{x.name} : {x.body}</div>));
  }
  addName = () =>{
    this.name = this.nameInput.value;
  }

  clicked = () => {
    this.setState({ messages: this.state.messages.concat({ name: this.name, body: this.messageInput.value }) });
    setTimeout(this.addBotMessage, 2000)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Lonely Chat</h1>
        </header>
        {this.displayLine()}
        <input ref={(x) => {this.nameInput = x}}/>
        <button onClick={this.addName}>Add name</button>
        <input ref={(x) => { this.messageInput = x }}/>
        <button onClick={this.clicked}>Send</button>
      </div>
    );
  }
}

export default App;
