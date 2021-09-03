<template>
    <v-container
      fill-height
      fluid
      class="justify-center green lighten-3 bg-image"
    >
      <v-card height="350" width="400">
        <v-container fill-height fluid>
          <v-layout row wrap justify-center align-center>
            <v-flex xs12 md10>
              <h1 class="text-center blue--text">Login</h1>
              <div class="mt-3">
                <v-text-field
                  outlined
                  label="Enter your mail here"
                  v-model.trim="email"
                ></v-text-field>
                <v-text-field
                  outlined
                  label="Enter your password here"
                  v-model.trim="password"
                  type="password"
                ></v-text-field>
                <v-row>
                  <v-btn color="green" class="mr-4 ml-3 white--text" @click="login"
                    >Login</v-btn
                  >
                  <!-- sign up dialog start from below -->
                  <v-dialog v-model="dialog" persistent max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="primary" dark v-bind="attrs" v-on="on">
                        Sign up
                      </v-btn>
                    </template>
                    <v-card height="250">
                      <v-container fill-height fluid>
                        <v-layout row wrap justify-center align-center>
                          <v-flex xs12 md10>
                            <v-text-field
                              outlined
                              label="Paste your invitation link here"
                            ></v-text-field>
                            <v-btn color="primary">Sign up</v-btn>
                            <v-btn color="primary" to="/signup" text
                              >Proceed without link</v-btn
                            >
                            <v-btn
                              @click="dialog = false"
                              color="primary"
                              small
                              text
                              >close</v-btn
                            >
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card>
                  </v-dialog>
                  <!-- signup dialog ends here -->
                </v-row>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-container>
</template>

<script>
import Swal from "sweetalert2";
import Helpers from "../helpers/Helper.js";
import config from "../config/config.js";

export default {
  name: "login-page",
  data() {
    return {
      dialog: false,
      // v models for logins
      email: "",
      password: "",
    };
  },

  components: {},
  methods: {
    login() {
      if (this.email && this.password) {
        const url = `${config.URL_CONSTANTS}:${config.API_PORT}/api/auth/signin`;

        Helpers.post(url, { email: this.email, password: this.password })
          .then((response) => {
            console.log("response", response);
            if (response.status == 200) {
              this.$localStorage.set("token", response.data.accessToken);
              this.$router.push("/");
              Swal.fire("Welcome", "You login successfully", "success");
            }
            if (response.status == 404) {
              Swal.fire("Opps", 'Invalid email/password ', "error");
            }
          })
          .catch((error) => {
            console.log("Error: ", error);
          });
        // console.log(this.$localStorage.get("someNumber"));
      } else {
        Swal.fire("OPPS", "Please enter your email and password", "error");
      }
    },
  },
  created() {
    console.log("Created", this.$localStorage.get("token"));
    if (this.$localStorage.get("token") == 1) {
      console.log("one", 1);
    } else {
      console.log("no", 2);
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
