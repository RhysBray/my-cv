import * as React from "react";
import Currently from "../../components/currently";

export interface IProps {}

export interface IState {}

class CurrentlyContainer extends React.Component<IProps, IState> {
  public render() {
    return <Currently />;
  }
}

export default CurrentlyContainer;
