/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-08 10:57:14
 * @LastEditors  : kakachake
 * @LastEditTime : 2019-12-29 12:29:03
 */
const path = require('path');
module.exports = {
    baseUrl: './',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api':{
                target:'http://192.168.43.241:8080/',
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