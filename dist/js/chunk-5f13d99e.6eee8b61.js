(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f13d99e"],{"2c20":function(t,e,a){},"86f5":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-lx-calendar"}),t._v("比赛列表")])],1)],1),a("div",{staticClass:"container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"id",label:"比赛ID",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"比赛名称",width:"180"}}),a("el-table-column",{attrs:{prop:"content",label:"比赛简介",width:"180"}}),a("el-table-column",{attrs:{prop:"num",label:"比赛人数"}}),a("el-table-column",{attrs:{label:"操作",width:"200px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.handleToRegister(e.row)}}},[t._v("查看报名列表")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1)])},l=[],i=(a("cadf"),a("551c"),a("097d"),{data:function(){return{tableData:[{id:"123123",name:"网络安全大赛",content:"网络安全大赛网络安全大赛网络安全大赛网络安全大赛网络安全大赛网络安全大赛网络安全大赛网络安全大赛网络安全大赛网络安全大赛网络安全大赛网络安全大赛网络安全大赛",num:"1-3"}]}},methods:{handleToRegister:function(t){this.$router.push("./registerList?id="+t.id)}}}),r=i,c=(a("ae0f"),a("2877")),s=Object(c["a"])(r,n,l,!1,null,null,null);s.options.__file="RaceList.vue";e["default"]=s.exports},ae0f:function(t,e,a){"use strict";var n=a("2c20"),l=a.n(n);l.a}}]);