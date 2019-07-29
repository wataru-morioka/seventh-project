import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import firebase from 'firebase/app';
// tslint:disable-next-line:no-var-requires
const fs = require('fs');
// tslint:disable-next-line:no-var-requires
const https = require('https');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: 'wataru',
    isLogin: false,
    token: '',
  },
  mutations: {
    setUser(state, payload) {
      state.userName = payload.name;
    },

    login(state, payload) {
      state.isLogin = true;
      state.token = payload.token;
    },

    changeStatus(state, payload) {
      state.isLogin = payload.status;
    }
  },
  actions: {
    async test({ commit, state, rootState })  {
      await axios.get('https://flask.site:443/user',
      // , {
      //     httpsAgent: new https.Agent({
      //       // keepAlive: true,
      //     }),
      //   }
      )
      .then((res) => {
        commit('setUser', {
          name: res.data.name,
        });
      });
    },

    async login({ commit, state, rootState }) {
      const provider = new firebase.auth.GoogleAuthProvider();

      await firebase.auth().signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        if (result.credential == null) {
          alert('ログインに失敗しました');
          return;
        }

        alert('ログインしました');
        commit('login', {
          token: result.credential,
        });

      }).catch((error) => {
        console.log(error);
        alert('ログインに失敗しました');
      });
    },

    async logout({ commit, state, rootState }) {
      await firebase.auth().signOut()
      .then((result) => {
        commit('changeStatus', {
          status: false,
        });
        alert('ログアウトしました');
      })
      .catch((err) => {
        alert('ログアウトに失敗しました');
      });
    },

    async checkLoginStatus({ commit, state, rootState }) {
      await firebase.auth().onAuthStateChanged((user) => {
        commit('changeStatus', {
          status: !!user,
        });
        console.log(user);
      });
    },

  },
  getters: {
    getName: (state, getters) => () => {
      return state.userName;
    },
  },
});
