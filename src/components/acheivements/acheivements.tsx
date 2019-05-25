import * as React from "react";
import styles from "./acheivements.module.scss";

export interface IProps {}

export interface IState {}

class Acheivements extends React.Component<IProps, IState> {
  public render() {
    return (
      <section>
        <h3 className={styles.title}>Acheivements</h3>
        <p className={styles.info}>
          Other Notable Achievements • I was selected to be part of a Fast track
          program by my school where I was able to take my GSCE’s for science a
          year early gaining my 2 A*s before most others of my age. This opened
          up the opportunity to be able to complete my Advanced • Subsidiary in
          Science during the end of my GCSE’s, achieving a B grade before even
          starting college. Whilst studying French I was able to travel to
          Brittany, France to live with a family and experience their culture
          first hand. In addition I got to spend some of this time teaching
          English to a primary school class in St Pol de Leon.
        </p>
      </section>
    );
  }
}

export default Acheivements;
