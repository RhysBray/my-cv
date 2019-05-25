import * as React from "react";
import Qualifications from "../../components/qualifications";

export interface IProps {}

export interface IState {}

class QualificationsContainer extends React.Component<IProps, IState> {
  public render() {
    return <Qualifications />;
  }
}

export default QualificationsContainer;
