<template>
  <div class="container">
    <header class="header">顶部</header>
    <div class="main-body">
      <img :src="imgURL" alt="">
    </div>
    <footer class="footer">底部</footer>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Demo extends Vue {
  imgURL ='./img/img1.png'
}
</script>
<style scoped lang=less>
.container{
  /* width: 100%;
  height: 100%;
  overflow: hidden; */
}
.header,.footer{
  text-align: center;
  position: fixed;
  height: 50px;
  background: #ff0000;
  width: 100%;
}
.header{
  left:0;
  top:0;

}
.footer{
  left:0;
  bottom:0;

}
.main-body{
  padding-top:50px;
  padding-bottom:50px;;
  overflow-y:auto ;
  -webkit-overflow-scrolling: touch;
  img{
    width: 100%;
  }
}

</style>