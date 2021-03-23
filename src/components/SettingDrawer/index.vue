<template>
  <div>
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
      width="300px"
    >
      <template v-slot:handle>
        <div class="handle" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>
      <div>
        <h2>定制颜色</h2>
        <a-radio-group
          @change="(e) => handleSettingChange('navTheme', e.target.value)"
          :value="$route.query.navTheme || 'dark'"
        >
          <a-radio value="dark"> 黑色 </a-radio>
          <a-radio value="light"> 白色 </a-radio>
        </a-radio-group>
      </div>
      <div>
        <h2>定制布局</h2>
        <a-radio-group
          @change="(e) => handleSettingChange('navLayout', e.target.value)"
          :value="$route.query.navLayout || 'left'"
        >
          <a-radio value="left"> 左侧 </a-radio>
          <a-radio value="top"> 顶部 </a-radio>
        </a-radio-group>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      navTheme: "dark",
      navLayout: "left",
    };
  },
  methods: {
    afterVisibleChange(val) {
      console.log("visible", val);
    },
    onClose() {
      this.visible = false;
    },
    handleSettingChange(type, value) {
      // console.log(type,value)
      this.$router.push({ query: { ...this.$route.query, [type]: value } });
    },
  },
};
</script>

<style scoped>
.handle {
  position: absolute;
  top: 240px;
  font-size: 20px;
  right: 300px;
  width: 48px;
  height: 48px;
  background: rgb(0, 78, 34);
  color: #fff;
  line-height: 48px;
  border-radius: 3px 0 0 3px;
  text-align: center;
}
</style>
