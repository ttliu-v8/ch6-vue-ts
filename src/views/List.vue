<template>
  <div class="recipt-list">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loadding" :finished="finished" finished-text="～我也是有底线的～" @load="onLoad"></van-list>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { List, PullRefresh } from "vant";
@Component({
  components: {
    "van-list": List,
    "van-pull-refresh": PullRefresh,
  },
})
export default class Home extends Vue {
  refreshing: boolean = false;
  finished: boolean = false;
  loadding: boolean = false;
  list: Array<any> = [];
  onLoad() {
    setTimeout(() => {
      if (this.refreshing) {
        this.list = [];
        this.refreshing = false;
      }
      for (let i = 0; i < 10; i++) {
        this.list.push(
          new Object({
            no: new Date().getTime().toString,
            name: `张三${i}`,
            reciptTitle: `回执名称${i}`,
          })
        );
      }
      this.loadding = false;
      if (this.list.length >= 20) {
        this.finished = true;
      }
    }, 1000);
  }
  onRefresh() {
    this.finished = false;
    this.loadding = true;
    this.onLoad();
  }
}
</script>
<style scoped lang=less>
</style>