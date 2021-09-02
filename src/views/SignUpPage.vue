<template>
  <v-container fill-height fluid class="justify-center red darken-1 bg-image">
    <v-card height="500" width="600">
      <v-container fill-height fluid>
        <v-layout row wrap justify-center align-center>
          <v-flex xs12 md10>
            <h1 class="text-center blue--text">Sign up</h1>
            <div class="mt-3">
              <v-form>
                <v-text-field
                  outlined
                  dense
                  label="Enter your first name"
                  v-model.trim="first_name"
                ></v-text-field>
                <v-text-field
                  outlined
                  dense
                  label="Enter your last name"
                  v-model.trim="last_name"
                ></v-text-field>
                <v-text-field
                  dense
                  label="Enter your email"
                  outlined
                  v-model.trim="email"
                >
                </v-text-field>
                <v-text-field
                  dense
                  label="Enter your address"
                  outlined
                  v-model.trim="address"
                >
                </v-text-field>
                <v-text-field
                  dense
                  label="Password"
                  outlined
                  v-model.trim="password"
                >
                </v-text-field>
                <v-row>
                  <v-btn color="primary" class="mr-4 ml-3" to="/">Login</v-btn>
                  <v-btn
                    color="primary"
                    class="mr-4 ml-3"
                    @click.prevent="signup"
                    >Sign up</v-btn
                  >
                  <!-- <v-btn color="primary" class="mr-4 ml-3"
                  ><v-icon>{{ mdiGmail }}</v-icon> google</v-btn
                > -->
                </v-row>
              </v-form>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import Swal from "sweetalert2";
import { mdiGmail } from "@mdi/js";
import Helpers from "../helpers/Helper.js";
import qs from "qs";
import jwt from "jsonwebtoken";
export default {
  name: "SignUpPage",
  data() {
    return {
      mdiGmail: mdiGmail,
      // ....... v-models for signup user values
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      password: "",
    };
  },

  methods: {
    signup() {
      if (
        !this.first_name ||
        !this.last_name ||
        !this.email ||
        !this.address ||
        !this.password
      ) {
        Swal.fire("Opps", "Please enter all values", "error");
      }
      if (
        this.first_name &&
        this.last_name &&
        this.email &&
        this.address &&
        this.password
      ) {
        const url = "http://localhost:3001/api/auth/signup";
        const user = qs.stringify({
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          address: this.address,
          password: this.password,
        });
        Helpers.post(url, user)
          .then((response) => {
            if (response.status == 200) {
              Swal.fire(
                "Account Created",
                "Conragulation! Your account has been created successfully",
                "success"
              );
              this.$router.push("/login");
            }
            if (response.status == 203) {
              Swal.fire("Opps Sorry", response.data.message, "error");
            }
            console.log("Response", response);
          })
          .catch((error) => {
            console.log("Error", error);
          });
        console.log("first_name: ", this.first_name);
        console.log("last_name: ", this.last_name);
        console.log("email: ", this.email);
        console.log("address: ", this.address);
        console.log("password: ", this.password);
      }
    },
  },
  created() {
    console.log("params token", this.$route.params.token);
    if (this.$route.params.token) {
      let token = this.$route.params.token;
      console.log("token", token);
      var decoded = jwt.decode(token, { complete: true });
      console.log("decoded", decoded);
      console.log("email", decoded.payload.email);
      this.email= decoded.payload.email;
      console.log("this.email", this.email);
    }
  },
};
</script>
<style>
.bg-image {
  background: url("../assets/images/background-image.jpg");
  background-size: cover;
}
</style>
