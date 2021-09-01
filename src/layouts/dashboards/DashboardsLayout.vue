<template>
  <div>
    <v-app app>
      <app-bar></app-bar>

      <v-main>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12 md12>
            <v-row>
              <v-col>
              <span>
                <v-btn text to="/" color="primary">{{$route.meta.parent}}</v-btn>
                <v-btn text color="primary" disabled>{{$route.path}}</v-btn>
              </span>
              </v-col>
            </v-row>
            </v-flex>
          </v-layout>
        </v-container>
        <v-container>
          <v-layout>
            <v-flex xs12 md10>
              <v-btn text></v-btn>
            </v-flex>
          </v-layout>
        </v-container>
        <slot></slot>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import AppBar from "/home/saqib/Desktop/VueProjectPractice/User-Invitation-System/frontend/src/components/AppBar.vue";

export default {
  name: "dashboard-layout",
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
      to: '',
    };
  },

  created() {

  },
};
</script>
