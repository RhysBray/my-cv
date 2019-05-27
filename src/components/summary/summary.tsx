import * as React from "react";
import styles from "./summary.module.scss";

export interface IProps {}

export interface IState {}

class Summary extends React.Component<IProps, IState> {
  public render() {
    return (
      <section>
        <h3 className={styles.title}>Professional Summary</h3>
        <div className={styles.line} />
        <ul className={styles.info}>
          <li>
            A dedicated worker who is able to maintain professionalism,
            efficiency and accuracy within pressured environments. Able to
            thrive in fast paced environments as evident from previous
            experiences in the work place, in which minimal staff and higher
            than usual customer numbers are common. Having graduated from The
            University of the West of England is competent at adhering to
            schedules and prioritising tasks.
          </li>
        </ul>
      </section>
    );
  }
}

export default Summary;
