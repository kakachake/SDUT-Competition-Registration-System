<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-12 08:53:13
 * @LastEditors: kakachake
 * @LastEditTime: 2019-12-12 08:56:53
 -->
<template>
  <div class="ft">
      <p v-html="content"></p>
  </div>
</template>

<script>
export default {
    props:["content"]
}

</script>
<style lang="scss">
    .ft{
        width: 100%;
        text-align: center;
        font-size: 1rem;
        height: 3rem;
        line-height: 3rem;
    }
</style>