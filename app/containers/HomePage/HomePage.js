import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Fade } from 'react-reveal';
import styles from './HomePage.module.scss';
import logo from '../../images/homePage/logo.jpg';
import game1 from '../../images/1917/homePage/banner.jpg';
import game2 from '../../images/BTT/homePage/banner.jpg';
import game3 from '../../images/homePage/banner.jpg';
import { ReactComponent as Twitter } from '../../images/social/twitter_1.svg';
import { ReactComponent as Facebook } from '../../images/social/facebook_1.svg';
import { ReactComponent as Instagram } from '../../images/social/instagram_1.svg';
import { ReactComponent as Discord } from '../../images/social/discord_1.svg';
import { ReactComponent as Youtube } from '../../images/social/youtube_1.svg';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Payara Games</title>
        <meta name="description" content="Payara Games" />
      </Helmet>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Fade bottom delay={900}>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
            </div>
          </Fade>
          <div className={styles.nav}>
            <div className={styles.games}>
              <div className={styles.game}>
                <Fade top>
                  <Link to="/1917">
                    <img src={game1} alt="game" />
                  </Link>
                </Fade>
              </div>
              <div className={styles.game}>
                <Fade top delay={300}>
                  <Link to="/beyondthethaw">
                    <img src={game2} alt="game" />
                  </Link>
                </Fade>
              </div>
              <div
                className={classNames({
                  [styles.game]: true,
                  [styles.disabled]: true,
                })}
              >
                <Fade top delay={600}>
                  <Link to="/game3">
                    <img src={game3} alt="game" />
                  </Link>
                </Fade>
              </div>
            </div>
            <Fade right delay={900}>
              <div className={styles.social}>
                <a
                  href="https://twitter.com/payaragames"
                  className={styles.socialItem}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Twitter />
                </a>
                <a
                  href="https://www.facebook.com/payaragames"
                  className={styles.socialItem}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.instagram.com/payaragames"
                  className={styles.socialItem}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Instagram />
                </a>
                <a
                  href="https://discord.com/invite/hpZmX4v4cw"
                  className={styles.socialItem}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Discord />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCc_KpsGYk3PMK_o7u8yw36w"
                  className={styles.socialItem}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Youtube />
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
