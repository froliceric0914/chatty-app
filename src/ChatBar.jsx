import React, {Component} from 'react';


class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      content: ""
    }
  }

  render() {
    console.log("<ChatBar/>");
    return (
      <footer className="chatbar">
        <input className="chatbar-username" value={this.state.username}
          placeholder={this.props.name}
          onChange={this._onUserChange} onKeyPress={this._onUserEnter}/>
        <input className="chatbar-message" value={this.state.content}
          placeholder="Type a message and hit ENTER"
          onChange={this._onContentChange} onKeyPress={this._onContentEnter}/>
      </footer>
    );
  }

  // when the content input changes, update the state content too
  _onContentChange = (e) => {
    this.setState({content: e.target.value});
  }

  // when the user hits enter, fire the new message content up to app
  // and clear the input field
  _onContentEnter = (e) => {
    if (e.key === 'Enter') {
      this.props.addMessage(this.props.name, e.target.value);
      this.setState({content: ""});
    }
  }

  // when the username input changes, update the state username too
  _onUserChange = (e) => {
    this.setState({username: e.target.value});
  }

  // when the user hits enter, fire the new username up to app
  // and clear the input field
  _onUserEnter = (e) => {
    if (e.key === 'Enter') {
      this.props.updateUser(e.target.value);
      this.setState({username: ""});
    }
  }
}
export default ChatBar;