import React from "react";
import "./App.scss";
import HeaderContainer from "./containers/headerContainer";
import ComingSoonContainer from "./containers/comingSoonContainer";
import CurrentlyContainer from "./containers/currentlyContainer";
import TechSkillsContainer from "./containers/techSkillsContainer";
import SummaryContainer from "./containers/summaryContainer";
import QualificationsContainer from "./containers/qualificationsContainer";
import AcheivementsContainer from "./containers/acheivementsContainer";
import WorkContainer from "./containers/workContainer";
import InterestsContainer from "./containers/interestsContainer";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderContainer />

      <main>
        <div className="page-container">
          {/* <ComingSoonContainer /> */}
          <CurrentlyContainer />
          <TechSkillsContainer />
          <SummaryContainer />
          <QualificationsContainer />
          <AcheivementsContainer />
          <WorkContainer />
          <InterestsContainer />
        </div>
      </main>
    </React.Fragment>
  );
};

export default App;
