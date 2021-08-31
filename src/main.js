import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueLocalStorage from "vue-localstorage";
import Spinner from "vue-simple-spinner";
import VueBreadcrumbs from "vue-2-breadcrumbs";

Vue.use(VueBreadcrumbs);
Vue.use(VueLocalStorage, {
  name: "localStorage",
  bind: true,
});
new Vue({
  component: {
    Spinner,
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
