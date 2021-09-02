<template>
  <v-container fill-height fluid class="justify-center">
    <v-card height="180" width="400">
      <v-container fill-height fluid class="justify-center">
        <h1>Invite a new user</h1>
        <!-- invitation dialog box starts from below -->
        <v-dialog v-model="dialog" persistent max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" x-large dark v-bind="attrs" v-on="on">
              Send Invitation Link
            </v-btn>
          </template>

          <v-card height="200">
            <v-container fill-height fluid>
              <v-layout row wrap justify-center align-center>
                <v-flex xs12 md10>
                  <v-text-field
                    outlined
                    v-model.trim="send_invite_email"
                    label="Enter email of your friend"
                  ></v-text-field>
                  <v-btn color="primary" @click="sendInvite">Send Invite</v-btn>
                  <v-btn @click="dialog = false" color="red" text class="ml-3"
                    >close</v-btn
                  >
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-dialog>
        <!-- invitation dialog box end here -->
      </v-container>
    </v-card>
  </v-container>
</template>
<script src="path/to/vue.js"></script>
<script src="path/to/vue-simple-spinner.js"></script>
<script>
import Swal from "sweetalert2";
import Spinner from "vue-simple-spinner";
// import Helpers from "../helpers/Helper.js";
import axios from "axios";
export default {
  name: "InviteUserPage",
  components: {
    "vue-simple-spinner": Spinner,
  },
  data() {
    return {
      dialog: false,
      send_invite_email: "",
      spinner: true,
    };
  },
  methods: {
    sendInvite() {
      if (!this.send_invite_email) {
        Swal.fire(
          "Opps",
          "Please enter your email address where you want to send invite",
          "error"
        );
      }
      if (this.send_invite_email) {
        console.log("email", this.send_invite_email);
        let url = "http://localhost:3001/api/user/sendmail";
        const headers = {
          "x-access-token": `${this.$localStorage.get("token")}`,
          "content-type": "application/json",
        };
        axios
          .post(url, { email: this.send_invite_email }, { headers: headers })
          .then((response) => {
            console.log(response);
            this.dialog = false;
            Swal.fire("Invitation Link Sent", "Thank you ", "success");
          })
          .catch((error) => {
            console.log("error", error);
            Swal.fire("Opps", error.message, "error");
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
