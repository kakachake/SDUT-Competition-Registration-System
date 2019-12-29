<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-13 23:36:26
 * @LastEditors  : kakachake
 * @LastEditTime : 2019-12-29 13:06:02
 -->
<template>
  <div>
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-lx-calendar"></i>报名列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-card>
                <el-button type="primary" @click="handleToExport">导出报名信息</el-button>
                <vue-xlsx-table @on-select-file="handleSelectedFile" style="margin-left:5px;">
                    <el-button type="primary" >导入报名信息</el-button>
                </vue-xlsx-table>
            </el-card>
            <el-table
            v-loading = "loading"
            :data="tableData"
            style="width: 100%">
                <el-table-column
                    prop="id"
                    label="团队ID"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="tname"
                    label="团队名称"
                    width="140">
                </el-table-column>
                <el-table-column
                    prop="personItems"
                    label="团队人员"
                    >
                    <template slot-scope="scope">
                         <el-table
                            
                            :data="scope.row.personItems"
                            style="width:100%"
                            >
                            <el-table-column
                                prop="sname"
                                label="姓名"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="sno"
                                label="学号"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="class"
                                label="班级"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="qq"
                                label="QQ"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="tel"
                                label="手机号"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="colege"
                                label="学院"
                            >
                            </el-table-column>
                         </el-table>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="团队状态"
                    width="140">
                </el-table-column>
                <el-table-column label="操作" width="200px">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleEdit(scope.row, 1)">通过</el-button>
                        <el-button
                        size="mini"
                        type="danger"
                        @click="handleEdit(scope.row, 0)">不通过</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
  </div>
</template>

<script>
import { getUserList, setAccept,insertTeam } from '@/api/back.js'
export default {
    data(){
        return{
            loading:false,
            mid:"",
            tableData:[],
            outTable:[]
        }
    },
    methods:{
        objectSpanMethod({ row, column, rowIndex, columnIndex }){
            console.log(row);
            console.log(column);
        },
        async handleEdit(row, status){
            var tid = row.id;
            await setAccept(tid, status).then((res)=>{
                if(res.data === 1){
                    this.$message.success("状态更改成功！")
                }else{
                    this.$message.error("状态更改失败！")
                }
            }).catch(()=>{
                this.$message.error("状态更改失败！")
            })
            this.getUserList()
        },
        async getUserList(){
            this.loading = true
            await getUserList(this.mid).then((res)=>{
                if(res.data.length){
                    this.tableData = res.data.map((item)=>{
                        return{
                            personItems: [].concat(item.personItems),
                            tname: item.tname,
                            id:item.tid,
                            status:item.status == 1?"通过":"未通过"
                        }
                    })
                    console.log(this.tableData);
                }else{
                    this.$message.error("暂无报名列表信息");
                }
            }).catch((res)=>{
                this.$message.error("查询比赛列表失败");
            })
            this.loading = false
        },
        handleToExport(){
            this.tableData.forEach((item)=>{
                var temp = {}
                temp['团队名'] = item.tname
                item.personItems.forEach((person,i)=>{
                    temp['队员'+(i+1)+'姓名']=person.sname
                    temp['队员'+(i+1)+'学号']=person.sno
                    temp['队员'+(i+1)+'手机号']=person.tel
                    temp['队员'+(i+1)+'QQ']=person.qq
                    temp['队员'+(i+1)+'班级']=person.class
                    temp['队员'+(i+1)+'学院']=person.colege
                })
                this.outTable.push(temp)
           })
            this.exportCSV(this.outTable);

        },
        async handleSelectedFile (convertedData) {
            console.log(convertedData)
            var header = convertedData.header
            var body = convertedData.body
            body.forEach((b)=>{
                header.forEach((item)=>{
                    console.log(item+":"+b[item]);
                    
                })
            })
            await insertTeam(this.mid, header, body).then((res)=>{
                if(res.data == 1){
                    this.$message.success("插入成功！")
                    setTimeout(()=>{
                        this.getUserList()
                    }, 500)
                }else{
                    this.$message.error("插入失败！")
                }
            }).catch(()=>{
                this.$message.success("插入失败！")
            })
        }
    },
    mounted(){
        this.mid = this.$route.query.id
        this.getUserList()
    }
}

</script>
<style>
</style>