import React from 'react';
import Slider from 'react-slick';
import styles from './GallerySlider.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GallerySlider = props => {
  const settings = {
    arrows: false,
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {props.images.map(item => (
        <div className={styles.image}>
          <img src={item.image} alt="image" />
        </div>
      ))}
    </Slider>
  );
};

export default GallerySlider;
