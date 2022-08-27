
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












最后，优化我们项目的README页面

## 添加Tag展示

在README中,我们一般会有一些快速展示项目的标签，比如有版本号，下载量，项目大小，覆盖率，项目依赖等，这里我们使用 [Shields.io](https://shields.io/category/social) 来快速生成这些标签

当我们选中要创建的标签的时候，然后输入仓库名称和地址后，选择我们想要生成标签的样式，点击下面的url然后创建就可以了,这里我们直接复制一个使用在MarkDown页面里面URL

![GitHub package.json version](https://img.shields.io/github/package-json/v/DanielLeefu/DeploymentGuide)
![GitHub Repo stars](https://img.shields.io/github/stars/DanielLeefu/DeploymentGuide?style=flat-square)
![GitHub repo file count](https://img.shields.io/github/directory-file-count/DanielLeefu/DeploymentGuide)

