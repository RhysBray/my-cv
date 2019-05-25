import * as React from "react";
import Summary from "../../components/summary";

export interface IProps {}

export interface IState {}

class SummaryContainer extends React.Component<IProps, IState> {
  public render() {
    return <Summary />;
  }
}

export default SummaryContainer;
