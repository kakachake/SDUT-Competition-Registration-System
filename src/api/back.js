/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-13 23:26:22
 * @LastEditors: kakachake
 * @LastEditTime: 2019-12-13 23:28:55
 */
import axios from 'axios'
export function submitRace({name, desc, max_num, min_num}) {
    return  axios({
      method: 'post',
      url: '/submitRace',
      data: {
        name,
        desc,
        max_num,
        min_num
      }
    }).then((res)=>{
        // console.log(res);
        return res
    }).catch((error)=>{
      // console.log(error.response);
      return error.response
    })
  }
  