<template>
  <div id="app">
    <Header></Header>
  </div>
  <HelloWorld/>
</template>

<script>
import HelloWorld from "./components/Hero.vue";
import Header from './components/Header.vue';

export default {
  name: "App",
  components: {
    HelloWorld,
    Header
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

.green-color {
  color: #6E906F
}
</style>
