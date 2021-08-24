<template>
  <div>
    <div>
      <v-app>
          <app-bar v-show="token === true"></app-bar>

        <v-main>
          <router-view />
        </v-main>
      </v-app>
    </div>
  </div>
</template>

<script>
import AppBar from "./components/AppBar.vue";

export default {
  name: "App",
  components: {
    AppBar: AppBar,
  },

  data() {
    //
    return {
      token: {
        type: Boolean,
        default: false,
      },
    };
  },

  created() {
    let check_token;
    if (this.$localStorage.get("token")) {
      check_token = true;
    } else {
      check_token = false;
    }
    this.token = check_token;
    console.log("token13213", this.token);
  },
};
</script>
