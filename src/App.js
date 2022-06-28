import React, { useEffect, useState } from "react";

import css from "./App.module.scss";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <div className={css.main}>
      <Dashboard />
    </div>
  );
}

export default App;
