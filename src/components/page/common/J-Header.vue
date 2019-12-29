<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-08 11:57:59
 * @LastEditors  : kakachake
 * @LastEditTime : 2019-12-28 16:51:44
 -->
<template>
  <div class="header">
      <div class="logo"><router-link to="/">{{title}}</router-link></div>
      <div class="bg" v-show="img">
          <img :src="img" alt="">
      </div>
  </div>
</template>

<script>
import bg from "../../../assets/bg.png"
export default {
    props:{
        title:{
            default:"竞赛管理系统"
        },
        img:{
            default:bg
        }
    }
}

</script>
<style lang="scss" scoped>
@import "../../../assets/css/config.scss";
.header{
    z-index: 999;
    top:0;
    background: none;
    .bg{
        // position: fixed;;
        z-index: -1;
        width: 100%;
        // background: url() no-repeat center;
        // height: 450px;
        // background-size: cover;
        // background-repeat:no-repeat;
        // background-attachment:fixed
        height: 18rem;
        overflow: hidden;
        max-width: 1200px;
        margin: 0 auto;
        img{
            width: 100%;
            height: 100%;
            margin: 0 auto;
        }
    }
    .logo{
         background:$bg-color;
        text-align: center;
        line-height: 50px;
        color: #fff;
        font-size: 24px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
}
</style>