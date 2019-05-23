import * as React from "react";
import ComingSoon from "../../components/comingSoon";

export interface IProps {}

export interface IState {}

class ComingSoonContainer extends React.Component<IProps, IState> {
  public render() {
    return <ComingSoon />;
  }
}

export default ComingSoonContainer;
