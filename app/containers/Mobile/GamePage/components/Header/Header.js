import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-scroll';
import styles from './Header.module.scss';

const Header = (props) => {
  const [menuIsOpen, setStateMenu] = useState(false);
  const changeMenuStateLink = () => {
    setStateMenu(!menuIsOpen);
    // if (!menuIsOpen) {
    //   document.body.style.position = 'fixed';
    // } else {
    //   document.body.style.position = '';
    // }
  };
  const changeMenuStateBtn = () => {
    setStateMenu(!menuIsOpen);
    // if (!menuIsOpen) {
    //   document.body.style.top = `-${window.scrollY}px`;
    //   document.body.style.position = 'fixed';
    // } else {
    //   const scrollY = document.body.style.top;
    //   document.body.style.position = '';
    //   document.body.style.top = '';
    //   window.scrollTo(0, parseInt(scrollY || '0') * -1);
    // }
  };

  return (
    <div className={styles.wrapper} id="header-mobile">
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={props.imageLogo} alt="logo" />
        </div>

        <div
          className={classNames({
            [styles.mobileMenu]: true,
            [styles.menuIsOpen]: menuIsOpen,
          })}
        >
          <div className={styles.menuIcon} onClick={changeMenuStateBtn}>
            <div className={styles.line} />
            <div className={styles.line} />
            <div className={styles.line} />
          </div>
          <div className={styles.menuNav}>
            <div className={styles.navWrapper}>
              <Link
                to="about-mobile"
                className={styles.navItem}
                activeClass={styles.active}
                spy
                smooth
                name="About"
              >
                <div onClick={changeMenuStateLink}>About</div>
              </Link>
              <Link
                to="gallery-mobile"
                className={styles.navItem}
                activeClass={styles.active}
                spy
                smooth
                name="Gallery"
              >
                <div onClick={changeMenuStateLink}>Gallery</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
