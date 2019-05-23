import * as React from "react";
import Header from "../../components/header";

export interface IProps {}

export interface IState {}

class HeaderContainer extends React.Component<IProps, IState> {
  public render() {
    return <Header />;
  }
}

export default HeaderContainer;
