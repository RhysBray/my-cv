import * as React from "react";
import styles from "./nav.module.scss";
import { NavLink } from "react-router-dom";

export interface IProps {
  notVisible: boolean;
  menuOpen: boolean;
  showMenu: () => void;
}

export interface IState {}

class Nav extends React.Component<IProps, IState> {
  public render() {
    let visibility = "";
    let menu = "";
    this.props.menuOpen ? (menu = styles.show) : (menu = "");
    this.props.notVisible ? (visibility = styles.visible) : (visibility = "");
    return (
      <nav className={`${styles.navigation} ${visibility} ${menu}`}>
        <ul className={styles.links}>
          <li>
            <NavLink
              onClick={this.props.showMenu}
              className={styles.navlink}
              to="/currently"
            >
              Current
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={this.props.showMenu}
              className={styles.navlink}
              to="/nology"
            >
              _nology
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={this.props.showMenu}
              className={styles.navlink}
              to="/tech-skills"
            >
              Tech Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={this.props.showMenu}
              className={styles.navlink}
              to="/summary"
            >
              Summary
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={this.props.showMenu}
              className={styles.navlink}
              to="/qualifications"
            >
              Qualifications
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={this.props.showMenu}
              className={styles.navlink}
              to="/acheivements"
            >
              Acheivements
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={this.props.showMenu}
              className={styles.navlink}
              to="/work-experience"
            >
              Work-Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={this.props.showMenu}
              className={styles.navlink}
              to="/interests"
            >
              Interests
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
