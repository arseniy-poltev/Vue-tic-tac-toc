import Vue from 'vue';
import Vuex from 'vuex';
import player from './modules/player';
import game from './modules/game';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    player,
    game,
  },
});
