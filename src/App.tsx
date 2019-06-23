import React from "react";

import "./App.css";
import DayComponent from "./donelist/DayComponent";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        Donelist
      </header>
      <DayComponent year={2019} month={6} day={23} />
    </div>
  );
};

export default App;
