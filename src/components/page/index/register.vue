<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-08 11:55:07
 * @LastEditors  : kakachake
 * @LastEditTime : 2019-12-29 13:14:03
 -->
<template>
  <div>
    <J-Header :img="'https://acm.sdut.edu.cn/image/banner_images/rc_banner_compressed.jpg'"></J-Header>
    <div class="JContainer">
      <div class="content" 
        v-loading = "loading"
        element-loading-text="竞赛信息加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(255, 255, 255, 0.9)"
        >
        <div class="title">
          {{this.matchInfo.mname}}
        </div>
        <div class="desc">
          比赛说明:{{this.matchInfo.describe}}
        </div>
        <div class="bar">
          <ul>
            <li @click="changeIdx(1)" :class="[{active: isActive==1}]">团队赛</li>
            <li @click="changeIdx(2)" :class="{active: isActive==2}">个人赛</li>
          </ul>
        </div>
        <div class="formPart">
          <transition name="form" mode="out-in" >
            <JForm :model="form1" :rules="rules" ref="ruleForm1" class="form1" v-if="isActive==1" key="1">
              <JFormItem label="团队名" prop="name">
                <JInput v-model="form1.name" :name="'团队名'" placeholder="请输入团队名"></JInput>
              </JFormItem>
              <div class="personInfo">
                <label for="">成员信息：</label>
                <transition-group tag="div" name="personItem" mode="out-in">
                  <div class="personItems" v-for="(item, idx) in form1.personItems" :key="idx+1">
                    <label for="">队员{{idx+1}}{{idx==0?'(队长)':''}}:</label>
                    <div class="JFormItems" style="padding-left:1em">
                      <JFormItem :label="'姓名'" :rules="rules.stuName" :prop="'personItems.'+idx+'.stuName'">
                        <JInput :width="'12rem'" v-model="item.stuName"  placeholder="请输入姓名"></JInput>
                      </JFormItem>
                      <JFormItem :label="'学号'" :rules="rules.stuNum" :prop="'personItems.'+idx+'.stuNum'">
                        <JInput :width="'12rem'" v-model="item.stuNum"  placeholder="请输入学号"></JInput>
                      </JFormItem>
                      <JFormItem :label="'手机号'" :rules="rules.phoneNum" :prop="'personItems.'+idx+'.phoneNum'">
                        <JInput :width="'12rem'" v-model="item.phoneNum"  placeholder="请输入手机号"></JInput>
                      </JFormItem>
                      <JFormItem :label="'QQ'" :rules="rules.qqNum" :prop="'personItems.'+idx+'.qqNum'">
                        <JInput :width="'12rem'" v-model="item.qqNum"  placeholder="请输入QQ"></JInput>
                      </JFormItem>
                      <JFormItem :label="'班级'" >
                        <JInput :width="'12rem'" v-model="item.class"  placeholder="请输入班级"></JInput>
                      </JFormItem>
                      <JFormItem :label="'学院'" >
                        <JInput :width="'12rem'" v-model="item.college"  placeholder="请输入学院"></JInput>
                      </JFormItem>
                      <el-button v-if="idx!=0" class="delete"  @click="handleDeletPerson(idx)" type="danger">
                        删除该成员
                      </el-button>
                    </div>
                  </div>
                </transition-group>
                <div style="margin-left:5rem" @click="personAdd" class="personAdd">
                    新增成员
                </div>
              </div>
              <div :class="['submit',{disabled:isDisable}]" @click="submit(1)">提交</div>
            </JForm>
            <JForm :model="form2" class="form2" ref="ruleForm2" v-if="isActive==2" key="2" :rules="rules">
                <JFormItem :label="'团队名'" prop="name">
                  <JInput :width="'12rem'" v-model="form2.name"  placeholder="请输入团队名"></JInput>
                </JFormItem>
                <JFormItem :label="'姓名'" prop="stuName">
                  <JInput :width="'12rem'" v-model="form2.stuName"  placeholder="请输入姓名"></JInput>
                </JFormItem>
                <JFormItem :label="'学号'"  prop="stuNum">
                  <JInput :width="'12rem'" v-model="form2.stuNum"  placeholder="请输入学号"></JInput>
                </JFormItem>
                <JFormItem :label="'手机号'"  prop="phoneNum">
                  <JInput :width="'12rem'" v-model="form2.phoneNum"  placeholder="请输入手机号"></JInput>
                </JFormItem>
                <JFormItem :label="'QQ'"  prop="qqNum">
                  <JInput :width="'12rem'" v-model="form2.qqNum"  placeholder="请输入QQ"></JInput>
                </JFormItem>
                <JFormItem :label="'班级'"  >
                  <JInput :width="'12rem'" v-model="form2._class"  placeholder="请输入班级"></JInput>
                </JFormItem>
                <JFormItem :label="'学院'" >
                  <JInput :width="'12rem'" v-model="form2.college"  placeholder="请输入学院"></JInput>
                </JFormItem>
                <div :class="['submit',{disabled:isDisable}]" @click="submit(2)">提交</div>
            </JForm>
          </transition>
        </div>
      </div>
    </div>
    <J-Footer content="Designed by kakachake <a href='https://github.com/kakachake/SDUT-Competition-Registration-System' target='_blank'>View on GitHub</a>"></J-Footer>
  </div>
