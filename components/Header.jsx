import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/">
          <a className={styles.header__logo}>GZK⚡</a>
        </Link>
        <nav className={styles.header__nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#projects">Works</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
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
      <HeaderMenu isToggle={isToggle} />
    </header>
  );
}

export default Header;
