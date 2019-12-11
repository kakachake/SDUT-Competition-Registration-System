<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-08 10:57:14
 * @LastEditors: kakachake
 * @LastEditTime: 2019-12-11 19:47:06
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
ul,li{ padding:0;margin:0;list-style:none}
@media (max-width: 768px){ 
    html{
        font-size: 4vw;
    }
}
@media (min-width: 768px){ 
    html{
        font-size: 16px;
    }
 }
@media (min-width: 1200){ 

}

</style>