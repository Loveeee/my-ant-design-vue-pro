<template>
  <div id="app">
    <div id="nav">
      <a-button>Hello</a-button>
      <hello>
        <template #:one="ttt">引入了一下one{{ ttt.yes.lastname }}</template>

        <template #:default="yyy"
          >引入了一下default{{ yyy.yes.lastname }}</template
        >
      </hello>

      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import hello from "./components/HelloWorld.vue";
export default {
  components: {
    hello,
  },
};
</script>
<style lang="less"></style>
