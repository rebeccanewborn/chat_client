import React from "react";
import { Feed } from "semantic-ui-react";

const Message = props => {
  return (
    <Feed.Event>
      <Feed.Content>
        <Feed.Date>{props.message.timestamp}</Feed.Date>
        <Feed.Summary>
          {props.message.username}: {props.message.content}
        </Feed.Summary>
      </Feed.Content>
    </Feed.Event>
  );
};

export default Message;
