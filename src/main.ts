import Vue from 'vue';
import Ionic from '@modus/ionic-vue';
import App from './App.vue';
import router from './router';

Vue.use(Ionic);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
