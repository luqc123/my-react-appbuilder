import { Form, Input, Button, } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = ()=>{
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const onFinish = (values) => {
    dispatch({type:'LOGIN',username:values.username});
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form name="basic"
    initialValues={{remember:true}}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}>
      <Form.Item
        label="Username"
        name="username"
        rules={[{required:true,message:"Please input your username!"}]}>
          <Input/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{required:true,message:"Please input your password!"}]}>
          <Input.Password/> 
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;