import * as React from "react";
import styles from "./currently.module.scss";

export interface IProps {}

export interface IState {}

class Currently extends React.Component<IProps, IState> {
  public render() {
    return (
      <section>
        <h3 className={styles.title}>Currently</h3>
        <div className={styles.line} />
        <h4 className={styles["sub-heading"]}>Software Developer Junior |</h4>
        <ul className={styles.info}>
          <li>
            Fresh out of a 12-week intensive training course at _nology where
            the goal was to take my personal motivation to learn and turn it
            into leading industry talent in a short time-space.
          </li>
          <li>
            During the time on the course I’ve learnt a range of skills from
            semantic HTML5 all the way to building apps in React.
          </li>
          <li>
            Using these new skills I completed challenges and projects to
            finally culminate in a real project for a real client as a
            development team, taking the process from breaking down user stories
            to delivering the product to the owner that meets their standards.
          </li>
        </ul>
      </section>
    );
  }
}

export default Currently;
