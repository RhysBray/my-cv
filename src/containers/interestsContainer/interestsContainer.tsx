import * as React from "react";
import Interests from "../../components/interests";

export interface IProps {}

export interface IState {}

class InterestsContainer extends React.Component<IProps, IState> {
  public render() {
    return <Interests />;
  }
}

export default InterestsContainer;
