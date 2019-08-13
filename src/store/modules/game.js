const init = {
  currentPlayer: (Math.floor(Math.random() * 10)) % 2 === 0 ? 'x' : 'o',
  history: [
    {
      squares: Array(9).fill(null),
      winner: null,
      player: 'x',
    },
  ],
  stepNo: 0,
  winner: null,
};

const actions = {
};

const getters = {
  getHistory: state => state.history,
  getStepNo: state => state.stepNo,
  getCurrentPlayer: state => state.currentPlayer,
  getWinner: state => state.winner,
};

const mutations = {
  changePlayer(state, player) {
    state.currentPlayer = player;
  },
  togglePlayer(state) {
    state.currentPlayer = state.currentPlayer === 'x' ? 'o' : 'x';
  },
  reset(state) {
    state.history = [
      {
        squares: Array(9).fill(null),
        winner: null,
      },
    ];
    state.stepNo = 0;
    state.currentPlayer = state.winner ? state.winner : state.currentPlayer;
    state.winner = null;
  },
  addHistory(state, payload) {
    state.history = payload;
    state.stepNo = state.history.length - 1;
  },
  setWinner(state, winner) {
    state.winner = winner;
  },
  setStepNo(state, no) {
    state.stepNo = no;
  },
};

export default {
  namespaced: true,
  state: init,
  getters,
  actions,
  mutations,
};
