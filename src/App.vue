<template>
  <div id="app">
    <van-nav-bar :title="headerTitle" left-text :left-arrow="leftArrow" @click-left="onClickLeft" />
    <router-view />
  </div>
</template>
<script lang=ts>
import { Component, Vue, Watch } from "vue-property-decorator";
import { NavBar } from "vant";
@Component({ components: { "van-nav-bar": NavBar } })
export default class App extends Vue {
  get headerTitle() {
    return this.$route.meta.title || "首页";
  }
  get leftArrow() {
    let flag: boolean = true;
    if (this.$route.meta.back === "home") {
      flag = false;
    } else {
      flag = true;
    }
    return flag;
  }
  @Watch("$route")
  onRouteChange(route: any) {
    console.log(route.meta.title);
  }

  onClickLeft(): void {
    if (this.$route.meta.back) {
      this.$router.push(this.$route.meta.back);
    } else {
      this.$router.back();
    }
  }
}
</script>
<style lang="less">
html,
body {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background: #f8f8f8;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
