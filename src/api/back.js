/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-13 23:26:22
 * @LastEditors  : kakachake
 * @LastEditTime : 2019-12-28 18:55:49
 */
import axios from 'axios'
export function submitRace({name, desc, max_num, min_num, date}) {
    return  axios({
      method: 'post',
      url: 'api/CreateM',
      data: {
        mname:name,
        describe:desc,
        max:max_num,
        min:min_num,
        end:date,
        begin:''
      }
    }).then((res)=>{
        // console.log(res);
        return res
    }).catch((error)=>{
      // console.log(error.response);
      return error.response
    })
  }
  
export function getMatchList() {
    return  axios({
      method: 'post',
      url: 'api/MatchList',
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
  
export function getUserList(mid) {
    return  axios({
      method: 'post',
      url: 'api/UserList',
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
  
export function deleteM(mid) {
    return  axios({
      method: 'post',
      url: 'api/DeleteM',
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
  
export function insertTeam(mid, header, body) {
    return  axios({
      method: 'post',
      url: 'api/InsertTeam',
      data: {
        mid,
        header,
        body
      }
    }).then((res)=>{
        // console.log(res);
        return res
    }).catch((error)=>{
      // console.log(error.response);
      return error.response
    })
  }
  
  
export function setAccept(tid, status) {
    return  axios({
      method: 'post',
      url: 'api/Accept',
      data: {
        tid,
        status
      }
    }).then((res)=>{
        // console.log(res);
        return res
    }).catch((error)=>{
      // console.log(error.response);
      return error.response
    })
  }
  
  
export function SearchTeam(mid, tname) {
    return  axios({
      method: 'post',
      url: 'api/SearchTeam',
      data: {
        mid,
        tname
      }
    }).then((res)=>{
        // console.log(res);
        return res
    }).catch((error)=>{
      // console.log(error.response);
      return error.response
    })
  }
  