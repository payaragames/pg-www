import React from 'react';
import styles from './Gallery.module.scss';
import GallerySlider from './components/GallerySlider/GallerySlider';

const Gallery = props => (
  <div className={styles.wrapper} id="gallery-mobile">
    <div className={styles.container}>
      <div className={styles.title}>Gallery</div>
      <div className={styles.slider}>
        <GallerySlider {...props} />
      </div>
    </div>
  </div>
);

export default Gallery;
