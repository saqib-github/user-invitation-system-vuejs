<template>
  <v-container fill-height fluid class="justify-center red darken-1">
    <v-card height="350" width="400">
      <v-container fill-height fluid>
        <v-layout row wrap justify-center align-center>
          <v-flex xs12 md10>
            <h1 class="text-center blue--text">Login</h1>
            <div class="mt-3">
              <v-text-field
                outlined
                label="enter your mail here"
                v-model.trim="email"
              ></v-text-field>
              <v-text-field
                outlined
                label="enter your password here"
                v-model.trim="password"
                type="password"
              ></v-text-field>
              <v-row>
                <v-btn color="primary" class="mr-4 ml-3" @click="login"
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
export default {
  name: "LoginPage",
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
        Swal.fire("Welcome", "You login successfully", "success");
        this.$store.dispatch("setToken", true);
        console.log("token after change", this.$store.getters.getToken);
        this.$router.push("/inviteuser");
      } else {
        Swal.fire("OPPS", "Please enter your email and password", "error");
      }
    },
  },
};
</script>
<style></style>
