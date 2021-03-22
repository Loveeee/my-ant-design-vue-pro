<template>
  <div id="app">
    <div id="nav">
      <a-button>Hello</a-button>

      <router-link to="/dashboard/analysis">dashborad</router-link> |
      <router-link to="/form">/form</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
// import hello from "./components/HelloWorld.vue";
export default {
  components: {
    // hello,
  },
};
</script>
<style lang="less"></style>
