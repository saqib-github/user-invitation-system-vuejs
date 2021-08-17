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
                    label="enter email of your friend"
                  ></v-text-field>
                  <v-btn color="primary">Send Invite</v-btn>
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
export default {
  name: "InviteUserPage",
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
