import * as React from "react";
import styles from "./interests.module.scss";

export interface IProps {}

export interface IState {}

class Interests extends React.Component<IProps, IState> {
  public render() {
    return (
      <section>
        <h3 className={styles.title}>Interests</h3>
        <div className={styles.line} />

        <ul className={styles.info}>
          <h4 className={styles["sub-heading"]}>Gaming |</h4>
          <li>Light competitiveness with fiends and family, on PC and Xbox.</li>
          <h4 className={styles["sub-heading"]}>Gym |</h4>
          <li>
            Not just a way for me to keep fit, but a rewarding way to set myself
            targets each session.
          </li>
          <h4 className={styles["sub-heading"]}>Learning new things |</h4>
          <li>
            An odd one but a lot of my free time is learning about something
            new, like making a life-like CGI donut using Blender!
          </li>
        </ul>
      </section>
    );
  }
}

export default Interests;
