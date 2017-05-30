import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          id: 1,
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          id: 2,
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    };
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage);
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }

  _createNewMessageId() {
    // returns the
    const idArr = [];
    this.state.messages.forEach((msg) => {
      idArr.push(msg.id);
    });
    return Math.max(...idArr) + 1;
  }

  onEnter = (e, username) => {
    if (e.key === 'Enter') {
      const newMsg = {
        id: this._createNewMessageId(),
        username: username,
        content: e.target.value
      };
      this.setState({messages: this.state.messages.concat(newMsg)});
    }
  }

  render() {
    console.log("<App/>");
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={this.state.messages}/>
        <ChatBar name={this.state.currentUser.name} onEnter={this.onEnter}/>
      </div>
    );
  }
}
export default App;
// <div className="message system">
//   Anonymous1 changed their name to nomnom.
// </div>
