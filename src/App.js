import React from "react";

import css from "./App.module.scss";
import Dashboard from "./Components/Dashboard/dashboard";
import "@cloudscape-design/global-styles/index.css";

function App() {
  return (
    <div className={css.main}>
      <Dashboard />
    </div>
  );
}

export default App;
