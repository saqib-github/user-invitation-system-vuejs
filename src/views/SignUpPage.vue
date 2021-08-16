<template>
  <v-container fill-height fluid class="justify-center red darken-1">
    <v-card height="450" width="600">
      <v-container fill-height fluid>
        <v-layout row wrap justify-center align-center>
          <v-flex xs12 md10>
            <h1 class="text-center blue--text">Sign up</h1>
            <div class="mt-3">
              <v-text-field outlined dense label="First Name"></v-text-field>
              <v-text-field outlined dense label="Last Name"></v-text-field>
              <v-text-field dense label="Email" outlined> </v-text-field>
              <v-text-field dense label="Password" outlined> </v-text-field>
              <v-row>
                <v-btn color="primary" class="mr-4 ml-3" to="/">Login</v-btn>
                <v-btn color="primary" class="mr-4 ml-3">Sign up</v-btn>
                <!-- <v-btn color="primary" class="mr-4 ml-3"
                  ><v-icon>{{ mdiGmail }}</v-icon> google</v-btn
                > -->
              </v-row>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import { mdiGmail } from "@mdi/js";
export default {
  name: "SignUpPage",
  data() {
    return {
      mdiGmail: mdiGmail,
    };
  },

  components: {},
};
</script>
<style></style>
