import React from "react";
import "./App.css";
import HeaderContainer from "./containers/headerContainer";
import ComingSoonContainer from "./containers/comingSoonContainer";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderContainer />
      <ComingSoonContainer />
    </React.Fragment>
  );
};

export default App;
