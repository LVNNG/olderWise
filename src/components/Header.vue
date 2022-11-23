<template>
  <ul>
    <li><h1 class="green-color">olderWise</h1></li>
    <li id="burger-menu" style="float:right"><img src="../assets/Burgermenu.svg"></li>
  </ul>
</template>
<style scoped>
#burger-menu {
    vertical-align: bottom;
    margin-right: 1rem;
    margin-top: 1rem;
}
ul {
    list-style-type: none;
    /* margin: 0; */
    /* padding: 0; */
    overflow: hidden;
}

li {
    float: left;
    display: inline-block;
    margin: 0 10px;
}

h1 {
    margin-top: 0;
}
</style>