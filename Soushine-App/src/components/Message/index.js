import React from "react";
import { message } from "antd";

let handleMessage;

function Message() {
  const [messageApi, contextHolder] = message.useMessage();
  handleMessage = (type, message) => {
    messageApi.open({
      type,
      content: message,
    });
  };
  return <>{contextHolder}</>;
}

export { handleMessage };
export default Message;
