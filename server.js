const express = require('express')
const expressStatic = require('express-static')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const multer = require('multer')
const ejs = require('ejs')
const jade = require('jade')
const fs = require('fs')
const getFileName = require('./getFileName')
const pathLib = require('path')
// const uploadImg = require('./uploadImg')


// 启动服务
var server = express()
server.listen(80)

// 1 解析 cookie
server.use(cookieParser('5f863524625fffafd344e7779ea07ebd'))

// 2 使用 session
// 生成密钥 keyList
var keyList = []
for (var i = 0; i < 100000; i++) {
    // 使用随机生成的小数作为密钥
    keyList.push('keys_' + Math.random())
}

server.use(cookieSession({
    nmae: 'sess_id', // 名称
    keys: keyList, // 密钥
    maxAge: 20 * 3600 * 1000 // 设置 session 持续时间为 20 分钟
}))

// 3 post 数据
server.use(bodyParser.urlencoded({
    limit:'50mb',
    extended: false // 禁用扩展模式
}))

// 用户请求
server.use('/', function (req, res, next) {
    console.log(req.query, req.body, req.cookies, req.session)
    console.log(req.url)
    if (req.url == '/')
        req.url = '/index.html'

    next()
})

var objMulter = multer({dest:'./upload'})
server.use(objMulter.any())

server.use('/upload', function(req, res){
    // console.log(req.body)
    console.log(req.files)
    var path = req.files[0].path
    var originalname = req.files[0].originalname
    fs.rename(path, path + pathLib.parse(originalname).ext, function(err){
        if(err){
            console.log(err)
            res.send('上传失败')
        }else{
            console.log('接收文件'+req.files.originalname)
            res.send('成功上传')
        }
    })
    // next()
})

server.use('/name',getFileName)
// server.use('/uploadImg', uploadImg)

// 4 static 数据
server.use(expressStatic('./www')) // 文件目录