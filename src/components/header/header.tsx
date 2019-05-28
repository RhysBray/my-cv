import * as React from "react";
import styles from "./header.module.scss";
import rhys from "../../assets/images/square.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare, faBars } from "@fortawesome/free-solid-svg-icons";

import Nav from "../nav";

export interface IProps {}

export interface IState {
  isScreenClicked: boolean;
  isBurgerClicked: boolean;
}

class Header extends React.Component<IProps, IState> {
  state = { isScreenClicked: false, isBurgerClicked: false };

  public render() {
    let clicked = "";
    const moveScreen = () => {
      this.setState({ isScreenClicked: !this.state.isScreenClicked });
    };
    this.state.isScreenClicked
      ? (clicked = styles["moved-away"])
      : (clicked = "");
    const showMenu = () => {
      this.setState({ isBurgerClicked: !this.state.isBurgerClicked });
    };
    return (
      <header className={`${styles.header} ${clicked}`}>
        <div onClick={moveScreen} className={styles["click-box"]} />
        <div className={styles.contents}>
          <img
            onClick={moveScreen}
            className={styles.face}
            src={rhys}
            alt="rhys' face"
          />
          <h1 onClick={moveScreen}>Rhys Bray</h1>
          <h2 onClick={moveScreen}>- Welcome to my CV site -</h2>
          <section className={styles.links}>
            <a
              href="https://www.linkedin.com/in/rhys-bray-278a70147/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/RhysBray"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            <a href="mailto:rhysabray@hotmail.com" className={styles.icon}>
              <FontAwesomeIcon icon={faEnvelopeSquare} />
            </a>
            <div onClick={showMenu}>
              <FontAwesomeIcon className={styles.menu} icon={faBars} />
            </div>
          </section>
          <Nav
            showMenu={showMenu}
            menuOpen={this.state.isBurgerClicked}
            notVisible={this.state.isScreenClicked}
          />
        </div>
      </header>
    );
  }
}

export default Header;
