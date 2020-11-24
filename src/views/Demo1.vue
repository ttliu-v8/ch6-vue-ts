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
import { Component,Vue } from "vue-property-decorator";
@Component
export default class Demo1 extends Vue {
  imgURL ='./img/img1.png'
  mounted(){
    const str = /^{\d}$/g
    const str2 = new RegExp(/^{\d}$/,'g')
    console.log(str2.test('123'))
    console.log(new Date('2020-11-11'))
  }
}
</script>
<style scoped lang=less>
.container{
  width: 100%;
  height: 100%;
  position: relative;
}
.header,.footer{
  position: absolute;
  height: 50px;
  background: #ff0000;
  width: 100%;
  text-align: center;
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
  position:absolute;
  top:50px;
  bottom:50px;
  left:0;
  right:0;
  overflow-y:auto ;
  -webkit-overflow-scrolling: touch;
  img{
    width: 100%;
  }
}

</style>