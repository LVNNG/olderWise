<template>
  <form @submit.prevent="onSubmit">
    <label>
      <span>First name:</span>
      <input type="text" id="firstName" v-model="posts.firstName" />
    </label>
    <br />
    <label>
      <span>Last name:</span>
      <input type="text" id="lastName" v-model="posts.lastName" />
    </label>
    <br />
    <label>
      <span>ID number:</span>
      <input type="text" id="IDnumber" v-model="posts.IDnumber" />
    </label>
    <br />
    <label>
      <span>Email Address:</span>
      <input type="text" id="email" v-model="posts.email" />
    </label>
    <hr />
    <div class="btn-block">
      <p>By clicking Register, you agree to our Privacy Policy.</p>
      <button type="submit">Submit</button>
    </div>
  </form>
  <div v-if="messageShow">{{ message }}</div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      message: "",
      messageShow: false,
      posts: {
        firstName: "",
        lastName: "",
        IDnumber: "",
        email: "",
      },
    };
  },
  methods: {
    onSubmit() {
      //   const form = document.querySelector("form");
      //   const formURL =
      //     "https://4glbnraxk2.execute-api.us-east-1.amazonaws.com/Prod/submitForm";

      // form.onsubmit = e => {
      //     e.preventDefault();

      //   let data = {};
      //   Array.from(form).map((input) => (data[input.id] = input.value));
      //   console.log("Sending: ", JSON.stringify(data));

      //   // Create the AJAX request
      //   var xhr = new XMLHttpRequest();
      //   xhr.open(form.method, formURL, true);
      //   xhr.setRequestHeader("Accept", "application/json; charset=utf-8");
      //   xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

      //   // Send the collected data as JSON
      //   xhr.send(JSON.stringify(data));

      //   xhr.onloadend = (response) => {
      //     if (response.target.status === 200) {
      //       form.reset();
      //       this.message = "Form submitted. Success!";
      //     } else {
      //       this.message = "Error! Please try again.";
      //       console.error(JSON.parse(response.target.response).message);
      //     }
      //   };
      // }
      var dataJson = JSON.stringify(this.posts);
      console.log(dataJson);
      axios
        .post(
          "https://4glbnraxk2.execute-api.us-east-1.amazonaws.com/Prod/submitForm",
          dataJson
        )
        .then((response) => {
          this.message = "Your registration is successful!"
          this.messageShow = true;
          console.log(response);
        })
        .catch((e) => {
          this.message ="There was an error processing your request"
          console.log(e);
        });
      Event.preventDefault();
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