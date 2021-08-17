<template>
  <v-app>
    <app-bar v-if="getToken"></app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import store from "./store/index.js";

export default {
  name: "App",
  components: {
    AppBar: AppBar,
  },

  data: () => ({
    //
  }),
  created: () => console.log(" token ", store.getters.getToken),

  computed: {
    getToken() {
      return store.getters.getToken;
    },
  },
};
</script>
