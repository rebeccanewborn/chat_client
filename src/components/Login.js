import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Input, Button } from "semantic-ui-react";
import * as actions from "../actions";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }

  handleChange = ev => {
    this.setState({ username: ev.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.loginUser(this.state.username);
    this.props.history.push("/chatroom");
  };

  render() {
    return (
      <div className="login">
        <h1> Join the Conversation </h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={this.state.username}
            placeholder="Enter a username"
            onChange={this.handleChange}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

export default withRouter(connect(null, actions)(Login));
