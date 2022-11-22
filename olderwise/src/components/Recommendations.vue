<template>
  <div class="container">
    <div class="circle three"></div>
    <h1 class="orange-gradient">
      Receive Customised Financial Advice and Exclusive Offers
    </h1>
    <div class="row">
      <div class="column">
        <img id="chartPic" src="../assets/CircleChart.png" />
      </div>
      <div class="column">
        <h3>How this works</h3>
        <p>
          We use historical data to predict future consumer behavior or trends
          allowed for targeted marketing, resulting in better customer
          engagement
        </p>
        <img id="chartDesc" src="../assets/chartDesc.svg" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#chartPic {
  max-width: 60%;
  height: auto;
  margin: 1.2em auto;
  display: block;
}
#chartDesc {
  max-width: 80%;
  height: auto;
  display: block;
  margin-top: 5em;
}
.container {
  background-color: #173620;
  margin-left: 0px;
}
.three {
}
h1 {
  text-align: center;
  padding: 2em 8em 1em 8em;
  font-size: 2.8em;
  line-height: 1.1em;
  margin: 0px
}

h3,
p {
  color: white;
  padding-right: 12em;
}
</style>