/**
 * create by Lias 2018/8/19
 */
import Vue from 'vue'
import * as serverConfig from '../config/config'
import * as Constants from '../const/constants'

export {httpPost, httpGet}
/**
 * 发起HTTP POST请求
 * @param system 请求系统
 * @param serviceCode 服务编码
 * @param param 请求参数
 * @returns {Promise}
 */
function httpPost (system, serviceCode, param = {}) {
  let url = getUrl(system, serviceCode)
//   param['header'] = getHeader()
  return new Promise((resolve, reject) => {
    Vue.http.post(url, param).then((response) => {
      doResponse(resolve, reject, response)
    }, (response) => {
      console.log(response)
      reject('网络错误，请检查您的网络配置！')
    })
  })
}

/**
 * 发起HTTP GET请求
 * @param system 请求系统
 * @param serviceCode 服务编码
 * @param param 请求参数
 * @returns {Promise}
 */
function httpGet (system, serviceCode, param = {}) {
  let url = getUrl(system, serviceCode)
//   param['header'] = getHeader()
  return new Promise((resolve, reject) => {
    Vue.http.get(url, JSON.stringify(param)).then((response) => {
      doResponse(resolve, reject, response)
    }, (response) => {
      console.log(response)
      reject('网络错误，请检查您的网络配置！')
    })
  })
}

/**
 * 获取请求全路径
 * @param system
 * @param serviceCode
 * @returns {*}
 */
function getUrl (system, serviceCode) {
  return serverConfig.server + serviceCode
}

/**
 * 响应报文处理
 * @param resolve
 * @param reject
 * @param response
 */
function doResponse (resolve, reject, response) {
  let data = response.data
  console.log(response.data)
  if (data == null || data === '') {
    reject('服务响应异常')
    return
  }
  if (typeof data === 'string') {
    data = JSON.parse(data)
  }
  if (data.header.code === Constants.SUCCESS_CODE) {
    resolve(data)
  } else {
    reject(data.header.msg)
  }
}
