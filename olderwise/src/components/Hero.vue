<template>
  <div class="circle two"></div>
  <div class="row">
    <div class="column">
      <h1 class="orange-color orange-gradient" style="margin-top: 4rem; margin-bottom: 0px; padding-bottom: 0px;">Personalised Finance</h1>
      <h1 class="green-color" style="margin-top: 0px;">Safe and Secure</h1>
      <p class="green-color">
        The anti-scam solution to smarter and easier banking for older Singaporeans.
      </p>

      <a href="www.google.com" class="my-button green-color">FIND OUT MORE</a>
    </div>
    <div class="column">
      <img id="cardPicture" src="../assets/RightSection.svg" />
    </div>
  </div>
  <div class="row">
    <img id="groupLogos" src="../assets/groupLogos.png"/>
  </div>
  <div class="circle one"></div>
</template>

<script>
export default {
  name: "Hero",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cardPicture {
  max-width: 100%;
  height: auto;
}
#groupLogos {
  max-width: 50%;
  /* height: auto; */
  display: block;
  margin: 2rem auto;
}
h1,
p {
  text-align: left;
}

h1 {
  font-size: 50px;
  line-height:3.5rem
}

h3 {
  margin: 40px 0 0;
}
a {
  margin-top: 2rem;
  text-align: left;
}
.one {
  position: fixed;
  left: -25.46%;
  right: 74.48%;
  top: 59.89%;
  bottom: -38.76%;
}

.two {
  position: fixed;
  left: 80.27%;
  right: -9.72%;
  top: -17.1%;
  bottom: 71.53%;
}
</style>
