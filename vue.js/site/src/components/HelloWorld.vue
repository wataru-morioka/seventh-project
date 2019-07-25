<template lang="pug">
  div.hello
    button(@click='getName') 取得します
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
    this.$store.dispatch('test')
    .then(() => {
      console.log('success');
      console.log(this.$store.state.userName);
      alert(this.$store.state.userName);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$mes-color: #42b983;

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
