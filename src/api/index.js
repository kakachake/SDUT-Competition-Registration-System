/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-08 11:25:50
 * @LastEditors  : kakachake
 * @LastEditTime : 2019-12-28 11:55:32
 */
import axios from 'axios';

const host = "localhost:8080"

export function index() {
    return  axios({
      method: 'post',
      url: 'https://getman.cn/mock/route',
      data: {
        }
      }).then((res)=>{
        // console.log(res);
        return res
    }).catch((error)=>{
      // console.log(error.response);
      return error.response
    })
}


export function getRankList() {
  return  axios({
    method: 'get',
    url: '/acm/acmss/sdut_gplt/gplt_2/rankings.json',
    data: {
      }
    }).then((res)=>{
      // console.log(res);
      return res
  }).catch((error)=>{
    // console.log(error.response);
    return error.response
  })
}

export function submitTeam({name, personItems},mid) {
  return  axios({
    method: 'post',
    url: 'api/team',
    data: {
      name,
      mid,
      personItems
    }
  }).then((res)=>{
      // console.log(res);
      return res
  }).catch((error)=>{
    // console.log(error.response);
    return error.response
  })
}

export function submitPerson({name, stuName, stuNum, _class, qqNum,phoneNum,college },mid) {
  return  axios({
    method: 'post',
    url: 'api/personal',
    data: {
      name,
      stuName,
      stuNum,
      class:_class,
      qqNum,
      phoneNum,
      college,
      mid
    }
  }).then((res)=>{
      // console.log(res);
      return res
  }).catch((error)=>{
    // console.log(error.response);
    return error.response
  })
}

export function GetMatch(mid) {
  return  axios({
    method: 'post',
    url: 'api/GetMatch',
    data: {
      mid
    }
  }).then((res)=>{
      // console.log(res);
      return res
  }).catch((error)=>{
    // console.log(error.response);
    return error.response
  })
}
