import * as React from "react";
import styles from "./header.module.scss";
import rhys from "../../assets/images/square.jpg";

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
      <header onClick={handleClick} className={`${styles.header} ${clicked}`}>
        <section className={styles.contents}>
          <img className={styles.face} src={rhys} alt="rhys' face" />
          <h1>Rhys Bray</h1>
        </section>
        <h2>- Welcome to my site -</h2>
      </header>
    );
  }
}

export default Header;
