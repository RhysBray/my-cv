import * as React from "react";
import Acheivements from "../../components/acheivements";

export interface IProps {}

export interface IState {}

class AcheivementsContainer extends React.Component<IProps, IState> {
  public render() {
    return <Acheivements />;
  }
}

export default AcheivementsContainer;
