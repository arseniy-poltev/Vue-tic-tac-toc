<template>
  <div class="col-md-12 text-center d-flex flex-col page-container"
    style="height: calc(100vh - 60px)">
    <div>
      <img class="logo" src="../assets/logo-full.png">
    </div>
    <div class="row mt-3 flex-1">
      <div class="col-md-8 pt-2">
        <Board></Board>
      </div>
      <div class="col-md-4 pt-2 d-flex flex-col h-100">
        <div class="w-100 score-container">
          <div class="d-flex score">
            <div class="text-right mr-2 flex-1">{{getPlayerX.score}}</div>
            <div>:</div>
            <div class="text-left ml-2 flex-1">{{getPlayerO.score}}</div>
          </div>
          <div class="d-flex">
            <div class="text-right mr-2 flex-1">
              {{getPlayerX.name}}(<span class="symbol">x</span>)
            </div>
            <div> </div>
            <div class="text-left ml-2 flex-1">
              {{getPlayerO.name}}(<span class="symbol">o</span>)
            </div>
          </div>
        </div>
        <span class="history-label text-left">History</span>
        <div class="w-100 flex-1 d-flex flex-col history-container text-left">
          <ol class="flex-1">
            <li v-for="n in getHistoryLen" :key="n">
              <a href="#" @click.prevent="goToStep(n-1)">
                {{ n-1 == 0 ? 'Game Start':'Move #'+(n-1)}}
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Board from '../components/Board';

export default {
  name: 'game',
  data() {
    return {
      isShowing: true,
    };
  },
  created() {
    if (this.getPlayerX.name === '' || this.getPlayerO.name === '') {
      this.$router.push({ name: 'players' });
    }
  },
  methods: {
    ...mapMutations('game', [
      'changePlayer', 'reset', 'setStepNo', 'setWinner',
    ]),
    goToStep(idx) {
      const current = this.getHistory[idx];
      this.setStepNo(idx);
      this.setWinner(current.winner);
      this.changePlayer(current.player);
    },
    alertPlayerAgainMessage(message) {
      this.$bvModal.msgBoxOk(message, {
        title: 'Congratulation',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'success',
        okTitle: 'Play Again',
        footerClass: 'p-2',
        centered: true,
      }).then(() => {
        this.reset();
      });
    },
  },
  components: {
    Board,
  },
  watch: {
    getWinner() {
      if (this.getWinner) {
        const winner = this.getWinner === 'x' ? this.getPlayerX.name : this.getPlayerO.name;
        this.alertPlayerAgainMessage(`Winner is ${winner}!`);
      }
    },
    getHistoryLen() {
      if (this.getWinner == null && this.getHistoryLen === 10) {
        this.alertPlayerAgainMessage('Match is drawn');
      }
    },
  },
  computed: {
    ...mapGetters('player', [
      'getPlayerX', 'getPlayerO',
    ]),
    ...mapGetters('game', [
      'getHistory', 'getWinner',
    ]),
    getHistoryLen() {
      return this.getHistory.length;
    },
  },
};
</script>

<style scoped>
.score-container {
  height: 80px;
}

.score{
  font-size: 26px;
}

.symbol {
  font-size: 26px;
}
@media (min-width: 768px) {
  .history-container{
    max-height: 80%;
    overflow-y: auto;
  }
}

.history-label{
  font-size: 26px;
}

</style>
