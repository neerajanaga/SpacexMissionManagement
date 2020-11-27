import React from "react";
import MainComponent from "./Components/MainComponent/mainComponent";
import { observer } from "mobx-react";

function App() {
  return <MainComponent />;
}

export default observer(App);
