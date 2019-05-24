import React from "react";
import "./App.scss";
import HeaderContainer from "./containers/headerContainer";
import ComingSoonContainer from "./containers/comingSoonContainer";
import CurrentlyContainer from "./containers/currentlyContainer";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderContainer />

      <main>
        <div className="page-container">
          {/* <ComingSoonContainer /> */}
          <CurrentlyContainer />
        </div>
      </main>
    </React.Fragment>
  );
};

export default App;
