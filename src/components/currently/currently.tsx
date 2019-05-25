import * as React from "react";
import styles from "./currently.module.scss";

export interface IProps {}

export interface IState {}

class Currently extends React.Component<IProps, IState> {
  public render() {
    return (
      <section>
        <h3 className={styles.title}>Currently</h3>
        <p className={styles.info}>
          Software Developer Trainee - Fresh out of a 12-week intensive training
          course at _nology where the goal was to take my personal motivation to
          learn and turn it into leading industry talent in a short time-space.
          During the time on the course I’ve learnt a range of skills from
          semantic HTML5 all the way to putting together apps in React. Using
          these new skills to complete challenges and projects to finally
          culminate in a real project for a real client as a development team,
          taking the process from breaking down user stories to delivering the
          product to the owner that meets their standards.
        </p>
      </section>
    );
  }
}

export default Currently;
