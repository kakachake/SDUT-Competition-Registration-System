<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-13 23:36:26
 * @LastEditors: kakachake
 * @LastEditTime: 2019-12-14 00:27:31
 -->
<template>
  <div>
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-lx-calendar"></i>比赛列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-table
            :span-method="objectSpanMethod"
            :data="tableData"
            style="width: 100%">
                <el-table-column
                    prop="id"
                    label="团队ID"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="团队名称"
                    width="140">
                </el-table-column>
                <el-table-column
                    prop="content"
                    label="团队人员"
                    >
                    <template slot-scope="scope">
                         <el-table
                            show-header="false"
                            :data="scope.row.personItems"
                            style="width:100%"
                            >
                            <el-table-column
                                prop="stuName"
                                label="姓名"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="stuNum"
                                label="学号"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="class"
                                label="班级"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="qqNum"
                                label="QQ"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="phoneNum"
                                label="手机号"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="college"
                                label="学院"
                            >
                            </el-table-column>
                         </el-table>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="200px">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">通过</el-button>
                        <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            tableData:[{
                id:123,
                name: "测试",
                personItems:[{
                    stuName:"张泰民",
                    stuNum:"17110501127",
                    class:"计科1708",
                    qqNum:"282281884",
                    phoneNum:"15615538215",
                    college:"计算机科学与技术学院"
                },{
                    stuName:"张泰民",
                    stuNum:"17110501127",
                    class:"计科1708",
                    qqNum:"282281884",
                    phoneNum:"15615538215",
                    college:"计算机科学与技术学院"
                }],
                status:1
            },{
                id:123,
                name: "测试",
                personItems:[{
                    stuName:"张泰民",
                    stuNum:"17110501127",
                    class:"计科1708",
                    qqNum:"282281884",
                    phoneNum:"15615538215",
                    college:"计算机科学与技术学院"
                },{
                    stuName:"张泰民",
                    stuNum:"17110501127",
                    class:"计科1708",
                    qqNum:"282281884",
                    phoneNum:"15615538215",
                    college:"计算机科学与技术学院"
                }],
                status:1
            },{
                id:123,
                name: "测试",
                personItems:[{
                    stuName:"张泰民",
                    stuNum:"17110501127",
                    class:"计科1708",
                    qqNum:"282281884",
                    phoneNum:"15615538215",
                    college:"计算机科学与技术学院"
                },{
                    stuName:"张泰民",
                    stuNum:"17110501127",
                    class:"计科1708",
                    qqNum:"282281884",
                    phoneNum:"15615538215",
                    college:"计算机科学与技术学院"
                }],
                status:1
            },{
                id:123,
                name: "测试",
                personItems:[{
                    stuName:"张泰民",
                    stuNum:"17110501127",
                    class:"计科1708",
                    qqNum:"282281884",
                    phoneNum:"15615538215",
                    college:"计算机科学与技术学院"
                },{
                    stuName:"张泰民",
                    stuNum:"17110501127",
                    class:"计科1708",
                    qqNum:"282281884",
                    phoneNum:"15615538215",
                    college:"计算机科学与技术学院"
                }],
                status:1
            }]
        }
    },
    methods:{
        objectSpanMethod({ row, column, rowIndex, columnIndex }){
            console.log(row);
            console.log(column);
            
            
        }
    }
}

</script>
<style>
</style>