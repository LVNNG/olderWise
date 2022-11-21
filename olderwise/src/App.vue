<template>
  <div id="app">
    <Header></Header>
    <Hero />
      <CryptoGraph style=""/>
  </div>
</template>

<script>
import Hero from "./components/Hero.vue";
import Header from "./components/Header.vue";
import CryptoGraph from "./components/CryptoGraph.vue";

export default {
  name: "App",
  components: {
    Hero,
    Header,
    CryptoGraph,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 30px;
}

.green-color {
  color: #6e906f;
}
.orange-color {
  color: #ff8a00;
}

.orange-gradient {
  background: -webkit-linear-gradient(left, #f9d246, #ff8a00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.my-button {
  display: inline-block;
  border-style: solid;
  border-width: medium;
  padding: 1rem 3rem;
}

div {
  margin: 0px auto;
}
</style>
