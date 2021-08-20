<template>
  <div>
    <div v-if="getToken">
      <v-app>
        <app-bar></app-bar>

        <v-main>
          <router-view />
        </v-main>
      </v-app>
    </div>
    <div v-if="!getToken">
      <v-app>
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

  data: () => ({
    //
  }),
  computed: {
    getToken() {
      if (this.$localStorage.get("token")) {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    getToken() {
      if (this.$localStorage.get("token")) {
        this.getToken = true;
      } else {
        this.getToken = false;
      }
    },
  },
  // beforeCreate() {
  //   this.getToken();
  // }
};
</script>
