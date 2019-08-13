<template>
  <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    v-on:after-leave="afterLeave"
    v-bind:css="false">
    <div v-show="show" class="col-md-12 text-center d-flex flex-col page-container">
      <div class="flex-1">
          <img class="logo" src="../assets/logo-full.png">
      </div>
      <div class="flex-1">
        <h1>{{ msg }}</h1>
      </div>
      <div class="flex-1">
        <a href="#" @click="goEnterPage">Enter Player Names</a>
      </div>
    </div>
  </transition>
</template>

<script>
import Velocity from 'velocity-animate';

export default {
  name: 'welcome',
  data() {
    return {
      msg: 'Welcome to Tic Tac Toe',
      show: false,
    };
  },
  mounted() {
    this.show = true;
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 2500, complete: done });
    },
    leave(el, done) {
      Velocity(el, { translateY: '-100vh' }, { duration: 2000, complete: done });
    },
    afterLeave() {
      this.$router.push({ name: 'players' });
    },
    goEnterPage() {
      this.show = false;
    },
  },
};
</script>

<style scoped>
@media (max-width: 376px) {
  .logo {
    width: 90%
  }
}

.page-container {
  height: 100vh
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