</template>

<script>
import JHeader from "../common/J-Header"
import JFooter from "../common/J-Footer"
import JInput from "../components/J-Input"
import JFormItem from "../components/J-FormItem"
import JForm from "../components/J-Form"
import {regular, validateOrder} from '@/utils/validate.js'
import { submitTeam , submitPerson, GetMatch} from '@/api/index.js'

export default {
    data(){
      return{
        loading: false,
        isActive:1,
        rules:{
          name:[
            { required: true, message: '请输入团队名称', trigger: 'blur' },
            { min: 1, max: 25, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          stuName:[
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { pattern:/^[\u4e00-\u9fa5]{2,8}$/, message: '长度在 2 到 8 个汉字', trigger: 'blur' }
          ],
          stuNum:[
            { required: true, message: '请输入学号', trigger: 'blur' },
            { pattern:regular.naturalNumber, message: '学号必须为数字且长度必须为11位！', trigger: 'blur' },
            { len:11, message: '学号必须为数字且长度必须为11位！', trigger: 'blur' }
          ],
          phoneNum:[
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { pattern:regular.telephone, message: '手机号输入有误！', trigger: 'blur' }
          ],
          qqNum:[
            { required: true, message: '请输入qq号', trigger: 'blur' },
            { pattern:regular.naturalNumber,  message: 'qq号输入有误！', trigger: 'blur' },
            { min: 5, max: 14, message: 'qq号输入有误！', trigger: 'blur' }
          ]
        },
        form1:{
          name: "测试",
          personItems:[{
            stuName:"张泰民",
            stuNum:"17110501127",
            class:"计科1708",
            qqNum:"282281884",
            phoneNum:"15615538215",
            college:"计算机科学与技术学院"
          }]
        },
        form2:{
            name:"",
            stuName:"张泰民",
            stuNum:"17110501127",
            _class:"计科1708",
            qqNum:"282281884",
            phoneNum:"15615538215",
            college:"计算机科学与技术学院"
        },
        id:"",
        matchInfo:{
        }
      }
    },
    computed:{
      isDisable(){
        console.log((+new Date()) > (+this.matchInfo.end));
        
        return (+new Date()) > (+this.matchInfo.end)
      }
    },
    components:{
        JHeader,
        JInput,
        JFormItem,
        JForm,
        JFooter
    },
    methods:{
      changeIdx(idx){
        this.isActive = idx;
      },
      personAdd(){
        console.log(this.matchInfo.max);
        console.log(this.matchInfo.max);
        if(this.form1.personItems.length < this.matchInfo.max){
          this.form1.personItems.push({
          })
        }else{
          this.$message.error("超过最大参赛人数！")
          return;
        }

      },
      async getMatchInfo(){
        this.loading = true;
        await GetMatch(this.id).then((res)=>{
          if(res.data.length!=0){
            this.matchInfo = res.data[0];
          }
        })
        this.form1.personItems = new Array(+this.matchInfo.min).fill({
          
        })
        console.log(this.form1.personItems);
        
        var cur = +new Date()
        console.log(cur);
        console.log(+this.matchInfo.end);
        if(cur > (+this.matchInfo.end)){
          this.$message.error("报名已截止！")
        }
        this.loading = false;
      },
      handleDeletPerson(idx){
        if(this.form1.personItems.length > +this.matchInfo.min){
          this.form1.personItems.splice(idx,1);
        }else{
          this.$message.error("至少需要"+this.matchInfo.min+"人参赛!")
        }
      },
      async submit(idx){
        
        if(this.isDisable){
          this.$message.error("报名已截止！")
          return;
        }else{
          this.loading = true;
          this.$refs['ruleForm'+idx].validate().then(async (res)=>{
              if(res){
                if(idx == 1){
                  await submitTeam(this.form1, this.id).then((res)=>{
                    if(res.data == 1){
                      this.$message.success("提交成功！")
                      this.$router.push("/RegisterList/"+this.id)
                    }else{
                      this.$message.error("提交失败！")
                    }
                  }).catch(()=>{
                    this.$message.error("提交失败！")
                  })
                }else{
                  await submitPerson(this.form2, this.id).then((res)=>{
                    if(res.data == 1){
                      this.$message.success("提交成功！")
                      this.$router.push("/RegisterList/"+this.id)
                    }else{
                      this.$message.error("提交失败！")
                    }
                  }).catch(()=>{
                    this.$message.error("提交失败！")
                  })
                }
              }else{
                this.$message.error("您的填写项有误！")
              }
          })
          this.loading = false;
        }
      }
    },
    mounted(){
      this.id = this.$route.params.id
      this.getMatchInfo()
    }
}

</script>
<style lang="scss" scoped>

.JContainer{
  // min-height: 1000px;
  overflow: hidden;
  position: relative;
  // background: #fff;
  // margin-top: 500px;
  .content{
    min-height: 800px;
    padding-bottom: 50px;
    margin: 0 auto;
    background: rgb(250, 250, 250);
    height: auto;
    overflow: auto;
    max-width: 1200px;
    .title{
      text-align: center;
      font-size: 1.5rem;
    }
    .desc{
      padding: .8rem;
      font-size: .8rem;
      color: #808080;
    }
    .bar{
      height: 50px;
      border: 1px solid cornflowerblue;
      // background:cornflowerblue;
      ul{
        display:flex;
        flex-wrap: nowrap;
        height: 50px;
        line-height: 50px;
        cursor: pointer;
        li{
          flex: 1;
          font-size: 24px;
          color: cornflowerblue;
          text-align: center;
          background: #fff;
          transition: all .5s;
          &.active{
            color: #fff;
            background: cornflowerblue;
          }
        }
      }
    }
    .formPart{
      // box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
      padding: 1rem 1.2rem;
      .personInfo{
        margin-bottom: 20px;
        font-size: 1rem;
        .personItems{
          padding-left: 1em;
          // height: 360px;
          overflow: hidden;
          .delete{
            // display: none;
            opacity: 0;
            transition: all .6s;
          }
          &:hover{
            .delete{
              opacity: 1;
              display: inline-block;
            }
          }
        }
        .personAdd{
          margin-top:10px;
          cursor: pointer;
          width: 6rem;
          height: 1.3rem;
          border: 1px dashed #2b98ff;
          border-radius: 5px;
          padding: .1rem;
          font-size: .7rem;
          text-align: center;
          line-height: 1.3rem;
          color: #2e2e2e;
          transition: all .5s;
          &:hover{
            background:  #2b98ff;
            color: #fff;
          }
        }
      }
      .submit{
        margin: 0 auto;
        height: 1.7rem;
        width: 7rem;
        background:  #2b98ff;
        color: #fff;
        line-height: 1.7rem;
        font-size: 1rem;
        text-align: center;
        cursor: pointer;
        border-radius: 5px;
      }
      .disabled{
        cursor:not-allowed;
        background: #999;;
        // pointer-events: none;
      }
      @media (max-width: 768px){ 
          .submit{
            width: 100%;
            margin: 5px;
            height: 2.2rem;
            line-height: 2.2rem;
          }
      }
      .form2{
        max-width: 500px;
        margin: 0 auto;
        // display: flex;
        flex-direction: column;
        text-align: center;
        width: auto;
      }
    }
  }
}

.form-enter,.form-leave-to{
    opacity: 0;
    // transform: translateX(280px);
}

.form-enter-active,.form-leave-active{
    transition: all 0.3s ease;
}

.personItem-enter,.personItem-leave-to{
    opacity: 0;
}

.personItem-enter-active,.personItem-leave-active{
    transition: all .5s ease;
}
</style>