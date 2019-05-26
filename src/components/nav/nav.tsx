import * as React from "react";
import styles from "./nav.module.scss";
import { NavLink } from "react-router-dom";

export interface IProps {
  notVisible: boolean;
}

export interface IState {}

class Nav extends React.Component<IProps, IState> {
  public render() {
    let visibility = "";
    this.props.notVisible ? (visibility = styles.visible) : (visibility = "");
    return (
      <nav className={`${styles.navigation} ${visibility}`}>
        <ul className={styles.links}>
          <li>
            <NavLink className={styles.navlink} to="/currently">
              cur
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.navlink} to="/tech-skills">
              skills
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.navlink} to="/summary">
              summ
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.navlink} to="/qualifications">
              qual
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.navlink} to="/acheivements">
              achie
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.navlink} to="/work-experience">
              work
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.navlink} to="/interests">
              7inter
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
