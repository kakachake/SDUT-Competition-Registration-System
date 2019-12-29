<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-12 09:00:46
 * @LastEditors  : kakachake
 * @LastEditTime : 2019-12-28 19:06:57
 -->
<template>
<div class="body">
    <J-Header :img="'https://iph.href.lu/1920x450?text=%E6%8E%92%E5%90%8D%E5%A4%B4%E5%9B%BE'"></J-Header>
  <div class="contaner">
      <div class="content">
          <table class="team">
                <thead>
                    <th>排名</th>
                    <th>总分</th>
                    <th>队伍名</th>
                    <th>学院-班级</th>
                </thead>
                <tbody>
                    <tr v-for="item in ranklist" :key = "item.team_id">
                        <td><div class="rank"><img v-if="getRankImg(item.rank)" class="rankImg" :src="getRankImg(item.rank)" alt=""><span>{{item.rank}}</span></div></td>
                        <td>{{item.team_score}}</td>
                        <td>{{item.team_name}}</td>
                        <td>{{item.team_college}}{{item.team_class}}</td>
                    </tr>
                </tbody>
          </table>
      </div>
  </div>
</div>
</template>

<script>
import { getRankList } from '@/api/index';
import ranklist from './ranklist.json';
import JHeader from "../common/J-Header"
// import { async } from 'q';
export default {
    data(){
        return{
            ranklist:"",
            awards:[{
                rank:1,
                img:"https://acm.sdut.edu.cn/acmss/sdut_gplt/gplt_2/static/image/1st.png"
            },{
                rank:3,
                img:"https://acm.sdut.edu.cn/acmss/sdut_gplt/gplt_2/static/image/c2.png"
            },{
                rank:6,
                img:"https://acm.sdut.edu.cn/acmss/sdut_gplt/gplt_2/static/image/c3.png"
            },{
                rank:10,
                img:"https://acm.sdut.edu.cn/acmss/sdut_gplt/gplt_2/static/image/c4.png"
            }]
        }
    },
    components:{
        JHeader
    },
    methods:{
        async getRankList(){
            // await getRankList().then((res)=>{
            //     console.log(res);
            //     if(res.status == 200){
            //         this.ranklist = res.data.ranklist;
            //     } 
            // })
            console.log(ranklist);
            
            this.ranklist = ranklist.ranklist
        },
        getRankImg(rank){
            for(var item of this.awards){
                if(rank <= item.rank){
                    return item.img;
                }
            }
            return null;
        }
    },
    mounted(){
        this.getRankList();
    }
}

</script>
<style scoped lang="scss">
.body{
    height: auto;
    overflow: hidden;
    // background-color:;
    color: #000;
    .contaner{
        max-width: 1080px;
        margin: 0 auto;
        .rHeader{
            img{
                width: 100%;
                height: auto;
            }
        }
        .content{
            margin: .5rem;
            overflow: hidden;
            .team{
                border-collapse: collapse;
                width: 100%;
                max-width: 100%;
                text-align: center;
                .rank{
                    display: flex;
                    flex-wrap: nowrap;
                    vertical-align:middle;
                    align-items: center;
                    justify-content:center;
                }
                tr,thead,td,th{
                    padding: .2rem;
                    color: #000;
                    border: 1px solid #000;
                    font-size: 1rem;
                }
                .rankImg{
                    height: 1rem;
                    width: 1rem;
                    vertical-align:middle;
                }
            }
        }

    }
}

</style>