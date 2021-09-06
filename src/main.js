import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueLocalStorage from "vue-localstorage";
import Spinner from "vue-simple-spinner";
import VueBreadcrumbs from "vue-2-breadcrumbs";
import loader from "vue-ui-preloader";

Vue.use(VueBreadcrumbs);
// Vue.config.devtools = false;
Vue.use(loader, {
  template: `<loader
  object="#33a7ff"
  color1="#ffffff"
  color2="#17fd3d"
  size="5"
  speed="1.5"
  bg="#343a40"
  objectbg="#999793"
  opacity="80"
  disableScrolling="false"
  name="dots"
></loader>`,
});
Vue.use(VueLocalStorage, {
  name: "localStorage",
  bind: true,
});
// Vue.config.devtools = false;
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
