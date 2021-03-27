import React from 'react';
import GamePage from '../GamePage/Loadable';
import headerImageLogo from '../../../images/1917/gamePage/header/logo.png';
import bannerImageTitle from '../../../images/1917/gamePage/banner/image_title.png';
import bannerImageBackground from '../../../images/1917/gamePage/banner/image_background.jpg';
import aboutVideo from '../../../video/1917.webm';
import aboutVideoPoster from '../../../images/1917/gamePage/about/video_poster.jpg';
import aboutFeatureImage1 from '../../../images/1917/gamePage/about/image_1.jpg';
import aboutFeatureImage2 from '../../../images/1917/gamePage/about/image_2.jpg';
import galleryImage1 from '../../../images/1917/gamePage/gallery/image_1.jpg';
import galleryImage2 from '../../../images/1917/gamePage/gallery/image_2.jpg';
import galleryImage3 from '../../../images/1917/gamePage/gallery/image_3.jpg';
import galleryImage4 from '../../../images/1917/gamePage/gallery/image_4.jpg';
import galleryImage5 from '../../../images/1917/gamePage/gallery/image_5.jpg';
import footerImageTitle from '../../../images/1917/gamePage/footer/image_title.png';
import footerImageAward from '../../../images/1917/gamePage/footer/image_award.png';

const game = {
  title: '1917',
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
    title: '1917: The Prologue',
    genre: 'Adventure, Indie',
    developer: 'Payara Games',
    publisher: 'Payara Games',
    releaseDate: 'November 6, 2020',
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
    steam: 'https://store.steampowered.com/app/1352230/1917_The_Prologue',
    twitter: 'https://twitter.com/1917theprologue',
    facebook: 'https://www.facebook.com/1917theprologue',
    instagram: 'https://www.instagram.com/1917theprologue',
    discord: 'https://discord.com/invite/hpZmX4v4cw',
    youtube: 'https://www.youtube.com/channel/UCc_KpsGYk3PMK_o7u8yw36w',
  },
};

const Game1917 = () => <GamePage {...game} />;

export default Game1917;
