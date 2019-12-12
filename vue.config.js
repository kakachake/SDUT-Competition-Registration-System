/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-08 10:57:14
 * @LastEditors: kakachake
 * @LastEditTime: 2019-12-13 21:37:06
 */
const path = require('path');
module.exports = {
    baseUrl: './',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api':{
                target:'http://jsonplaceholder.typicode.com',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            },
            '/acm':{
                target: 'https://acm.sdut.edu.cn/',
                changeOrigin: true,
                pathRewrite:{
                    '/acm':''
                }
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
          .set("@", path.join(__dirname, "src"))
    }
}