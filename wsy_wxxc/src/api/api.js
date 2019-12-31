import http from '../utils/http'

//用户地址
const address = {
    //获取地址
    get: function () { return http.get('address') },
    //新增地址
    post: function (data) { return http.post('address', data) },
    //修改地址
    put: function (data) { return http.put(`address${data.id}`, data) },
    //删除地址
    delete: function (data) { return http.delete(`address${data.id}`) }
}
//用户
const user = {
    //查找用户
    get: function () { return http.get('user') },
    //增加用户
    post: function (data) { return http.post('user', data) },
    //修改用户
    put: function (data) { return http.put(`user${data.id}`, data) },
    //删除用户
    delete: function (data) { return http.delete(`user${data.id}`) }
}

export {
    address, user
}


// 如何使用封装好的接口API
// import { Address } from 'api'
// async function getAddress(){
//     let result = await Address.get(); 
//     ...
// }
// async function delAddress(id){
//     let result = await Address.delete(id); 
//     ...
// }