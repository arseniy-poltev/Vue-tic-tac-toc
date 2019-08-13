<template>
  <div>
    <div class="col-md-12 text-center">
      <img class="logo" src="../assets/logo-full.png">
      <div class="my-3">
        <span class="msg">{{msg}}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 offset-md-2 col-sm-12 form-group">
        <label for="player-x-name" class="control-label">
          Player<span class="symbol">x</span> Name:
        </label>
        <input
          class="form-control"
          id="player-x-name"
          v-model="playerX"
          placeholder="Please input name">
      </div>
      <div class="col-md-8 offset-md-2 col-sm-12 form-group">
        <label for="player-o-name" class="control-label">
          Player<span class="symbol">o</span> Name:
        </label>
        <input
          class="form-control"
          id="player-o-name"
          v-model="playerO"
          placeholder="Please input name">
      </div>
      <div class="col-md-8 offset-md-2 mt-5">
        <b-button variant="success" class="w-100" @click="onStart">Start Game</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'enter-player-names',
  data() {
    return {
      msg: 'Enter Player Names',
      playerX: '',
      playerO: '',
    };
  },
  methods: {
    ...mapMutations('player', ['setPlayers']),
    onStart() {
      const { playerX, playerO } = this;
      if (playerX === '' || playerO === '') {
        this.$bvToast.toast("Please input players' name to start!", {
          variant: 'danger',
          autoHideDelay: 500,
          noCloseButton: true,
        });
      } else if (playerX === playerO) {
        this.$bvToast.toast("Tow Players' name are same, Please input correctly!", {
          variant: 'danger',
          autoHideDelay: 500,
          noCloseButton: true,
        });
      } else {
        this.setPlayers({ playerX, playerO });
        this.$router.push({ name: 'game' });
      }
    },
  },
};
</script>

<style scoped>
@media (max-width: 376px) {
  .logo {
    width: 90vw
  }
}

.msg {
  font-weight: normal;
  font-size: 26px;
}

.symbol {
  font-weight: normal;
  font-size: 26px;
}

.field {
  margin-top: 3px;
}

.start {
  margin-top: 30px;
  width: 260px;
}
</style>
