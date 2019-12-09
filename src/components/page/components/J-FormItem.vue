<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-09 08:51:31
 * @LastEditors: kakachake
 * @LastEditTime: 2019-12-09 11:22:22
 -->
<template>
  <div class="formItem">
      <div class="item">
        <label for="">{{label}}:</label>
        <slot class="slot"></slot>
      </div>
      <div class="error" v-show="errorMsg">{{errorMsg}}</div>
  </div>
</template>

<script>
import Emitter from '../../../mixins/emitter';
import schema from 'async-validator';
export default {
    mixins:[Emitter],
    inject:['form'],
    props:["label", "prop"],
    computed:{
        fieldValue(){ //获取当前formItem的值
            return  this.form.model[this.prop];
        }
    },
    data(){
        return {
            initialValue: '', //存储默认值
            isRequired: flase, //当前是否有问题
            validateState:'', //是否校验成功
            validateMsg: '', //校验成功文案
        }
    },
    methods:{
        
    }
}

</script>
<style lang="scss" scoped>
.formItem{
    margin: .6rem 0px;
    .item{
    display: flex;
        label{
            flex: 0 0 auto;
            line-height: 2rem;
            margin-right: 10px;
        }
        .slot{
            flex: 1;
        }
    }
}

</style>