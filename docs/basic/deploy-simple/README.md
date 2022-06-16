
# 部署单页面

我们来通过部署一个自己的博客页面来进行实践, 使用[vuepress]() 来生成页面

## 初始化

先来对项目进行初始化，创建一个博客页面仓库，deploy_blog, 
```
npm init -y
npm install -D vuepress
```
在package.json 中添加dev和build的scripts

```
"dev": "vuepress dev docs",
"build": "vuepress build docs"

```

根据vuepress规范来创建文件夹，创建一个docs文件夹，然后创建.vuepress文件夹，在.vuepress 里面创建config.js,来写入配置文件

lallal