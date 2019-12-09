<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-08 11:55:07
 * @LastEditors: kakachake
 * @LastEditTime: 2019-12-09 11:19:45
 -->
<template>
  <div>
    <J-Header></J-Header>
    <div class="container">
      <div class="content">
        <div class="desc">
          比赛说明:这是比赛说明
        </div>
        <div class="bar">
          <ul>
            <li @click="changeIdx(1)" :class="[{active: isActive==1}]">团队赛</li>
            <li @click="changeIdx(2)" :class="{active: isActive==2}">个人赛</li>
          </ul>
        </div>
        <div class="formPart">
          <transition name="form" mode="out-in" >
            <JForm :model="form" class="form1" v-if="isActive==1" key="1">
              <JFormItem label="团队名" >
                <JInput v-model="form.name" :name="'团队名'" placeholder="请输入团队名"></JInput>
              </JFormItem>
              <div class="personInfo">
                <label for="">成员信息：</label>
                <transition-group name="personItem" mode="out-in">
                  <div class="personItems" v-for="(item, idx) in form.personItems" :key="idx+1">
                    <label for="">队员{{idx+1}}:</label>
                    <div style="padding-left:2em">
                      <JFormItem :label="'姓名'" >
                        <JInput :width="'12rem'" v-model="item.name"  placeholder="请输入姓名"></JInput>
                      </JFormItem>
                      <JFormItem :label="'学号'" >
                        <JInput :width="'12rem'" v-model="item.name"  placeholder="请输入学号"></JInput>
                      </JFormItem>
                      <JFormItem :label="'班级'" >
                        <JInput :width="'12rem'" v-model="item.name"  placeholder="请输入班级"></JInput>
                      </JFormItem>
                    </div>
                  </div>
                </transition-group>
                <div style="margin-left:4em" @click="personAdd" class="personAdd">
                    新增成员
                </div>
              </div>
            </JForm>
            <JForm class="form2" v-if="isActive==2" key="2">
              <JInput v-model="name" :name="'姓名'" placeholder="请输入姓名"></JInput>  
            </JForm>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JHeader from "../common/J-Header"
import JInput from "../components/J-Input"
import JFormItem from "../components/J-FormItem"
import JForm from "../components/J-Form"
export default {
    data(){
      return{
        isActive:1,
        rule:{
          name,
        },
        form:{
          name: "测试",
          personItems:[{
            name:"",
            number:"",
            banji:""
          }]
        }
      }
    },
    components:{
        JHeader,
        JInput,
        JFormItem,
        JForm
    },
    methods:{
      changeIdx(idx){
        this.isActive = idx;
      },
      personAdd(){
        this.form.personItems.push({
            name:"",
            number:"",
            banji:""
          })
      }
    }
}

</script>
<style lang="scss">

.container{
  min-height: 1000px;
  overflow: hidden;
  position: relative;
  background: #fff;
  // margin-top: 500px;
  .content{
    margin: 0 auto;
    background: #f5f5f5;
    // height: 1000px;
    max-width: 1080px;
    .desc{
      padding: .8rem;
      font-size: .8rem;
    }
    .bar{
      height: 50px;
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
          color: #fff;
          text-align: center;
          background: cornflowerblue;
          transition: all .5s;
          &.active{
            color: cornflowerblue;
            background: #fff;
          }
        }
      }
    }
    .formPart{
      padding: 1rem 1.2rem;
      .personInfo{
        font-size: 1rem;
        .personItems{
          padding-left: 2em;
        }
        .personAdd{
          cursor: pointer;
          width: 8rem;
          height: 1.3rem;
          border: 1px dashed #2b98ff;
          border-radius: 5px;
          padding: .1rem;
          font-size: .5rem;
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
    // transform: translateX(280px);
}

.personItem-enter-active,.personItem-leave-active{
    transition: all 0.3s ease;
}
</style>