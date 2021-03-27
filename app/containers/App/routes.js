import HomePage from '../HomePage/Loadable';
import Game1917 from '../Game1917/Loadable';
import Game1917mobile from '../Mobile/Game1917/Loadable';
import GameBTT from '../GameBTT/Loadable';
import GameBTTmobile from '../Mobile/GameBTT/Loadable';
import HomePageMobile from '../Mobile/HomePage/Loadable';
import RedirectPage from '../../components/RedirectPage/index';

export const routes = [
  {
    id: 'homePage',
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    id: '1917',
    path: '/1917',
    component: Game1917,
    exact: true,
  },
  {
    id: 'beyondthethaw',
    path: '/beyondthethaw',
    component: GameBTT,
    exact: true,
  },
  {
    id: 'redirect',
    path: '*',
    component: RedirectPage,
  },
];

export const routesMobile = [
  {
    id: 'homePageMobile',
    path: '/',
    component: HomePageMobile,
    exact: true,
  },
  {
    id: '1917mobile',
    path: '/1917',
    component: Game1917mobile,
    exact: true,
  },
  {
    id: 'beyondthethawmobile',
    path: '/beyondthethaw',
    component: GameBTTmobile,
    exact: true,
  },
  {
    id: 'redirect',
    path: '*',
    component: RedirectPage,
  },
];
