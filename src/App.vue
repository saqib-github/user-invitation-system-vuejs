<template>
  <v-app>
    <app-bar v-if="token"></app-bar>

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
    token: store.getters.getToken,
  }),
  created: () => console.log(" token ", store.getters.getToken),
};
</script>
