/*
*server contact
*
*
**/
//这里在传参的时候把参数转成后台能识别的数据结构
import QS from 'qs'
import storage from 'good-storage'
import * as types from '@/store/mutation-types'

const USER_INFO = '__userinfo__'
const MESSAGE_NUM = '__messagenum__'
const SHOP_INFO = '__SHOP_INFO__'
const SHOP_ID = '__SHOP_ID__'

//设备识别码
const uuid = require('uuid/v4')

export const setCustomUUID = () => {

  let customerUUID = ''

  if(window.localStorage.customerUUID){

    customerUUID = window.localStorage.getItem('customerUUID').replace(/\"/g, "")

  }else{
    customerUUID = uuid()

    window.localStorage.setItem('customerUUID', JSON.stringify(customerUUID).replace(/\"/g, ""))

  }
  return customerUUID
}

function loginOut(_) {
  _.$store.commit(types.SET_USER, {})
  _.$store.commit(types.SET_SHOP, {})
  _.$store.commit(types.SET_SHOPID, {})
  storage.remove(USER_INFO)
  storage.remove(SHOP_INFO)
  storage.remove(SHOP_ID)
  storage.remove(MESSAGE_NUM)
}

//通用axios请求封装--get方法
export const mkAxiosGet = ( _, _url, _data, _token, callback) => {
  let _dataStr = ''
  if(JSON.stringify(_data) != '{}'){
    _dataStr = '?' + QS.stringify(_data)
  }
  let token = _token || ''
  _.$http({
    method: 'GET',
    baseURL: '/api',
    url: _url + _dataStr,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'DEVICEID': setCustomUUID(),
      'TOKEN': token
    }
  })
  .then((res) => {
    if(res.data.errno === 100004) {
      // window.localStorage.removeItem('userInfo')
      loginOut(_)
      _.$toast('请登录后操作')
      setTimeout(function() {
        _.$router.push({path: '/enter/login'})
      }, 2500)
    }else{
      callback(res)
    }
  })
  .catch((err) => {
    if(err.response){
      alert('服务器错误：' + err.response.data)
    }else{
      console.log('Error:', err.message)
    }
    console.log(err.config)
  })
}

//通用axios请求封装--方法用传参形式传入
export const mkAxiosMethods = ( _, _method, _url, _data, _token, callback) => {
  let token = _token || ''
  _.$http({
    method: _method,
    baseURL: '/api',
    url: _url,
    data: QS.stringify(_data),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'DEVICEID': setCustomUUID(),
      'TOKEN': token
    }
  })
  .then((res) => {
    if(res.data.errno === 100004) {
      // window.localStorage.removeItem('userInfo')
      loginOut(_)
      _.$toast('请登录后操作，即将退出登录')
      setTimeout(function() {
        _.$router.push({path: '/enter/login'})
      }, 2500)
    }else{
      callback(res)
    }
  })
  .catch((err) => {
    if(err.response){
      alert('服务器错误：' + err.response.data)
    }else{
      console.log('Error:', err.message)
    }
    console.log(err.config)
  })
}
