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
        <v-list-item
          ><v-btn text to="/managecomputers">
            <v-icon medium class="pr-2">{{ mdiDesktopClassic }}</v-icon
            >Manage Computers</v-btn
          >
        </v-list-item>
        <v-list-item>
          <v-btn text to="/">
            <v-icon medium class="pr-2">{{
              mdiAccountSupervisorOutline
            }}</v-icon
            >Manage users</v-btn
          >
        </v-list-item>
        <v-list-item>
          <v-btn text to="/accountsettings"
            ><v-icon medium class="pr-2">{{ mdiAccountOutline }}</v-icon
            >Account Settings</v-btn
          >
        </v-list-item>
        <v-list-item
          ><v-btn text to="/subscriptions"
            ><v-icon medium class="pr-2">{{ mdiKeyOutline }}</v-icon>
            Subscriptions</v-btn
          >
        </v-list-item>
        <v-list-item
          ><v-btn text to="/invoices"
            ><v-icon medium class="pr-2">{{ mdiReceipt }}</v-icon>
            Invoices</v-btn
          >
        </v-list-item>
        <v-list-item>
          <v-btn text to="/paymentmethods"
            ><v-icon medium class="pr-2">{{ mdiKeyOutline }}</v-icon> Payment
            Methods</v-btn
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app clipped-left dark color="white" flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="black"
        ><v-icon v-if="drawer">{{ mdiArrowLeft }}</v-icon></v-app-bar-nav-icon
      >
      <v-toolbar-title class="black--text">
        <span class="text-h6"> Apple Tech</span>
        <v-btn icon>
          <v-icon color="black">{{ mdiChevronDown }}</v-icon></v-btn
        ></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-menu bottom min-width="200px" square- offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on" class="ml-2">
            <v-avatar color="#EA8E6F" class="rounded-lg" size="40">
              <span class="white--text text-h5">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card color="#F4F4F7" rounded>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="brown" class="rounded-lg" size="40">
                <span class="white--text text-h5">{{ user.initials }}</span>
              </v-avatar>
              <h3 class="mt-4">{{ user.fullName }}</h3>
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
                <v-btn depressed rounded text
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
    user: {
      initials: "MA",
      fullName: "Moazzam Ali Boota",
      email: "john.doe@doe.com",
    },
  }),
};
</script>
