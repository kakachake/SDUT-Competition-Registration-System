<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-08 23:05:23
 * @LastEditors: kakachake
 * @LastEditTime: 2019-12-09 09:47:22
 -->
<template>
  <div class="J-Input" >
      <input :value="value" :style="inputWidth" :placeholder="placeholder" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
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
        handelChange(e){
            console.log(e);
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
        box-sizing: border-box;
        padding: 5px;
        font-size: .8rem;
        // width: 100%
        height: 100%;
    }
}
</style>