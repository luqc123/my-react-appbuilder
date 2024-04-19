import React from "react";
import LoginForm from "./LoginForm.jsx";
import { Form, Input, Button, } from "antd";

const ItemCol = {
  lableCol: {span:7},
  wrapperCol: {span:14},
}

//npm run dev start test
function App() {
    return(
      <>
        <Form>
          <Form.Item {...ItemCol} label="Username">
            <Input/>
          </Form.Item>
          <Form.Item labelCol={{span:6}} wrapperCol={{span:6}} label="Password">
            <Input.Password/>
          </Form.Item>
        </Form>
      </>
    );
}

export default App
