# 笔记

## 加载 js 脚本
使用 $.get(url,function(){})
当 url = a.js 时，就可以自动加载 a.js 脚本

但是有一个问题，就时这样加载的脚本会自动被执行。
可以用这个方法，实现脚本的动态加载。

但是我们现在只是需要获取脚本中的文本信息，
而不希望执行该脚本。

## 注意事项
在使用 js 插入脚本的时候，如果直接加入，一定要添加分号。