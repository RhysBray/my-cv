import * as React from "react";
import styles from "./work.module.scss";

export interface IProps {}

export interface IState {}

class Work extends React.Component<IProps, IState> {
  public render() {
    return (
      <section>
        <h3 className={styles.title}>Work Experience</h3>
        <div className={styles.line} />
        <ul className={styles.info}>
          <h4 className={styles["sub-heading"]}>
            The Fox Den | September 2017 – February 2019
          </h4>
          <li>
            <li>I worked as a Front of house team member.</li>
            <li>
              This role made me more resilient to working under high pressure
              whilst still maintaining the same friendly service to the hundreds
              of people I met each week.
            </li>
            <li>
              My duties ranged from greeting and making guests feel welcome to
              taking orders to handling guest complaints.
            </li>
            <li>
              Communication was essential in this job, not just with guests, but
              the back of house team due to the risk of allergens in food.
            </li>
            <li>
              There was an incentive of receiving more tips for giving
              impeccable service, going above and beyond what the job required.
              It’s often the little things that made the biggest difference so
              there was a strong emphasis on paying close attention to detail
              within my role.
            </li>
            <li>
              Prior to leaving I had begun the process to become a team leader,
              giving me the opportunity to give more official guidance to other
              team members whilst allowing me to earn a little more.
            </li>
          </li>
          <h4 className={styles["sub-heading"]}>
            OMG Bristol | May 2015 – September 2017
          </h4>
          <li>
            <li>Here I worked as a member of the bar staff team.</li>
            <li>
              Working here helped to build my people skills, like communicating
              well with the customers and staff to understand how people feel
              and react to difficult social situations.
            </li>
            <li>
              Along with serving customers I had to make judgments on when a how
              to restock the bar during opening hours to balance the work force.
            </li>
            <li>
              A quick turnover of staff meant I was frequently trusted to look
              after those who were new and was always happy to answer any
              questions they had.
            </li>
            <li>
              There was also a monetary incentive to work hard each night as the
              most drinks sales were rewarded with a small bonus which I often
              received.
            </li>
          </li>
          <h4 className={styles["sub-heading"]}>McDonalds | 1 year </h4>
          <li>
            During my time there I worked as kitchen staff; preparing food to a
            strict high quality whilst maintaining a hygienic work space to meet
            health and safety standards.
          </li>
          <li>
            Sometimes having to work multiple stations due to low staffing.
          </li>
          <li>
            Working as part of the team was of extreme importance as to avoid a
            bottleneck that would also offset other staff members.
          </li>
        </ul>
      </section>
    );
  }
}

export default Work;
