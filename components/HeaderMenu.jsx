import Link from "next/link";
import styles from "../styles/HeaderMenu.module.css";

function HeaderMenu({ isToggle }) {
  return (
    <div data-toggle={isToggle && "true"} className={styles.header__menu}>
      <div className={styles.header__menu__container}>
        <ul className={styles.header__menu__list}>
          <li>Navigation</li>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/works">
              <a>Projects</a>
            </Link>{" "}
            <small>(Archive)</small>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>

        <ul className={styles.header__menu__socials}>
          <li>Socials</li>
          <li>
            <a
              href="https://twitter.com/gzkdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://github.com/gzkdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/godswill-ezihe"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/gzkdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codepen
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenu;
