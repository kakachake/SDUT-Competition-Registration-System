<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-13 23:36:26
 * @LastEditors  : kakachake
 * @LastEditTime : 2019-12-28 18:59:21
 -->
<template>
  <div>
        <J-Header></J-Header>
        <div class="JContainer">
            <div class="head">
                <h3>报名信息表</h3>
                <div class="search">
                    <el-input v-model="searchData" placeholder="请输入内容"></el-input>
                    <el-button type="primary" @click="handleSearch()" icon="el-icon-search">搜索</el-button>
                </div>
            </div> 
          <div class="content">
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
                    label="团队状态"
                    width="140">
                    <template slot-scope="scope">
                        <div :class="['status',{notAc:scope.row.status=='未通过'?true:false}]">
                            {{scope.row.status}}
                        </div>
                    </template>
                </el-table-column>
                <!-- <el-table-column label="操作" width="200px">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleEdit(scope.row, 1)">通过</el-button>
                        <el-button
                        size="mini"
                        type="danger"
                        @click="handleEdit(scope.row, 0)">不通过</el-button>
                    </template>
                </el-table-column> -->
            </el-table>
          </div>
      </div>
    <J-Footer content="Designed by kakachake <a href='https://github.com/kakachake/SDUT-Competition-Registration-System' target='_blank'>View on GitHub</a>"></J-Footer>
  </div>
</template>

<script>
import JHeader from "../common/J-Header"
import JFooter from "../common/J-Footer"
import { getUserList, setAccept, SearchTeam} from '@/api/back.js'
export default {
    data(){
        return{
            loading:false,
            mid:"",
            tableData:[],
            searchData:""
        }
    },
    watch:{
        searchData(newVal, oldVal){
            console.log(newVal);
            if(newVal === ''){
                this.getUserList()
            }
        }
    },
    components:{
        JHeader,
        JFooter
    },
    methods:{
        async handleSearch(){
            this.loading = true
            await SearchTeam(this.mid, this.searchData).then((res)=>{
                if(res.data.length){
                    this.tableData = res.data.map((item)=>{
                        return{
                            personItems: [].concat(item.personItems),
                            tname: item.tname,
                            id:item.tid,
                            status:item.status == 1?"已通过":"未通过"
                        }
                    })
                    console.log(this.tableData);
                }else{
                    this.$message.error("暂无比赛数据!");
                }
            }).catch((res)=>{
                this.$message.error("查询比赛列表失败");
            })
            this.loading = false
        },
        objectSpanMethod({ row, column, rowIndex, columnIndex }){
            console.log(row);
            console.log(column);
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
                            status:item.status == 1?"已通过":"未通过"
                        }
                    })
                    console.log(this.tableData);
                }else{
                    this.$message.error("暂无比赛数据!");
                }
            }).catch((res)=>{
                this.$message.error("查询比赛列表失败");
            })
            this.loading = false
            
        }
    },
    mounted(){
        this.mid = this.$route.params.id
        console.log(this.mid);
        
        this.getUserList()
    }
}

</script>
<style lang="scss" scoped>
.JContainer{
  position: relative;
//   background: #fff;
  // background: #eff4f7;
//   padding-top: 1rem;
  width: 100%;
  overflow: auto;
    .head{
        background: #eff4f7;
        max-width: 1200px;
        margin: 0 auto;
        padding: 10px 10px 0 10px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        h3{
            text-align: left;
        }
        .search{
            height: 30px;
            display: flex;
            flex-wrap: nowrap;
        }
    }
    .content{
        min-height: 800px;
        min-height: 500px;
        padding-bottom: 50px;
        margin: 0 auto;
        background: #eff4f7;
        // height: 1000px;
        overflow-y: auto;
        width: 1200px;
        .status{
        height: 1.3rem;
        border-radius: 4px;
        color: #fff;
        line-height: 1.3rem;
        font-size: 12px;
        padding: 0 8px;
        background: #5cb85c;
        width: 70px;
        text-align: center;
        flex: 0 0 60px;
        }
        .notAc{
            background: red;
        }
    }
}
</style>