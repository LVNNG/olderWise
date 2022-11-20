<template>
  <div class="hello row">
    <div class="column">
    <h1>Personalised Finance</h1>
    <h1>Safe And Secure</h1>
    <p>
     Ship your fintech products to your customers with fast and reliable processes. Secure and highly customizable. Rise Finance is the best partner for you if you want to scale your finance products worldwide.
    </p>
    <h3>Installed CLI Plugins</h3>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    </div>
    <div class="column"><img id="cardPicture" src="../assets/RightSection.svg"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cardPicture {
  max-width: 100%;
  height: auto;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.row {
  display: flex;
}

.column {
  flex: 50%;
}
</style>
