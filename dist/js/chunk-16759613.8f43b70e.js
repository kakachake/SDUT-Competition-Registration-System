(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16759613"],{"3fa2":function(e,t,l){"use strict";var a=l("a629"),s=l.n(a);s.a},a629:function(e,t,l){},f0ae:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"crumbs"},[l("el-breadcrumb",{attrs:{separator:"/"}},[l("el-breadcrumb-item",[l("i",{staticClass:"el-icon-lx-calendar"}),e._v("比赛列表")])],1)],1),l("div",{staticClass:"container"},[l("el-table",{staticStyle:{width:"100%"},attrs:{"span-method":e.objectSpanMethod,data:e.tableData}},[l("el-table-column",{attrs:{prop:"id",label:"团队ID",width:"180"}}),l("el-table-column",{attrs:{prop:"name",label:"团队名称",width:"140"}}),l("el-table-column",{attrs:{prop:"content",label:"团队人员"},scopedSlots:e._u([{key:"default",fn:function(e){return[l("el-table",{staticStyle:{width:"100%"},attrs:{"show-header":"false",data:e.row.personItems}},[l("el-table-column",{attrs:{prop:"stuName",label:"姓名"}}),l("el-table-column",{attrs:{prop:"stuNum",label:"学号"}}),l("el-table-column",{attrs:{prop:"class",label:"班级"}}),l("el-table-column",{attrs:{prop:"qqNum",label:"QQ"}}),l("el-table-column",{attrs:{prop:"phoneNum",label:"手机号"}}),l("el-table-column",{attrs:{prop:"college",label:"学院"}})],1)]}}])}),l("el-table-column",{attrs:{label:"操作",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{size:"mini"},on:{click:function(l){e.handleEdit(t.$index,t.row)}}},[e._v("通过")]),l("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(l){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1)])},s=[],u=(l("cadf"),l("551c"),l("097d"),{data:function(){return{tableData:[{id:123,name:"测试",personItems:[{stuName:"张泰民",stuNum:"17110501127",class:"计科1708",qqNum:"282281884",phoneNum:"15615538215",college:"计算机科学与技术学院"},{stuName:"张泰民",stuNum:"17110501127",class:"计科1708",qqNum:"282281884",phoneNum:"15615538215",college:"计算机科学与技术学院"}],status:1},{id:123,name:"测试",personItems:[{stuName:"张泰民",stuNum:"17110501127",class:"计科1708",qqNum:"282281884",phoneNum:"15615538215",college:"计算机科学与技术学院"},{stuName:"张泰民",stuNum:"17110501127",class:"计科1708",qqNum:"282281884",phoneNum:"15615538215",college:"计算机科学与技术学院"}],status:1},{id:123,name:"测试",personItems:[{stuName:"张泰民",stuNum:"17110501127",class:"计科1708",qqNum:"282281884",phoneNum:"15615538215",college:"计算机科学与技术学院"},{stuName:"张泰民",stuNum:"17110501127",class:"计科1708",qqNum:"282281884",phoneNum:"15615538215",college:"计算机科学与技术学院"}],status:1},{id:123,name:"测试",personItems:[{stuName:"张泰民",stuNum:"17110501127",class:"计科1708",qqNum:"282281884",phoneNum:"15615538215",college:"计算机科学与技术学院"},{stuName:"张泰民",stuNum:"17110501127",class:"计科1708",qqNum:"282281884",phoneNum:"15615538215",college:"计算机科学与技术学院"}],status:1}]}},methods:{objectSpanMethod:function(e){var t=e.row,l=e.column;e.rowIndex,e.columnIndex;console.log(t),console.log(l)}}}),n=u,o=(l("3fa2"),l("2877")),c=Object(o["a"])(n,a,s,!1,null,null,null);c.options.__file="registerList.vue";t["default"]=c.exports}}]);