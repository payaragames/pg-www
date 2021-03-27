import React from 'react';
import styles from './Banner.module.scss';
import steam from '../../../../images/social/steam.png';
import { ReactComponent as Twitter } from '../../../../images/social/twitter_1.svg';
import { ReactComponent as Facebook } from '../../../../images/social/facebook_1.svg';
import { ReactComponent as Instagram } from '../../../../images/social/instagram_1.svg';
import { ReactComponent as Discord } from '../../../../images/social/discord_1.svg';
import { ReactComponent as Youtube } from '../../../../images/social/youtube_1.svg';

const Banner = props => (
  <div
    className={styles.wrapper}
    id="banner"
    style={{ backgroundImage: `url(${props.banner.imageBackground})` }}
  >
    <div className={styles.container}>
      <div className={styles.banner}>
        <img src={props.banner.imageTitle} alt="banner" />
      </div>
      <div className={styles.links}>
        <a
          href={props.social.steam}
          className={styles.steam}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={steam} alt="steam" />
        </a>
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
      </div>
    </div>
    <div className={styles.gradientBot} />
  </div>
);

export default Banner;
