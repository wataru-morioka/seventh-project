<template lang="pug">
  div.hello
    button(@click='getName') 取得します
    button(@click='login', v-show='!$store.state.isLogin') ログイン
    button(@click='logout', v-show='$store.state.isLogin') ログアウト
    br
    a(href='http://vuejs-templates.github.io/webpack/', target='_blank', v-if='$store.state.isLogin') management
    br
    a(href='http://vuejs-templates.github.io/webpack/', target='_blank', v-if='$store.state.isLogin') service
    br
    a(href='http://vuejs-templates.github.io/webpack/', target='_blank', v-if='$store.state.isLogin') rtc
    p(v-if='$store.state.isLogin') {{ $store.state.email }}
    p For a guide and recipes on how to configure / customize this project,
      br
      | check out the
      a(href='https://cli.vuejs.org', target='_blank', rel='noopener') vue-cli documentation

    h1 {{ msg }}
    h2 Essential Links
    ul
      li
        a(href='https://vuejs.org', target='_blank') Core Docs
      li
        a(href='https://forum.vuejs.org', target='_blank') Forum
      li
        a(href='https://chat.vuejs.org', target='_blank') Community Chat
      li
        a(href='https://twitter.com/vuejs', target='_blank') Twitter
      br
      li
        a(href='http://vuejs-templates.github.io/webpack/', target='_blank') Docs for This Template
    h2 Ecosystem
    ul
      li
        a(href='http://router.vuejs.org/', target='_blank') vue-router
      li
        a(href='http://vuex.vuejs.org/', target='_blank') vuex
      li
        a(href='http://vue-loader.vuejs.org/', target='_blank') vue-loader
      li
        a(href='https://github.com/vuejs/awesome-vue', target='_blank') awesome-vue
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  private getName(): void {
    this.$store.dispatch('post_test')
    .then(() => {
      alert(this.$store.state.displayName);
    });
  }

  private login(): void {
    this.$store.dispatch('login');
  }

  private logout(): void {
    this.$store.dispatch('logout');
  }

  private beforeCreate() {
    this.$store.dispatch('checkLoginStatus');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$mes-color: #42b983;

button{
  margin: 10px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: $mes-color;
}
</style>
