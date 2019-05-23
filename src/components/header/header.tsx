import * as React from "react";
import styles from "./header.module.scss";
import rhys from "../../assets/images/square.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

export interface IProps {}

export interface IState {
  isClicked: boolean;
}

class Header extends React.Component<IProps, IState> {
  state = { isClicked: false };

  public render() {
    let clicked = "";
    const handleClick = () => {
      this.setState({ isClicked: !this.state.isClicked });
    };
    this.state.isClicked ? (clicked = styles["moved-away"]) : (clicked = "");
    return (
      <header className={`${styles.header} ${clicked}`}>
        <div onClick={handleClick} className={styles["click-box"]} />
        <div className={styles.contents}>
          <img
            onClick={handleClick}
            className={styles.face}
            src={rhys}
            alt="rhys' face"
          />
          <h1 onClick={handleClick}>Rhys Bray</h1>
          <h2 onClick={handleClick}>- Welcome to my site -</h2>
          <section className={styles.links}>
            <a
              href="https://www.linkedin.com/in/rhys-bray-278a70147/"
              target="_blank"
              className={styles.icon}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/RhysBray"
              target="_blank"
              className={styles.icon}
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            <a href="mailto:rhysabray@hotmail.com" className={styles.icon}>
              <FontAwesomeIcon icon={faEnvelopeSquare} />
            </a>
          </section>
        </div>
      </header>
    );
  }
}

export default Header;
