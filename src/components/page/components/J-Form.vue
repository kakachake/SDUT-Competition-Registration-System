<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-09 11:01:07
 * @LastEditors: kakachake
 * @LastEditTime: 2019-12-09 11:12:27
 -->
<template>
  <div>
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:"JForm",
    provide(){
        return {
            form: this
        }
    },
    props:{
        model:{
            type: Object
        },
        rules:{
            type: Object
        }
    },
    data(){
        return{
            fields:[]
        }
    },
    created(){
        let that = this;
        this.$on('on-form-item-add', item=>{
            if(item){
                that.fields.push(item)
            }
        })
        this.$on('on-form-item-remove', item=>{
            if(item.prop){
                that.fields.splice(that.fields.indexOf(item), 1);
            }
        })
    },
      methods:{
       /**
        * 清空
        */
       resetFields(){//添加resetFields方法使用的时候调用即可
        /**
         * 当前所有当form-item 进行赋值
         */
        this.fields.forEach(field => {
         field.resetField();
        });
       },
       /**
        * 校验 公开方法：全部校验数据，支持 Promise
        */
       validate(callback){
        return new Promise(resolve=>{
         /**
          * 当前所有当form-item 进行校验
          */
         let valid = true; // 默认是通过
         let count = 0; // 来匹配当前是否是全部检查完
         this.fields.forEach(field => {
          // 每个实例都会有 validation 的校验的方法
          field.validation('',error=>{
           // 只要有一个不符合那么当前的校验就是未通过的
           if (error) { 
            valid = false;
           }
           // 通过当前检查完所有的form-item的时候才会调用
           if (++count === this.fields.length) {
            resolve(valid);// 方法使用then
            if (typeof callback === 'function') {
             callback(valid);// 直接调用注入的回调方法
            }
           }
          });
         });
        })
       }
      }
}

</script>
<style>
</style>