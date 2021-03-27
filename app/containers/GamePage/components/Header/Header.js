import React from 'react';
import { Link } from 'react-scroll';
import styles from './Header.module.scss';

const Header = props => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to="banner" activeClass={styles.active} spy smooth>
          <img src={props.imageLogo} alt="logo" />
        </Link>
      </div>
      <div className={styles.nav}>
        <Link
          to="about"
          className={styles.navItem}
          activeClass={styles.active}
          spy
          smooth
          name="About"
        >
          About
        </Link>
        <Link
          to="gallery"
          className={styles.navItem}
          activeClass={styles.active}
          spy
          smooth
          name="Gallery"
        >
          Gallery
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
