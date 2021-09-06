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
        <v-list-item>
          <v-btn text to="/products">
            <v-icon medium class="pr-2">{{
              mdiAccountSupervisorOutline
            }}</v-icon
            >Products</v-btn
          >
        </v-list-item>
        <v-list-item>
          <v-btn text to="/venders">
            <v-icon medium class="pr-2">{{
              mdiAccountSupervisorOutline
            }}</v-icon
            >Venders</v-btn
          >
        </v-list-item>
        <v-list-item>
          <v-btn text to="/customers">
            <v-icon medium class="pr-2">{{
              mdiAccountSupervisorOutline
            }}</v-icon
            >Customers</v-btn
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
              <span class="white--text text-h5">
                {{ user_initials || "MA" }}</span
              >
            </v-avatar>
          </v-btn>
        </template>
        <v-card color="#F4F4F7" rounded>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="brown" class="rounded-lg" size="40">
                <img v-if="user.image" :src="image" alt="John" />
                <span v-else class="white--text text-h5">
                  {{ user_initials || "MA" }}</span
                >
              </v-avatar>
              <p class="text-caption mt-4">Email: {{ user.email }}</p>
              <h4 class="mb-5">
                Name: {{ user.first_name }} {{ user.last_name }}
              </h4>
              <v-btn color="#EAEAEA" depressed small @click="openDialog"
                >Profile Settings</v-btn
              >
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
    <!-- .........dialog............ -->
    <v-dialog v-model="dialog" max-width="550px" persistent class="round">
      <v-card height="520" class="round">
        <v-card-title class="pt-7 round">
          <span class="text-h5 font-weight-bold">Edit Your Profile</span>
        </v-card-title>
        <v-container class="pt-7">
          <v-layout row wrap justify-center>
            <v-flex xs12 md9>
              <v-form enctype="multipart/form-data">
                <v-file-input
                  dense
                  outlined
                  rounded
                  label="Please choose your picture"
                  v-model="user_profile_pic"
                >
                </v-file-input>
                <v-text-field
                  label="Your First Name"
                  outlined
                  rounded
                  dense
                  v-model.trim="user_first_name"
                ></v-text-field>
                <v-text-field
                  label="Your Last Name"
                  outlined
                  rounded
                  dense
                  v-model.trim="user_last_name"
                ></v-text-field>
                <v-text-field
                  label="Your Email"
                  outlined
                  rounded
                  dense
                  v-model.trim="user_email"
                ></v-text-field>
                <v-text-field
                  label="Your Address"
                  outlined
                  rounded
                  dense
                  v-model.trim="user_address"
                ></v-text-field>
              </v-form>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="saveUserProfile(user._id)" text
            >Save</v-btn
          >
          <v-btn color="red" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- .........dialog............ -->
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
import config from "@/config/config.js";
import Swal from "sweetalert2";
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
    // .........data for edit user profile values/v-models..........,
    user_profile_pic: null,
    user_first_name: "",
    user_last_name: "",
    user_email: "",
    user_address: "",
    // ...................,
    dialog: false,
    drawer: false,
    user: {},
    user_initials: "",
  }),
  methods: {
    signOut() {
      this.$localStorage.remove("token");
      this.$router.push("/login");
      window.location.reload();
    },
    openDialog() {
      this.dialog = true;
      this.user_first_name = this.user.first_name;
      this.user_last_name = this.user.last_name;
      this.user_email = this.user.email;
      this.user_address = this.user.address;
    },
    saveUserProfile(_id) {
      console.log("user_profile pic", this.user_profile_pic);
      console.log("user_id", _id);
      let bd = new FormData();
      bd.append("image", this.user_profile_pic);
      bd.append("first_name", this.user_first_name);
      bd.append("last_name", this.user_last_name);
      bd.append("email", this.user_email);
      bd.append("address", this.user_address);
      let url = `${config.URL_CONSTANTS}:${config.API_PORT}/api/user/updateuser/${_id}`;
      Helpers.post(url, bd)
        .then((response) => {
          console.log("user_profile", response);
          Swal.fire("Updated", response.data.message, "success");
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
  computed : {
    image(){
        return 'data:image/jpeg;base64,' + btoa(
            new Uint8Array(this.user.image)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
    }
},
  beforeCreate() {
    let fetched_user = {};
    let url = `${config.URL_CONSTANTS}:${config.API_PORT}/api/user`;
    const headers = {
      "x-access-token": `${this.$localStorage.get("token")}`,
      "content-type": "application/json",
    };
    console.log("headers", headers);

    Helpers.get(url, { headers: headers })
      .then((response) => {
        fetched_user = response.data;
        this.user = fetched_user;
        console.log("user.firstname121", this.user.first_name[0]);
        console.log("user", this.user);
        this.user_initials =
          this.user.first_name[0].toUpperCase() +
          this.user.first_name[1].toUpperCase();
        console.log("user_initials", this.user_initials);
      })
      .catch((error) => {
        console.log("error", error);
      });
  },
};
</script>
<style lang="scss" scoped>
.round {
  border-radius: 30px;
}
</style>
