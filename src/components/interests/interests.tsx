import * as React from "react";
import styles from "./interests.module.scss";

export interface IProps {}

export interface IState {}

class Interests extends React.Component<IProps, IState> {
  public render() {
    return (
      <section>
        <h3 className={styles.title}>Interests</h3>
        <p className={styles.info}>
          • Gaming – light competitiveness with fiends and family, on PC and
          Xbox • Gym – not just a way for me to keep fit, but a rewarding way to
          set myself targets each session. • Learning new things – An odd one
          but a lot of my free time is learning about something new, like making
          a life-like CGI donut using Blender!
        </p>
      </section>
    );
  }
}

export default Interests;
