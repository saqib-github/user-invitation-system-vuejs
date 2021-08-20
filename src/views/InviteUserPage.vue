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
                    label="Enter email of your friend"
                  ></v-text-field>
                  <v-btn
                    color="primary"
                    v-model.trim="send_invite_email"
                    @click="sendInvite"
                    >Send Invite</v-btn
                  >
                  <v-btn @click="dialog = false" color="primary" small text
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

<script>
import Swal from "sweetalert2";
// import Helpers from "../helpers/Helper.js";
export default {
  name: "InviteUserPage",
  data() {
    return {
      dialog: false,
      send_invite_email: "",
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
    },
  },
};
</script>

<style lang="scss" scoped></style>
