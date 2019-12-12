/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-08 11:25:50
 * @LastEditors: kakachake
 * @LastEditTime: 2019-12-13 21:39:55
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
