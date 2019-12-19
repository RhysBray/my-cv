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
        <div className={styles["main-box"]}>
          <div className={styles["inner-box"]}>
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
          </div>
          <div className={styles["inner-box"]}>
            <h4 className={styles["sub-heading"]}>Gained from WPC |</h4>
            <ul className={styles.info}>
              <li>
                <p>HTML5/ HTML Canvas</p>
                <p>CSS</p>
                <p>JQuery</p>
                <p>Javascript</p>
                <p>C#</p>
                <p>Visual Bsic</p>
                <p>Microsoft SQL</p>
                <p>ASP .Net Core MVC 4</p>
                <p>Unit Testing though TDD</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default TechSkills;
