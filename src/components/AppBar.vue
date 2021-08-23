<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      hide-overlay
      :style="{ top: $vuetify.application.top + 'px', zIndex: 6 }"
    >
      <v-list dense>
        <v-list-item>
          <v-btn text to="/inviteuser">
            <v-icon medium class="pr-2">{{
              mdiAccountSupervisorOutline
            }}</v-icon
            >Invite users</v-btn
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app clipped-left dark color="white" flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="black"
        ><v-icon v-if="drawer">{{ mdiArrowLeft }}</v-icon></v-app-bar-nav-icon
      >
      <v-toolbar-title class="black--text">
        <span class="text-h6"> User Invitation System </span>
        <v-btn icon>
          <v-icon color="black">{{ mdiChevronDown }}</v-icon></v-btn
        ></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-menu bottom min-width="250px" square- offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on" class="ml-2">
            <v-avatar color="#EA8E6F" class="rounded-lg" size="40">
              <span class="white--text text-h5"> {{ user.first_name }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card color="#F4F4F7" rounded>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="brown" class="rounded-lg" size="40">
                <span class="white--text text-h5">MA</span>
              </v-avatar>
              <h3 class="mt-4">{{user}}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-btn color="#EAEAEA" depressed small>Profile Settings</v-btn>
              <v-divider class="my-3"></v-divider>
              <div>
                <v-btn depressed rounded text
                  ><v-icon>{{ mdiHelpBox }}</v-icon> help
                </v-btn>
              </div>
              <div>
                <v-btn depressed rounded text
                  ><v-icon>{{ mdiMessageAlertOutline }}</v-icon> feedback
                </v-btn>
              </div>
              <div>
                <v-btn depressed rounded text @click="signOut"
                  ><v-icon>{{ mdiLogout }}</v-icon> Sign out
                </v-btn>
              </div>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text x-small> Privacy </v-btn>
              <v-btn depressed rounded text x-small> Terms </v-btn>
              <v-btn depressed rounded text x-small> Imprint </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import { mdiAccountOutline } from "@mdi/js";
import { mdiAccountSupervisorOutline } from "@mdi/js";
import { mdiDesktopClassic } from "@mdi/js";
import { mdiKeyOutline } from "@mdi/js";
import { mdiReceipt } from "@mdi/js";
import { mdiChevronDown } from "@mdi/js";
import { mdiArrowLeft } from "@mdi/js";
import { mdiHelpBox } from "@mdi/js";
import { mdiMessageAlertOutline } from "@mdi/js";
import { mdiLogout } from "@mdi/js";
import Helpers from "../helpers/Helper.js";
// import axios from "axios"
export default {
  name: "app-bar",
  data: () => ({
    mdiDesktopClassic: mdiDesktopClassic,
    mdiAccountOutline: mdiAccountOutline,
    mdiAccountSupervisorOutline: mdiAccountSupervisorOutline,
    mdiKeyOutline: mdiKeyOutline,
    mdiChevronDown: mdiChevronDown,
    mdiArrowLeft: mdiArrowLeft,
    mdiReceipt,
    mdiHelpBox: mdiHelpBox,
    mdiMessageAlertOutline: mdiMessageAlertOutline,
    mdiLogout: mdiLogout,
    drawer: false,
    user: [],
  }),
  methods: {
    signOut() {
      this.$localStorage.remove("token");
      this.$router.push("/login");
      window.location.reload();
    },
  },
  beforeCreate() {
    let fetched_user = [];
    let url = "http://localhost:3000/api/user";
    const headers = {
      "x-access-token": `${this.$localStorage.get("token")}`,
      "content-type": "application/json",
    };
    console.log("headers", headers);

    Helpers.get(url, { headers: headers })
      .then((response) => {
        console.log("response", response.data);
        this.user.push(response.data);
        fetched_user.push(response.data);
        console.log("user", this.user);
      })
      .catch((error) => {
        console.log("error", error);
      });
      this.user = fetched_user
      console.log("fetched user", fetched_user);
      console.log("user", this.user);
      console.log("user.firstname", this.user);
  },
  
};
</script>
