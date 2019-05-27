import * as React from "react";
import styles from "./techSkills.module.scss";

export interface IProps {}

export interface IState {}

class TechSkills extends React.Component<IProps, IState> {
  public render() {
    return (
      <section className={styles.section}>
        <h3 className={styles.title}>Tech Skills</h3>
        <div className={styles.line} />
        <h4 className={styles["sub-heading"]}>Gained from _nology |</h4>
        <ul className={styles.info}>
          <li>
            <p>HTML5</p>
            <p>CSS/SASS</p>
            <p>Javascript/Typescript</p>
            <p>React with Redux</p>
            <p>Hitting Rest API’s</p>
            <p>Firebase storage/firestore</p>
            <p>Github/Github flow</p>
            <p>Agile workflow</p>
          </li>
        </ul>
      </section>
    );
  }
}

export default TechSkills;
