/**
 * Created by Designer on 2017/12/21.
 */
import router from '../router'


export default {
  install: function (Vue, options) {


    Vue.http.options.emulateJSON = true;
    Vue.http.interceptors.push((request, next)  =>{

      next((response) => {
        //对于有作登录状态的接口你，未未登录时跳转到登录页
        if(response.status==401){
         /* router.push({name:''});*/
        }
        return response
      });

    });
    /*自定义ajax函数，自带的不好用*/
    Vue.http.ajax = async function (options) {
      if(options.method.toUpperCase() == 'GET'){
        let res = await Vue.http.get(options.url, {params: options.params});
        if(typeof res.body == 'string'){
          return JSON.parse(res.body);
        }else{
          return res.body;
        }
      }else if(options.method.toUpperCase() == 'POST'){
        let res = await Vue.http.post(options.url, options.params,);
        if(typeof res.body == 'string'){
          return JSON.parse(res.body);
        }else{
          return res.body;
        }
      }
    }

    /**/
    //临时测试
    /*let basicUrl=process.env.NODE_ENV=='development'?'http://zyu-server.wicp.net:12412':'http://www.globalmazu.org:8801';*/
      let basicUrl=false&&process.env.NODE_ENV=='development'?'http://api.yeahcai.com/yecai':'http://zyu-server.wicp.net:12412';

    Vue.api={
        //获取统计数据
        getWorshipInfo:function (params) {
            return Vue.http.ajax({
                method: 'post',
                url: basicUrl+'/mazu-worship/worship/getWorshipInfo',
                params: params
            });
        },
        //进行朝拜
        doWorship:function (params) {
            return Vue.http.ajax({
                method: 'post',
                url: basicUrl+'/mazu-worship/worship/doWorship',
                params: params
            });
        },
        //获取banner的分页列表
        getBannerList:function (params) {
            return Vue.http.ajax({
                method: 'post',
                url: basicUrl+'/mazu-webConsole/banner/getBannerList',
                params: params
            });
        },
    }
  },

}
