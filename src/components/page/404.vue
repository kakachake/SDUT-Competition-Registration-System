<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-12 09:23:35
 * @LastEditors: kakachake
 * @LastEditTime: 2019-12-12 09:31:22
 -->
<template>
  <div>
      <p>404</p>
      <p class="content">迷路咯</p>
      <a href="./">返回首页</a>
  </div>
</template>

<script>
export default {

}

</script>
<style scoped lang="scss">
div{
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    p{
        font-size: 16rem;
        color: darkgray;
    }
    .content{
        font-size: 1rem;
        color: darkgray;
    }
    a{
        font-size: 1.5rem;
        color: darkgray;
        text-decoration:underline;
    }
    text-align: center;
}
</style>