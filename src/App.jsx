import React from "react";
import { Provider } from "react-redux";
import store from "./store.js";
import LoginForm from "./LoginForm.jsx";

//npm run dev start test
function App() {
    return(
      <>
        <Provider store={store}>
          <LoginForm/>
        </Provider>
      </>
    );
}

export default App
