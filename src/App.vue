<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-08 10:57:14
 * @LastEditors: kakachake
 * @LastEditTime: 2019-12-13 23:31:44
 -->
<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<style src="./assets/css/color-dark.css" ></style>
<style src="./assets/css/main.css" ></style>
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

/*包含以下五种的链接*/
a {
    text-decoration: none;
}
/*正常的未被访问过的链接*/
a:link {
    text-decoration: none;
}
/*已经访问过的链接*/
a:visited {
    text-decoration: none;
}
/*鼠标划过(停留)的链接*/
a:hover {
    text-decoration: none;
}
/* 正在点击的链接，鼠标在元素上按下还没有松开*/
a:active {
    text-decoration: none;
}
/* 获得焦点的时候 鼠标松开时显示的颜色*/
a:focus {
    text-decoration: none;
}

</style>