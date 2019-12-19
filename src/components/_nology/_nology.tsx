import * as React from "react";
import styles from "./_nology.module.scss";

export interface IProps {}

export interface IState {}

class Nology extends React.Component<IProps, IState> {
  render() {
    return (
      <section>
        <h3 className={styles.title}>_nology Software Bootcamp</h3>
        <div className={styles.line} />
        <h4 className={styles["sub-heading"]}>
          Software Developer Trainee | February 2019 - May 2019
        </h4>
        <ul className={styles.info}>
          <li>
            <p>
              Here I was a Software Developer Trainee on a 12-week intensive
              training course where the goal was to take my personal motivation
              to learn and turn it into leading industry talent in a short
              time-space.
            </p>
            <p>
              During the time on the course I learnt a range of skills from
              semantic HTML5 through to putting together apps in React.
            </p>
            <p>
              Using these new skills to complete challenges and projects to
              finally culminate in a real project for a real client working as a
              development team, taking the process from breaking down user
              stories to delivering a product to the owner that meets their
              standards.
            </p>
          </li>
        </ul>
      </section>
    );
  }
}

export default Nology;
