import styles from "../styles/Nav.module.css";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div>
        <Link href="/" passHref>
          <a className={styles.logo}>George Sommerfield</a>
        </Link>
      </div>
      <div>
        <Link href="/about" passHref>
          <a className={styles.navLink}>
            <span className={styles.linkContent}>ABOUT</span>
          </a>
        </Link>
        <Link href="/services" passHref>
          <a className={styles.navLink}>
            <span className={styles.linkContent}>SERVICES</span>
          </a>
        </Link>
        <Link href="/contact" passHref>
          <a className={styles.navLink}>
            <span className={styles.linkContent}>CONTACT</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
