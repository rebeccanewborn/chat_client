import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";

//components
import Login from "./components/Login";
import Chatroom from "./components/Chatroom";

class ChatApp extends React.Component {
  componentDidMount() {
    this.props.history.push("/welcome");
  }
  render() {
    return (
      <Switch>
        <Route path="/welcome" component={Login} />
        <Route path="/chatroom" component={Chatroom} />
      </Switch>
    );
  }
}

export default withRouter(ChatApp);
