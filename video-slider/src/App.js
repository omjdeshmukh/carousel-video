import React from "react";
import "./App.css";
import VideoSlider from "./components/VideoSlider";
import { SliderData } from "./components/SliderData";

function App() {
  return (
    <div className="App">
      <VideoSlider slides={SliderData} />
    </div>
  );
}

export default App;
