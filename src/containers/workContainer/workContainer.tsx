import * as React from "react";
import Work from "../../components/work";

export interface IProps {}

export interface IState {}

class workContainer extends React.Component<IProps, IState> {
  public render() {
    return <Work />;
  }
}

export default workContainer;
