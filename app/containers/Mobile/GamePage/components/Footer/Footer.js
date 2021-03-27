import React from 'react';
import { Link } from 'react-scroll';
import styles from './Footer.module.scss';
import steam from '../../../../../images/social/steam.png';
import { ReactComponent as Twitter } from '../../../../../images/social/twitter_2.svg';
import { ReactComponent as Facebook } from '../../../../../images/social/facebook_2.svg';
import { ReactComponent as Instagram } from '../../../../../images/social/instagram_2.svg';
import { ReactComponent as Discord } from '../../../../../images/social/discord_2.svg';
import { ReactComponent as Youtube } from '../../../../../images/social/youtube_2.svg';

const Footer = props => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={props.footer.imageTitle} alt="logo" />
      </div>
      <a
        href={props.social.steam}
        className={styles.steam}
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={steam} alt="steam" />
      </a>
      <div className={styles.nav}>
        <Link
          to="about-mobile"
          className={styles.navItem}
          activeClass={styles.active}
          spy
          smooth
          name="About"
        >
          About
        </Link>
        <Link
          to="gallery-mobile"
          className={styles.navItem}
          activeClass={styles.active}
          spy
          smooth
          name="Gallery"
        >
          Gallery
        </Link>
      </div>
      <div className={styles.awardsImage}>
        <img src={props.footer.imageAward} alt="awardsImage" />
      </div>
      <div className={styles.social}>
        <a
          href={props.social.twitter}
          className={styles.socialItem}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Twitter />
        </a>
        <a
          href={props.social.facebook}
          className={styles.socialItem}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Facebook />
        </a>
        <a
          href={props.social.instagram}
          className={styles.socialItem}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Instagram />
        </a>
        <a
          href={props.social.discord}
          className={styles.socialItem}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Discord />
        </a>
        <a
          href={props.social.youtube}
          className={styles.socialItem}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Youtube />
        </a>
      </div>
      <div className={styles.copyright}>
        © 2018-{new Date().getFullYear()} Payara Games
      </div>
    </div>
  </div>
);

export default Footer;
