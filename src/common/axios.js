// 使用数据拦截器
import axios from 'axios';
import Qs from 'qs';
import {
    Loading,
    Message
} from 'element-ui';
//import VueCookies from 'vue-cookies'
import router from '@/router'
const loading = {
    loadingInstance: null, // Loading 实例
    // 打开加载
    open: function () {
        // 创建实例,而且会打开加载 窗口
        if (this.loadingInstance === null) {
            // 如果实例 为空，则创建
            this.loadingInstance = Loading.service({
                target: '.main',
                text: '拼命加载中...',
                background: 'rgba(0, 0, 0, 0.5)'
            })
        }
    },
    // 关闭加载
    close: function () {
        // 不为空时, 则关闭加载窗口
        if (this.loadingInstance !== null) {
            this.loadingInstance.close()
        }
        this.loadingInstance = null
    }
}
axios.defaults.timeout = 5000;

axios.defaults.baseURL = process.env.VUE_APP_SERVICE_URL; //填写域名

//http request 拦截器  客户端给服务端 的数据 
axios.interceptors.request.use(
    config => {
        // 打开加载窗口
        loading.open()
        config.headers.common = {
            //'Authorization': 'Bearer' + ' ' + VueCookies.get('token'),
            'version': '1.0',
            'Content-Type': 'application/json;charset=UTF-8'
        }
        if (config.data && config.data.isFormData) {
            config.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
            //转化成formData格式
            // transformRequest只能用在 PUT, POST, PATCH 这几个请求方法
            config.transformRequest = [function (data) {
                //方式一
                delete data.isFormData;
                // var ret = '';
                // for (let it in data) {
                //   ret += it+'=' +data[it] + '&';
                // }
                // return ret.substring(0,ret.length-1);

                //方式二：
                var test2 = Qs.stringify(data);
                return test2;
            }]
        }

        return config;
    },
    error => {
        return Promise.reject(err);
    }, error => {
        // 关闭加载窗口
        loading.close()
        // 出现异常
        return Promise.reject(error);
    }
);

//响应拦截器即异常处理 -  -- 服务给客户端的数据进行处理
axios.interceptors.response.use(response => {
    // 关闭加载窗口
    loading.close()
    if (response.status === 200) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(response);
    }
    // return response
}, err => {
    if (err && err.response) {
        var errorMsg = '';
        switch (err.response.status) {
            case 400:
                errorMsg = '错误请求';
                break;
            case 401:
                errorMsg = '未授权，请重新登录';
                router.push({
                    path: `/login`
                })
                break;
            case 403:
                errorMsg = '拒绝访问';
                break;
            case 404:
                errorMsg = '请求错误,未找到该资源';
                break;
            case 405:
                errorMsg = '请求方法未允许';
                break;
            case 408:
                errorMsg = '请求超时';
                break;
            case 500:
                errorMsg = '服务器端出错';
                break;
            case 501:
                errorMsg = '请求方法未允许';
                break;
            case 502:
                errorMsg = '网络错误';
                break;
            case 503:
                errorMsg = '服务不可用';
                break;
            case 504:
                errorMsg = '网络超时';
                break;
            case 505:
                errorMsg = 'http版本不支持该请求';
                break;
            default:
                errorMsg =`连接错误${err.response.status}`
        }
    } else {
        errorMsg = '连接到服务器失败';
    }

    Message({
        message: errorMsg,
        type: 'error',
        duration: 5 * 1000
    })

    return Promise.resolve(err.response)
})
//axio的crud方法
export default {
    post(url, params) {
        return axios.post(url, params)
            .then((response) => {
                if (response && response.status == 200) {
                    return Promise.resolve(response.data.data);
                }
            })
    },
    async get(url, params = {}) {
        var res = await axios({
            method: 'get',
            url: url,
            params: params
        });
        return res.data.data;
    },
    async delete(url, params = {}) {
        var res = await axios({
            method: 'delete',
            url: url,
            data: params
        });
        return res.data.data;
    },
    async put(url, params = {}) {
        var res = await axios({
            method: 'put',
            url: url,
            data: params
        });
        return res.data.data;
    }
}