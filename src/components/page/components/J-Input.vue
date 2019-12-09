<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-08 23:05:23
 * @LastEditors: kakachake
 * @LastEditTime: 2019-12-09 16:54:28
 -->
<template>
  <div class="J-Input" >
      <input :value="value" :class="FormItem.validateState=='error'?'error':''" @blur="handleBlur" :style="inputWidth" :placeholder="placeholder" @input="handleInput">
  </div>
</template>

<script>
import Emitter from '../../../mixins/emitter.js'
export default {
    name:"JInput",
    mixins: [Emitter],
    inject:['FormItem'],
    props:{
        value:{
            type:String,
            default:""
        },
        placeholder:{
            default:""
        },
        width:{
            type:String,
            default:"100%"
        }
    },
    data(){
        return{
            inputWidth:{"width":this.width}
        }
    },
    methods:{
        handleInput(e){
            this.$emit('input', e.target.value)
            this.dispatch('JFormItem','on-form-change',event.target.value)
        },
        handleBlur(){
            this.dispatch('JFormItem','on-form-blur',event.target.value)
        }
    }
}

</script>
<style lang="scss">
.J-Input{
    height: 2rem;
    // margin: 10px;
    flex-wrap: nowrap;
    line-height: 2px;
    flex: 1;
    input{
        border-radius: 5px;
        border: 1px solid rgb(223, 223, 223);
        box-sizing: border-box;
        padding: 5px;
        font-size: .8rem;
        // width: 100%
        height: 100%;
    }
    .error{
        border: 1px solid red;
    }
}
</style>