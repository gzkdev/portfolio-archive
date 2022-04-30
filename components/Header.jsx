import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/">
          <a className={styles.header__logo}>Godswill</a>
        </Link>
        <nav className={styles.header__nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Work</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
            <li>
              <Link href="/">Resume</Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => setIsToggle(!isToggle)}
          data-toggle={isToggle && "true"}
          className={styles.header__menu__btn}
        ></button>
      </div>
      <div
        data-toggle={isToggle && "true"}
        className={styles.header__menu}
      ></div>
    </header>
  );
}

export default Header;
