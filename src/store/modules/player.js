const init = {
  playerX: {
    name: '',
    score: 0,
  },
  playerO: {
    name: '',
    score: 0,
  },
};

const actions = {
};

const getters = {
  getPlayerX: state => state.playerX,
  getPlayerO: state => state.playerO,
};

const mutations = {
  setPlayers(state, { playerX, playerO }) {
    state.playerX.name = playerX;
    state.playerO.name = playerO;
  },
  winPlayerX(state) {
    state.playerX.score += 1;
  },
  winPlayerO(state) {
    state.playerO.score += 1;
  },
};

export default {
  namespaced: true,
  state: init,
  getters,
  actions,
  mutations,
};
