<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-27 17:36:28
 * @LastEditors  : kakachake
 * @LastEditTime : 2019-12-28 19:03:55
 -->
<template>
  <div>
      <J-Header ></J-Header>
      <div class="JContainer">
          <div class="content" 
            v-loading="loading"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(255, 255, 255, 0.5)"
            >
            <ul>
              <li v-for = "item in this.tableData" :key="item.mname" 
              >
                  <JmatchItem 
                    @handleToRegister="handleToRegister" 
                    @handleToRegisterList="handleToRegisterList" 
                    @handleToRankList="handleToRankList" 
                    :item="item"></JmatchItem>
              </li>
            </ul>
          </div>
      </div>
    <J-Footer content="Designed by kakachake <a href='https://github.com/kakachake/SDUT-Competition-Registration-System' target='_blank'>View on GitHub</a>"></J-Footer>
  </div>
</template>

<script>
import JHeader from "../common/J-Header"
import JFooter from "../common/J-Footer"
import JmatchItem from "../components/J-matchItem"
import { getMatchList } from '@/api/back.js'
export default {
    data(){
        return{
            loading:false,
            tableData:[]
        }
    },
    components:{
        JHeader,
        JmatchItem,
        JFooter
    },
    methods:{
        handleToRegister(item){
            this.$router.push("./re/"+item.id)
        },
        handleToRankList(item){
            this.$router.push("./rank/"+item.id)
        },
        handleToRegisterList(item){
            this.$router.push("./RegisterList/"+item.id)
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
        }
    },
    mounted(){
        this.getMatchList()
    }
}

</script>
<style lang="scss" scoped>
.JContainer{
  position: relative;
//   background: #fff;
  // background: #eff4f7;
//   padding-top: 1rem;
  .content{
    min-height: 800px;
    padding-bottom: 50px;
    margin: 0 auto;
    background: #fbfbfb;
    // height: 1000px;
    overflow-y: auto;
    max-width: 1200px;
  }
}
</style>