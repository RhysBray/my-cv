import * as React from "react";
import styles from "./currently.module.scss";

export interface IProps {}

export interface IState {}

class Currently extends React.Component<IProps, IState> {
  public render() {
    return (
      <section>
        <h3 className={styles.title}>WPC Software</h3>
        <div className={styles.line} />
        <h4 className={styles["sub-heading"]}>
          Software Developer Junior | September 2019 – Present
        </h4>
        <ul className={styles.info}>
          <li>
            <p>
              Due to the nature of the work in dealing with sensitive police
              data there is a 6 month probationary period to ensure their
              standards are met. Within which I have been studying hard on the
              technologies used by the company on their production code in
              preparation for the Microsoft exams.
            </p>
            <p>
              This has taken the form of reading a range of books whilst
              completing the tasks, practicing via katas and the creation of
              small projects set out by the company.
            </p>
          </li>
        </ul>
      </section>
    );
  }
}

export default Currently;
