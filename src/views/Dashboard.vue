<template>
  <div>
   <dashboard-layout>
     <router-view></router-view>
   </dashboard-layout>
  </div>
</template>

<script>
// import AppBar from "../components/AppBar.vue";
import DashboardLayout from "../layouts/dashboards/DashboardsLayout.vue";

export default {
  name: "App",
  components: {
    // AppBar: AppBar,
    'dashboard-layout': DashboardLayout,
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

  created() {},
};
</script>
