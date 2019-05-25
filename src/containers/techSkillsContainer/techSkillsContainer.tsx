import * as React from "react";
import TechSkills from "../../components/techSkills";

export interface IProps {}

export interface IState {}

class TechSkillsContainer extends React.Component<IProps, IState> {
  public render() {
    return <TechSkills />;
  }
}

export default TechSkillsContainer;
