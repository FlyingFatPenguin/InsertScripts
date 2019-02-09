const fs = require('fs')

// 请求为 localhost/name/?pwd=script
// 就返回 www/script 目录下所有文件名
// req 中的 pwd=要访问的路径
// 根路径为 www
// 默认访问路径 www/files
module.exports = function(req, res, next){
    var url
    if(req.query['pwd']){
        url = req.query['pwd']
    }else{
        url = 'files'
    }

    fs.readdir('./www/' + url, function(err,files){
        if(err){
            res.status(400).send("Dir not found.")
        }
        console.log(files)
        res.send(files)
    })
}