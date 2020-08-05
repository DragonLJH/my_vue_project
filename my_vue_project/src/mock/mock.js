// 引入mockjs
const Mock = require('mockjs')

//登录账号
var loginIfo = { user: "admit", password: "admit" }
// 拦截ajax请求，配置mock的数据
Mock.mock('/dargon/login', 'get', loginIfo)


// 拦截ajax请求，配置mock的数据
Mock.mock('/dargon/pagehomeT', 'get', { 'list|100': [{ 'Pname': '@name', 'Pprice|10-100': 0, "img": "@image(60x60)", "Pself": "@String" }] })
