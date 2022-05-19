import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className={styles.footer__container}>
          <div>&copy; {new Date().getFullYear()} Godswill</div>
          <nav>
            <ul className={styles.footer__nav__list}>
              <li>
                <a
                  href="http://twitter.com/gzkdev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="http://twitter.com/gzkdev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="http://twitter.com/gzkdev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="http://twitter.com/gzkdev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Codepen
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
