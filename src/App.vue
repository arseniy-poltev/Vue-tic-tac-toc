<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.d-flex {
  display: flex!important;
}
.flex-col {
  flex-direction: column!important;
}
.flex-row {
  flex-direction: row!important;
}
.flex-1 {
  flex: 1!important;
}
.flex-2 {
  flex: 2!important;
}
.flex-3 {
  flex: 3!important;
}
</style>
