<template>
  <Header></Header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
* {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* padding: 0rem -1rem; */
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

.green-orange-gradient {
  background: linear-gradient(263.24deg, #c89d05 39.57%, #18771b 77.63%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.my-button {
  display: inline-block;
  border-style: solid;
  border-width: medium;
  padding: 1rem 3rem;
}

.row {
  display: flex;
  margin-left: 3rem;
}

.column {
  flex: 50%;
}
.circle {
  background: linear-gradient(
    177.23deg,
    rgba(255, 138, 0, 0.4) -13.49%,
    rgba(249, 210, 70, 0.4) 109.75%
  );
  filter: blur(100px);
  border-radius: 900px;
  z-index: -10;
}

div {
  margin: 0px auto;
}
</style>
