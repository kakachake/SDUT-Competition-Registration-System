/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-08 11:25:50
 * @LastEditors: kakachake
 * @LastEditTime: 2019-12-08 11:36:38
 */
import axios from axios;

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