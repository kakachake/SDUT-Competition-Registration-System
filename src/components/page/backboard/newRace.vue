<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-13 23:04:53
 * @LastEditors  : kakachake
 * @LastEditTime : 2019-12-27 17:19:44
 -->
<template>
  <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-calendar"></i>新增比赛</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="100px">
                    <el-form-item label="比赛名称:" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="比赛简介:" prop="desc">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item label="比赛人数:" prop="num">
                        <el-row>
                            <el-col :span="8">
                                 <el-input type="number" v-model="form.min_num"></el-input>
                            </el-col>
                            <el-col :span="1">
                                <div style="text-align:center">
                                    -
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <el-input type="number" v-model="form.max_num"></el-input>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item label="报名截止时间:">
                        <el-date-picker
                        v-model="form.date"
                        type="datetime"
                        format="yyyy-M-d HH:mm"
                        value-format="timestamp"
                        placeholder="选择日期时间">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm()">提交</el-button>
                        <el-button @click="resetForm()">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
  </div>
</template>

<script>
import { submitRace } from '@/api/back.js'
export default {
    data(){
        return {
            form:{
                name:"测试",
                desc:"测试",
                max_num:3,
                min_num:1,
                date:""
            }
        }
    },
    methods:{
        async submitForm(){
            console.log(this.form);
            
            await submitRace(this.form).then((res)=>{
                console.log(res);
                
                if(res.data == 1){
                    this.$message.success("提交成功");
                }else{
                    this.$message.error("提交失败");
                }
            }).catch((res)=>{
                
            })
        }
    }
}

</script>

<style>
</style>