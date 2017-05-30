import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {

  socket = new WebSocket("ws://localhost:3001", "protocolOne");

  constructor() {
    super();
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
      // messages: [
      //   {
      //     id: 1,
      //     username: "Bob",
      //     content: "Has anyone seen my marbles?",
      //   },
      //   {
      //     id: 2,
      //     username: "Anonymous",
      //     content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
      //   }
      // ],
    };
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
  }

  render() {
    console.log("<App/>");
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={this.state.messages}/>
        <ChatBar name={this.state.currentUser.name} addMessage={this._addMessage}/>
      </div>
    );
  }

  _addMessage = (username, content) => {
    const newMsg = {
      username: username,
      content: content
    };
    console.log("here sends to server:", JSON.stringify(newMsg));
    this.socket.send(JSON.stringify(newMsg));
    // this.setState({messages: this.state.messages.concat(newMsg)});
  }
}
export default App;
