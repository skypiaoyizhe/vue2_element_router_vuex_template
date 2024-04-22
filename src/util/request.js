import axios from 'axios'
import store from "@/store";
import { Message } from 'element-ui';

console.info('接口地址：',process.env.VUE_APP_API_URL)
const service = axios.create({
    baseURL:process.env.VUE_APP_API_URL,
    timeout:5000
})

service.interceptors.request.use(
    config => {
        console.log('请求',config)
        if (store.state.token) {
            config.headers['Authorization'] = 'Bearer ' + store.state.token
        }
        return config
    },
    error => {
        console.log('请求错误',error)
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    config => {
        console.log('响应',config)
        if(config.status >= 200 && config.status <= 300){
            return config.data.data
        }else{
            return config
        }
    },
    error => {
        console.log("响应错误",error)
        const msg = error.response?error.response.data.msg:"网络错误"
        Message.error(msg)
        return Promise.reject(error)
    }
)
export function get(url, data) {
    return service({
        url,
        method: 'get',
        params: data
    })
}
export function post(url, data) {
    return service({
        url,
        method: 'post',
        data
    })
}
export default service
