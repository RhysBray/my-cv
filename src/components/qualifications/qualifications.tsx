import * as React from "react";
import styles from "./qualifications.module.scss";

export interface IProps {}

export interface IState {}

class Qualifications extends React.Component<IProps, IState> {
  public render() {
    return (
      <section>
        <h3 className={styles.title}>Academic Qualifications</h3>
        <div className={styles.line} />
        <ul className={styles.info}>
          <h4 className={styles["sub-heading"]}>Degree | Mathematics |</h4>
          <li>
            Graduated with a 2:1 in (BSc) Mathematics from The University of the
            West of England in 2017. Invaluable experience has been gained
            during my time studying. Especially within group projects, where
            communication was essential as well as allocation of tasks to suit
            the strengths of the individual members in order for the work’s
            progress to be optimised.
          </li>
          <h4 className={styles["sub-heading"]}>
            Advanced GCE | Camborne Science and International Academy Sixth-form
            | 2011-2014 |
          </h4>
          <li>
            <p>Mathematics B(b)</p>
            <p>Art and Design C(c)</p>
            <p>Chemistry C(c)</p>
          </li>

          <h4 className={styles["sub-heading"]}>
            Advanced Subsidiary | Camborne Science and International Academy
            Sixth-form |
          </h4>
          <li>
            <p>Biology C(c)</p>
            <p>Applied Science A(a)</p>
            <p>Physics E(e)</p>
            <p>Science B(b)</p>
          </li>

          <h4 className={styles["sub-heading"]}>
            GCSE’s | Camborne Science and International Academy | 2006-2011 |
          </h4>
          <li>
            <p>
              10 GCSE’s ranging from A*to C including; 2 A*’s for Science; A in
              each Maths and French; and B for both English and English
              Literature.
            </p>
          </li>

          <h4 className={styles["sub-heading"]}>
            Other qualifications | 2009 |
          </h4>
          <li>
            <p>Functional Mathematics Level 2</p>
            <p>Workplace Hazard Awareness (Entry 3)</p>
          </li>
        </ul>
      </section>
    );
  }
}

export default Qualifications;
