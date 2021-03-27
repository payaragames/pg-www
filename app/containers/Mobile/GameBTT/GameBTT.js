import React from 'react';
import GamePage from '../GamePage/Loadable';
import headerImageLogo from '../../../images/BTT/gamePage/header/logo.png';
import bannerImageTitle from '../../../images/BTT/gamePage/banner/image_title.png';
import bannerImageBackground from '../../../images/BTT/gamePage/banner/image_background.jpg';
import aboutVideo from '../../../video/btt.mp4';
import aboutVideoPoster from '../../../images/BTT/gamePage/about/video_poster.jpg';
import aboutFeatureImage1 from '../../../images/BTT/gamePage/about/image_1.jpg';
import aboutFeatureImage2 from '../../../images/BTT/gamePage/about/image_2.jpg';
import galleryImage1 from '../../../images/BTT/gamePage/gallery/image_1.jpg';
import galleryImage2 from '../../../images/BTT/gamePage/gallery/image_2.jpg';
import galleryImage3 from '../../../images/BTT/gamePage/gallery/image_3.jpg';
import galleryImage4 from '../../../images/BTT/gamePage/gallery/image_4.jpg';
import galleryImage5 from '../../../images/BTT/gamePage/gallery/image_5.jpg';
import footerImageTitle from '../../../images/BTT/gamePage/footer/image_title.png';
import footerImageAward from '../../../images/BTT/gamePage/footer/image_award.png';

const game = {
  title: 'Beyond The Thaw',
  header: {
    imageLogo: headerImageLogo,
  },
  banner: {
    imageTitle: bannerImageTitle,
    imageBackground: bannerImageBackground,
  },
  about: {
    video: aboutVideo,
    videoPoster: aboutVideoPoster,
    title: 'Beyond The Thaw',
    genre: 'Adventure, Indie',
    developer: 'Payara Games',
    publisher: 'Payara Games',
    releaseDate: '2021',
    features: [
      {
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imageBackground: aboutFeatureImage1,
      },
      {
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imageBackground: aboutFeatureImage2,
      },
    ],
  },
  gallery: {
    images: [
      { image: galleryImage1 },
      { image: galleryImage2 },
      { image: galleryImage3 },
      { image: galleryImage4 },
      { image: galleryImage5 },
    ],
  },
  footer: {
    imageTitle: footerImageTitle,
    imageAward: footerImageAward,
  },
  social: {
    steam: 'https://store.steampowered.com/app/1434010/Beyond_The_Thaw',
    twitter: 'https://twitter.com/beyondthethaw',
    facebook: 'https://www.facebook.com/beyondthethaw',
    instagram: 'https://www.instagram.com/beyondthethaw',
    discord: 'https://discord.com/invite/hpZmX4v4cw',
    youtube: 'https://www.youtube.com/channel/UCc_KpsGYk3PMK_o7u8yw36w',
  },
};

const GameBTT = () => <GamePage {...game} />;

export default GameBTT;
