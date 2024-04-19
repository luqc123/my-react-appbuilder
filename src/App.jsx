import React from "react";
import LoginForm from "./LoginForm.jsx";
import { Select } from "antd";

const { Option } = Select;

//npm run dev start test
function App() {
    return(
      <>
      <Select defaultValue="lucy" style={{ width: 120 }}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      </>
    );
}

export default App
