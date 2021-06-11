import axios from "axios"
// export function request(config, success, failure) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   instance(config).then(res => {
//     success(res)
//   }).catch(err => {
//     failure(err)
//   })
// }


// export function request(config) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   instance(config.baseConfig).then(res => {
//     config.success(res)
//   }).catch(err => {
//     config.failure(err)
//   })
// }

// export function request(config){
//   return new Promise((resolve,reject)=>{
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//       })

//       instance(config).then(res => {
//         resolve(res)
//       }).catch(err => {
//         reject(err)
//       })
//   })
// }

export function request(config) {
  //1、创建实例
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5" ,
    timeout: 5000
  })

  // //2、拦截器（请求拦截，响应拦截)
  // instance.interceptors.request.use(config => {
  //   //作用：
  //     //config中的一些信息不服务服务器的要求，进行修改
  //     //每次请求都希望在界面中显示一个请求的图标
  //     //某些网路请求中，必须携带某些信息
  //   // console.log(config)
  //   return config
  // }, err => {
  //   // console.log(er)
  // })


  //3、发出真正的网络请求本身返回的就是个Promise
  return instance(config)
}
