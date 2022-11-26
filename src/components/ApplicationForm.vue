<template>
  <form>
    <label>
      <span>First name:</span>
      <input type="text" />
    </label>
    <br>
    <label>
      <span>Last name:</span>
      <input type="text" />
    </label>
    <br>
    <label>
      <span>ID number:</span>
      <input type="text" />
    </label>
    <br>
    <label>
      <span>Email Address:</span>
      <input type="text" />
    </label>
    <hr>
    <div class="btn-block">
          <p>By clicking Register, you agree to our Privacy Policy.</p>
          <button type="submit" href="/">Submit</button>
        </div>
  </form>
</template>
<script>
export default {
    methods: {
      test() {
        console.log('hiii')
      }
    },
};
</script>
<style scoped>
form {
  text-align: center;
  padding: 2em;
  margin-left: 15em;
  margin-right: 15em;
  background-color: #FBAB7E;
background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);

}

input {
  margin-left: 1em;
  margin-bottom: 2em;
}
</style>