<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-13 23:36:26
 * @LastEditors  : kakachake
 * @LastEditTime : 2019-12-28 15:23:24
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
            v-loading="loading"
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
                    prop="desc"
                    label="比赛简介"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="num"
                    label="比赛人数">
                </el-table-column>
                <el-table-column
                    prop="date"
                    :formatter="formatDate"
                    label="截止时间">
                </el-table-column>
                <el-table-column label="操作" width="200px">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleToRegister(scope.row)">查看报名列表</el-button>
                        <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
  </div>
</template>

<script>
import { getMatchList, deleteM } from '@/api/back.js'
export default {
    data(){
        return{
            loading:false,
            tableData:[{
            }]
        }
    },
    methods:{
        handleToRegister(row){
            this.$router.push("./registerList?id="+row.id)
        },
        async handleDelete(row){
            await deleteM(row.id).then((res)=>{
                if(res.data == 1){
                    this.$message.success("比赛删除成功！")
                }else{
                    this.$message.error("比赛删除失败！")
                }
            }).catch(()=>{
                this.$message.error("比赛删除失败,请检查网络")
            })
            this.getMatchList()
        },
        async getMatchList(){
            this.loading = true
            await getMatchList().then((res)=>{
                if(res.data.length){
                    this.tableData = res.data.map((item)=>{
                        return {
                            name:item.mname,
                            id:item.mid,
                            desc:item.describe,
                            date:item.end,
                            num:item.min+"-"+item.max
                        }
                    })
                }else{
                    this.$message.error("查询比赛列表失败");
                }
            }).catch((res)=>{
                this.$message.error("查询比赛列表失败");
            })
            this.loading = false
        },
        formatDate: function (row) {
            var now = new Date(+row.date).toLocaleString().replace(/:\d{1,2}$/,' ');  
            return now;
        }
    },
    mounted(){
        this.getMatchList()
    }
}

</script>
<style>
</style>