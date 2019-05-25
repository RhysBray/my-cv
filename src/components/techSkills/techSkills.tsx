import * as React from "react";
import styles from "./techSkills.module.scss";

export interface IProps {}

export interface IState {}

class TechSkills extends React.Component<IProps, IState> {
  public render() {
    return (
      <section>
        <h3 className={styles.title}>Tech Skills</h3>
        <p className={styles.info}>
          • HTML5 • CSS/SASS • Javascript/Typescript • React with Redux • Rest
          API’s • Firebase storage/firestore • Github/Github flow • Agile
          workflow
        </p>
      </section>
    );
  }
}

export default TechSkills;
