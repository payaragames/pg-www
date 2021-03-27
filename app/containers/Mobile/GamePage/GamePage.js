import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './GamePage.module.scss';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';

const GamePage = props => (
  <>
    <Helmet>
      <title>{props.title} - Payara Games</title>
      <meta name="description" content="Payara Games" />
    </Helmet>
    <div className={styles.wrapper}>
      <Header {...props.header} />
      <Banner {...props} />
      <About {...props.about} />
      <Gallery {...props.gallery} />
      <Footer {...props} />
    </div>
  </>
);

export default GamePage;
