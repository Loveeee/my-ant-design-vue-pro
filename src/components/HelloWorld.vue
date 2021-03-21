<template>
  <div class="button">
    <button>来自子组件位于slot one上方</button>
    <br />
    <slot name="one" v-bind:user="yes"> {{ yes.firstname }} </slot>
    <br />
    <button>来自子组件位于slot one下方，default上方</button>
    <br />
    <slot :value2="heiheihei"> 这就是默认值2 </slot>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => {
    return {
      yes: {
        firstname: "Tom",
        lastname: "jerry",
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
  color: #42b983;
}
</style>
