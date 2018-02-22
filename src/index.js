import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import ChatApp from "./ChatApp";
import registerServiceWorker from "./registerServiceWorker";

//redux imports
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducer";
import reduxThunk from "redux-thunk";

let store = createStore(reducer, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Route path="/" component={ChatApp} />
    </Provider>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
