import React from "react";
import ReactDOM from "react-dom";
import Main from "./Components/Main/Main.js";
import * as Env from "./environments";
import Parse from "parse";
import Components from "./Components/Components.js";

//Initialize parse
Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

//This is where the components are called
function App() {
  return <Components />;
}

export default App;