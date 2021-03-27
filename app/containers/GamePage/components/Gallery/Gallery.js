import React from 'react';
import styles from './Gallery.module.scss';

const Gallery = props => (
  <div className={styles.wrapper} id="gallery">
    <div className={styles.container}>
      <div className={styles.title}>Gallery</div>
      <div className={styles.images}>
        {props.images.map(image => (
          <div className={styles.image}>
            <img src={image.image} alt="image" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Gallery;
