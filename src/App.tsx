import React from "react";
import "./App.scss";
import HeaderContainer from "./containers/headerContainer";
import CurrentlyContainer from "./containers/currentlyContainer";
import TechSkillsContainer from "./containers/techSkillsContainer";
import SummaryContainer from "./containers/summaryContainer";
import QualificationsContainer from "./containers/qualificationsContainer";
import AcheivementsContainer from "./containers/acheivementsContainer";
import WorkContainer from "./containers/workContainer";
import InterestsContainer from "./containers/interestsContainer";
import NologyContainer from "./containers/_nologyContainer";
import { Route, Router, Redirect, Switch } from "react-router-dom";
import history from "./history";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Router history={history}>
        <HeaderContainer />

        <main>
          <div className="page-container">
            {/* <ComingSoonContainer /> */}
            <Switch>
              <Route path="/currently" component={CurrentlyContainer} />
              <Route path="/tech-skills" component={TechSkillsContainer} />
              <Route path="/summary" component={SummaryContainer} />
              <Route path="/nology" component={NologyContainer} />
              <Route
                path="/qualifications"
                component={QualificationsContainer}
              />
              <Route path="/acheivements" component={AcheivementsContainer} />
              <Route path="/work-experience" component={WorkContainer} />
              <Route path="/interests" component={InterestsContainer} />
              <Route exact={true} path="/" component={CurrentlyContainer} />
              <Redirect to="/currently" />
            </Switch>
          </div>
        </main>
      </Router>
    </React.Fragment>
  );
};

export default App;
