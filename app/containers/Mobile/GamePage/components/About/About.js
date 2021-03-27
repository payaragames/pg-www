import React from 'react';
import styles from './About.module.scss';

const About = props => (
  <div className={styles.wrapper} id="about-mobile">
    <div className={styles.container}>
      <div className={styles.title}>About</div>
      <div className={styles.video}>
        <video
          src={props.video}
          controls
          controlsList="nodownload"
          disablePictureInPicture
          poster={props.videoPoster}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.infoItem}>
          <div className={styles.label}>Title</div>
          <div className={styles.text}>{props.title}</div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.label}>Genre</div>
          <div className={styles.text}>{props.genre}</div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.label}>Developer</div>
          <div className={styles.text}>{props.developer}</div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.label}>Publisher</div>
          <div className={styles.text}>{props.publisher}</div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.label}>Release Date</div>
          <div className={styles.text}>{props.releaseDate}</div>
        </div>
      </div>
      {props.features.map(feature => (
        <div
          className={styles.feature}
          style={{ backgroundImage: `url(${feature.imageBackground})` }}
        >
          <div className={styles.gradient} />
          <div className={styles.description}>{feature.text}</div>
        </div>
      ))}
    </div>
  </div>
);

export default About;
