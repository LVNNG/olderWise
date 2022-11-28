<template>
  <form @submit="postData" method="post">
    <label>
      <span>First name:</span>
      <input type="text" v-model="posts.firstName" />
    </label>
    <br />
    <label>
      <span>Last name:</span>
      <input type="text" v-model="posts.lastName" />
    </label>
    <br />
    <label>
      <span>ID number:</span>
      <input type="text" v-model="posts.IDnumber" />
    </label>
    <br />
    <label>
      <span>Email Address:</span>
      <input type="text" v-model="posts.email" />
    </label>
    <hr />
    <div class="btn-block">
      <p>By clicking Register, you agree to our Privacy Policy.</p>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      posts: {
        firstName:null,
        lastName: null,
        IDnumber:null,
        email:null
      }
    };
  },
  methods: {
    postData(e) {
      this.axios.post('http://localhost:8080/posts/', this.posts)
      e.preventDefault();
    },
  },
};
</script>
<style scoped>
form {
  text-align: center;
  padding: 2em;
  margin-left: 15em;
  margin-right: 15em;
  background-color: #fbab7e;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
}

input {
  margin-left: 1em;
  margin-bottom: 2em;
}
</style>