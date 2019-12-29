<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-27 17:42:40
 * @LastEditors  : kakachake
 * @LastEditTime : 2019-12-29 13:20:54
 -->
<template>
  <div class="JItem">
      <div class="JItemHeader" @click="$emit('handleToRegister',item)">
        <div class="JItemName">
          {{item.name}}
        </div>
        <div :class="['status',{end:isend}]">
          {{isend==true?"报名已截止":"进行中"}}
        </div>
      </div>
      <div class="JItemInfo">
        <div class="JItemDate">
          结束时间：{{formatDate}}
        </div>
        <div class="JWrap">
          <div  v-show="isend" class="JItemButton" @click="$emit('handleToRankList',item)">
            查看成绩排名
          </div>
          <div class="JItemButton" @click="$emit('handleToRegisterList',item)">
            查看报名列表
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props:['item'],
  computed:{
    isend(){
      console.log(+new Date());
      console.log(this.item.date);
      console.log(+new Date() > (+this.item.date));
      
      return (+new Date()) > (+this.item.date)
    },
    formatDate(){
      var now = new Date(+this.item.date).toLocaleString().replace(/:\d{1,2}$/,' ');  
      return now;
    }
  }
}

</script>
<style lang="scss">
.JItem{
  margin: 15px 0 15px 0;
  padding: 10px 15px 10px 15px;
  border-radius: 5px;
  background: #fdfdfd;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.2);
  transition: all .3s;
  &:hover{
    box-shadow: 0px 0px 20px 7px rgba(26,26,26,0.3);
    background: rgb(255, 255, 255);
    transform: translateY(-3px);
  }
  .JItemHeader{
    cursor: pointer;
    display: flex;
    flex-wrap: nowrap;
    justify-content:space-between;
    height: 1.3rem;
    .JItemName{
      color: #1b75dc;
      font-size: 1.3rem;
      line-height: 1.3rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .status{
      height: 1.3rem;
      border-radius: 4px;
      color: #fff;
      line-height: 1.3rem;
      font-size: 12px;
      padding: 0 8px;
      background: #5cb85c;
      min-width: 56px;
      text-align: center;
      flex: 0 0 60px;
    }
    .end{
      background: red;
    }
  }
  .JItemInfo{
    margin-top: 10px;
    // height: 1.3rem;
    display: flex;
    justify-content: space-between;
    .JItemDate{
      flex: 0 0  auto;
      float: left;
      color: #666;
      font-size: .8rem;
    }
    .JWrap{
      flex: 0 auto;
      display: flex;
      .JItemButton{
        cursor: pointer;
        height: 1.5rem;
        border-radius: 4px;
        color: #fff;
        line-height: 1.5rem;
        font-size: 12px;
        padding: 0 8px;
        background: #6e95df;
        // width: 80px;
        text-align: center;
        margin: 0 0 0 5px;;
      }
    }

  }
}
</style>