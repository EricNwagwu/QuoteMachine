import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Page from "./Components/page";

const store = Redux.createStore(reducer);
function App() {
  return (
    <Provider store={store}>
      {" "}
      <div className="App">
        <Page />
      </div>
    </Provider>
  );
}

export default App;
