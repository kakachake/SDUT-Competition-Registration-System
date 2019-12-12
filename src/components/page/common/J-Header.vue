<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-08 11:57:59
 * @LastEditors: kakachake
<<<<<<< HEAD
 * @LastEditTime: 2019-12-09 08:48:29
=======
 * @LastEditTime: 2019-12-10 21:32:27
>>>>>>> gh-pages
 -->
<template>
  <div class="header">
      <div class="logo">竞赛报名系统</div>
      <div class="bg">
<<<<<<< HEAD
          <img src="http://www.52jingsai.com/xydashi/images/banner.jpg" alt="">
=======
          <img src="https://iph.href.lu/1920x450?text=%E7%AB%9E%E8%B5%9B%E6%8A%A5%E5%90%8D%E5%A4%B4%E5%9B%BE" alt="">
>>>>>>> gh-pages
      </div>
  </div>
</template>

<script>
export default {

}

</script>
<style lang="scss">
@import "../../../assets/css/config.scss";
.header{
    // position: fixed;
    z-index: 999;
    // height: 50px;
    top:0;
    background:$bg-color;
    width: 100%;
    .bg{
        // position: fixed;;
        z-index: -1;
        width: 100%;
        // background: url() no-repeat center;
        // height: 450px;
        // background-size: cover;
        // background-repeat:no-repeat;
        // background-attachment:fixed
        img{
            width: 100%;
            height: auto;
            margin: 0 auto;
        }
    }
    .logo{
        text-align: center;
        line-height: 50px;
        color: #fff;
        font-size: 24px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
}
</style>