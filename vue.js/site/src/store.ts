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
    uid: '',
    idToken: '',
    email: '',
    displayName: '',
  },
  mutations: {
    setUser(state, payload) {
      state.userName = payload.name;
    },

    setDisplayName(state, payload) {
      state.displayName = payload.displayName;
    },

    setUserInfo(state, payload) {
      state.isLogin = true;
      state.uid = payload.uid;
      state.idToken = payload.idToken;
      state.email = payload.email;
    },

    changeStatus(state, payload) {
      state.isLogin = payload.status;
    },
  },
  actions: {
    async test({ commit, state, rootState }) {
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

    async post_test({ commit, state, rootState }) {
      const body = {
        idToken: this.state.idToken,
      };
      // await axios.post('https://flask.site:443/user', body)
      // .then((res) => {
      //   commit('setDisplayName', {
      //     displayName: res.data.displayName,
      //   });
      // });

      await axios.get('https://django.service/api/service/user')
      .then((res) => {
        commit('setDisplayName', {
          displayName: res.data.name,
        });
      });
    },

    async login({ commit, state, rootState }) {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider)
      .then(async (result) => {
        this.dispatch('setUserInfo');
      }).catch((error) => {
        alert('ログインに失敗しました');
      });
    },

    async logout({ commit, state, rootState }) {
      await firebase.auth().signOut()
      .then((result) => {
        commit('changeStatus', {
          status: false,
        });
      })
      .catch((err) => {
        alert('ログアウトに失敗しました');
      });
    },

    async checkLoginStatus({ commit, state, rootState }) {
      await firebase.auth().onAuthStateChanged(async (user) => {
        commit('changeStatus', {
          status: !!user,
        });

        if (!user) {
          return;
        }
        this.dispatch('setUserInfo');
      });
    },

    async setUserInfo({ commit, state, rootState }) {
      const currentUser = firebase.auth().currentUser;
      if (currentUser == null) {
        return;
      }

      const token = await currentUser.getIdToken(true);
      this.commit('setUserInfo', {
        uid: currentUser.uid,
        idToken: token,
        email: currentUser.email,
        displayName: currentUser.displayName,
      });
    },
  },
  getters: {
    getName: (state, getters) => () => {
      return state.userName;
    },
  },
});
