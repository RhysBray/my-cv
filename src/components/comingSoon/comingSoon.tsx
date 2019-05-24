import * as React from "react";
import styles from "./comingSoon.module.scss";

export interface IProps {}

export interface IState {}

class ComingSoon extends React.Component<IProps, IState> {
  public render() {
    return <p className={styles.soon}>Coming Soon!</p>;
  }
}

export default ComingSoon;
