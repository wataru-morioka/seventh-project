import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import firebase from 'firebase/app';
import 'firebase/auth';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyBb1EQB5F7Q7O9n8BH1Fy929XhH7tRy6OM',
  authDomain: 'seventhproject-248123.firebaseapp.com',
  databaseURL: 'https://seventhproject-248123.firebaseio.com',
  projectId: 'seventhproject-248123',
  storageBucket: 'seventhproject-248123.appspot.com',
  messagingSenderId: '663686156877',
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
