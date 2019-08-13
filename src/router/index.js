import Vue from 'vue';
import Router from 'vue-router';
import WelcomePage from '@/pages/WelcomePage';
import EnterPlayerPage from '@/pages/EnterPlayerPage';
import GamePage from '@/pages/GamePage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomePage,
    },
    {
      path: '/players',
      name: 'players',
      component: EnterPlayerPage,
    },
    {
      path: '/game',
      name: 'game',
      component: GamePage,
    },
  ],
});
