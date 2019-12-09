<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-08 10:57:14
 * @LastEditors: kakachake
 * @LastEditTime: 2019-12-09 00:14:54
 -->
<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<style >
* {
    margin: 0;
    padding: 0;
}
@media (max-width: 768px){ 
    html{
        font-size: 4vw;
    }
}
@media (min-width: 768px){ 
    html{
        font-size: 24px;
    }
 }
@media (min-width: 1200){ 

}

ul,li{ padding:0;margin:0;list-style:none}
html,
body,
#app,
.wrapper {
    /* width: 100%; */
    /* height: 100%; */
    /* overflow: hidden; */
}

    /*@import "./assets/css/theme-green/color-green.css";   浅绿色主题*/
</style>