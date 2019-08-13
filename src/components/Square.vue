<template>
  <b-button class="square" variant="outline-light" @click="onClick(idx)">{{getVal}}</b-button>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'square',
  props: [
    'idx',
  ],
  methods: {
    ...mapMutations('player', [
      'winPlayerX', 'winPlayerO',
    ]),
    ...mapMutations('game', [
      'addHistory', 'setWinner', 'togglePlayer',
    ]),
    calculateWinner(squares) {
      const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    },
    onClick(idx) {
      const history = this.getHistory.slice(0, this.getStepNo + 1);

      const current = history[history.length - 1];

      const squares = current.squares.slice();

      if (current.winner || squares[idx]) {
        return;
      }
      squares[idx] = this.getCurrentPlayer;
      const winner = this.calculateWinner(squares);
      const payload = {
        squares,
        winner,
        player: this.getCurrentPlayer === 'x' ? 'o' : 'x',
      };
      this.addHistory(history.concat([payload]));
      if (winner) {
        this.setWinner(winner);
        if (winner === 'x') {
          this.winPlayerX();
        } else {
          this.winPlayerO();
        }
      }
      this.togglePlayer();
    },
  },
  computed: {
    ...mapGetters('game', [
      'getHistory', 'getStepNo', 'getCurrentPlayer',
    ]),
    getVal() {
      const val = this.getHistory[this.getStepNo].squares[this.idx];
      return val == null ? '' : val;
    },
    getCurrent() {
      return this.getHistory[this.getStepNo];
    },
  },
};
</script>

<style scoped>
@media(min-width: 1200px) {
  .square{
    width: 150px;
    height: 150px;
    font-size: 52px;
  }
}

@media(min-width: 992px) and (max-width: 1199px) {
  .square{
    width: 125px;
    height: 125px;
    font-size: 44px;
  }
}

@media(min-width: 576px) and (max-width: 991px) {
  .square{
    width: 100px;
    height: 100px;
    font-size: 36px;
  }
}

@media(max-width: 575px) {
  .square{
    width: 70px;
    height: 70px;
    font-size: 28px;
  }
}

.square{
  color: black!important;
  background: #fff;
  border: 1px solid #999;
  font-weight: bold;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
}
</style>
