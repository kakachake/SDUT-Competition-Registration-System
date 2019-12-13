<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-13 23:36:26
 * @LastEditors: kakachake
 * @LastEditTime: 2019-12-14 00:30:26
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
            :data="tableData"
            style="width: 100%">
                <el-table-column
                    prop="id"
                    label="比赛ID"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="比赛名称"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="content"
                    label="比赛简介"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="num"
                    label="比赛人数">
                </el-table-column>
                <el-table-column label="操作" width="200px">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleToRegister(scope.row)">查看报名列表</el-button>
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
                id:'123123',
                name:"网络安全大赛",
                content:"网络安全大赛网络安全大赛网络安全大赛网络安全大赛网络安全大赛网络安全大赛网络安全大赛网络安全大赛网络安全大赛网络安全大赛网络安全大赛网络安全大赛网络安全大赛",
                num:"1-3"
            }]
        }
    },
    methods:{
        handleToRegister(row){
            this.$router.push("./registerList?id="+row.id)
        }
    }
}

</script>
<style>
</style>