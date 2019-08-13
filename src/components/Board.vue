<template>
  <div class="col-md-10 offset-md-1">
    <div class="col-md-12 text-center" style="font-size: 20px;">
      Current Player is <span class="symbol">{{getCurrentPlayer}}</span>
    </div>
    <div v-for="i in 3" :key="i" class="board-row col-12 text-center">
      <Square v-for="j in 3" :key="j" :idx="getSquareIndex(i,j)" ></Square>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Square from './Square';

export default {
  name: 'board',
  methods: {
    getSquareIndex(i, j) {
      return (3 * (i - 1)) + (j - 1);
    },
  },
  components: {
    Square,
  },
  computed: {
    ...mapGetters('game', [
      'getCurrentPlayer',
    ]),
  },
};
</script>

<style scoped>
.symbol {
  font-weight: normal;
  font-size: 36px;
}

.board-row{
  line-height: 0!important;
}
</style>
