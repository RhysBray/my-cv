import * as React from "react";
import styles from "./qualifications.module.scss";

export interface IProps {}

export interface IState {}

class Qualifications extends React.Component<IProps, IState> {
  public render() {
    return (
      <section>
        <h3 className={styles.title}>Academic Qualifications</h3>
        <p className={styles.info}>
          • Graduated with a 2:1 in (BSc) Mathematics from The University of the
          West of England in 2017. Invaluable experience has been gained during
          my time studying. Especially within group projects, where
          communication was essential as well as allocation of tasks to suit the
          strengths of the individual members in order for the work’s progress
          to be optimised. • Advanced GCE at Camborne Science and International
          Academy Sixth-form years 2011-2014. o Mathematics B(b) 2013. o Art and
          Design C(c) 2013. o Chemistry C(c) 2014. • Advanced Subsidiary o
          Biology C(c) 2014. o Applied Science A(a) 2014. o Physics E(e) 2012. o
          Science B(b) 2011. • GCSE’s at Camborne Science and International
          Academy during years 2006-2011. 10 GCSE’s ranging from A*to C
          including; 2 A*’s for Science; A in each Maths and French; and B for
          both English and English Literature. • Other qualifications o
          Functional Mathematics Level 2 2009. o Workplace Hazard Awareness
          (Entry 3).
        </p>
      </section>
    );
  }
}

export default Qualifications;
