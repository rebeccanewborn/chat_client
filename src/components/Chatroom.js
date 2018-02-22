import React from "react";
import { connect } from "react-redux";
import { Input, Button, Feed } from "semantic-ui-react";
import { postMessage } from "../api";

import ActionCable from "actioncable";
import { baseURL, getMessages } from "../api";

import Message from "./Message";

class Chatroom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "", messages: [] };
  }

  componentDidMount() {
    getMessages().then(res => this.setState({ messages: res }));
    const cable = ActionCable.createConsumer(`ws://${baseURL}/cable`);
    cable.subscriptions.create("RoomChannel", {
      received: data => {
        this.setState({ messages: [...this.state.messages, data] });
      }
    });
  }

  handleChange = ev => {
    this.setState({ content: ev.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const message = {
      user_id: this.props.user_id,
      content: this.state.content
    };
    postMessage(message);
    this.setState({ content: "" });
  };

  render() {
    const messages = this.state.messages.map(msg => {
      return <Message message={msg} />;
    });
    return (
      <div className="chatroom">
        <Feed className="chatroom-msgs">{messages}</Feed>
        <form onSubmit={this.handleSubmit} className="new-msg">
          <Input
            type="text"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user_id: state.id };
};

export default connect(mapStateToProps)(Chatroom);
