<template>
  <div>
    <Header></Header>
    <SiderMenu />
    <!-- router-view放置的位置还是有影响的 -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import SiderMenu from "./SiderMenu";
import Footer from "./Footer";

export default {
  components: {
    SiderMenu,
    Header,
    Footer,
  },
};
</script>
