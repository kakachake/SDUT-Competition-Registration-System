<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-09 08:51:31
 * @LastEditors  : kakachake
 * @LastEditTime : 2019-12-27 18:21:56
 -->
<template>
  <div class="formItem">
        <label for="">{{label}}:</label>
        <div style="position:relative;display:inline-block">
            <slot class="slot" >
                
            </slot>
            <div class="error" v-if="validateState==='error'">{{validateMessage}}</div>
        </div>
  </div>
</template>

<script>
import Emitter from '../../../mixins/emitter';
import schema from 'async-validator';

function getPropByPath(obj, path, strict) {
    let tempObj = obj;
    path = path.replace(/\[(\w+)\]/g, '.$1');
    path = path.replace(/^\./, '');

    let keyArr = path.split('.');
    let i = 0;
    for (let len = keyArr.length; i < len - 1; ++i) {
        if (!tempObj && !strict) break;
        let key = keyArr[i];
        if (key in tempObj) {
            tempObj = tempObj[key];
        } else {
            if (strict) {
                throw new Error('please transfer a valid prop path to form item!');
            }
            break;
        }
    }
    return {
        o: tempObj,
        k: keyArr[i],
        v: tempObj ? tempObj[keyArr[i]] : null
    };
}

export default {
    name:"JFormItem",
    mixins:[Emitter],
    inject:['form'],
    provide(){
        return {
            FormItem: this
        }
    },
    // props:["label", "prop", "rules"],
    props:{
        label:{
            default:""
        },
        prop:{
            default:""
        },
        rules:{
            default:()=>{
                return []
            }
        }
    },
    computed:{
        fieldValue(){ //获取当前formItem的值
            return  this.prop.indexOf('.')=='-1'?this.form.model[this.prop]:getPropByPath(this.form.model,this.prop).v;
        }
    },
    data(){
        return {
            initialValue: '', //存储默认值
            isRequired: false, //当前是否必填
            validateState:'', //是否校验成功
            validateMsg: '', //校验成功文案
        }
    },
    methods:{
        setRules(){
            let that = this;
            let rules = this.getRules();
            if(rules.length){
                this.isRequired = rules.some(rule=>{
                    return rule.required
                })
            }
            this.$on('on-form-blur', that.onFieldBlur);
            this.$on('on-form-chage', that.onFieldChage);
        },
        getRules(){
            let that = this;
            let rules = that.form.rules;
            rules = rules?rules[that.prop]:'';
            return [].concat(rules||[]).concat(this.rules) //使返回结果一定为数组形式
        },
        onFieldBlur(){
            this.validation('blur')
        },
        onFieldChange(){
            console.log('change');
            
            this.validation('change')
        },
        //过滤规则
        getFilteredRule(trigger){
            let rule = this.getRules();
            //返回没有调用方式的或者调用方式匹配当前规则
            return rule.filter(res=>!res.trigger || res.trigger.indexOf(trigger)!== -1)
        },
        validation(trigger, callback = function(){}){
            console.log(this.fieldValue);
            
            let rules = this.getFilteredRule(trigger);
            if(!rules || rules.length == 0){
                return;
            }
            console.log(rules);
            
            this.validateState = 'validating';
            var validator = new schema({[this.prop]: rules});
            validator.validate({[this.prop]: this.fieldValue}, { firstFields: true },(errors, fields) => {
                this.validateState = !errors ? 'success' : 'error';
                this.validateMessage = errors ? errors[0].message : '';
                callback(this.validateMessage);
            });
        },
        resetField(){
            this.form.model[this.prop] = this.initialValue;
        }
    },
    mounted(){
        if(this.prop){
            this.dispatch('JForm', 'on-form-item-add', this);
            this.initialValue = this.fieldValue;
            this.setRules();
        }
    },
    beforeDestroy(){
        this.dispatch('JForm', 'on-form-item-remove', this);
    }
}

</script>
<style lang="scss" scoped>
.formItem{
    margin: 0 .5rem 1rem 0;
    display: inline-block;
    label{
        width: 3.3em;
        display: inline-block;
        text-align: center;
        line-height: 2rem;
        margin-right: 10px;
    }
    .slot{
        display: inline-block;
    }
    .error{
        position: absolute;
        top:100%;
        height: .6rem;
        font-size: .5rem;
        color:red;
    }
}

@media (max-width: 768px){ 
    .formItem{
        justify-content: start;
    }
}

</style>