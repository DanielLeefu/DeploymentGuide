
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




## git pages

上面我们学习了git Actions 的使用,这里我们来简单了解一下[git pages](https://pages.github.com/)


## 介绍

github pages 就是为你的项目提供一个访问站点，然后指向你的仓库，仓库更新站点网站自动更新。他可以单独部署静态网页(不涉及服务端)或者个人博客。


## 使用

这里我们配合github actions 来将我们的静态页面部署到github pages上
- 首先我们将项目推送到github中，
- 然后配置我们的密钥，打开我们git个人设置，settings页面中的  Developer settings。然后点击Personal access tokens创建一个新的token,保存这个token的值后

- 打开当前项目页面，点击项目的settings, 添加当前token该项目使用的权限，用于github actions 使用

<img src="../../assets/git actions.png" />

接下来就是使用我们之前学到的github actions了

>注意: github pages 部署后的地址是 `https://<username>.github.io/`
>
>使用vuepress 如果准备发布到 `https://<USERNAME>.github.io/`, 那么.vuepress 下面的`config.js`中的 `base` 要设置为 "/" 。
>
>如果准备发布到 `https://<USERNAME>.github.io/<REPO>/` ，也就是说你的仓库地址是`https://github.com/<USERNAME>/<REPO>` ，则将 base 设置为 `/<REPO>/`。

在项目下创建.github文件夹，然后创建workflows文件夹，在里面新建一个deploy.yml文件 

将上面文件全部保存后，整个仓库推送到github后，等待workflow 执行完成后，就可以访问页面了。

后面每次修改源代码push的时候，都会执行actions，然后重新打包发布到github pages，实现自动化构建部署。

现在我们已经完成了从零创建一个静态资源项目，并且部署到github pages 上面，让我们无需服务器就可以访问，并且利用github actions 添加了CI, 实现持续集成，自动部署


最后，我们再来优化一下项目里面的README页面吧

## 添加Tag展示

在README中,我们一般会有一些快速展示项目的标签，比如有版本号，下载量，项目大小，覆盖率，项目依赖等，这里我们使用 [Shields.io](https://shields.io/category/social) 来快速生成这些标签

当我们选中要创建的标签的时候，然后输入仓库名称和地址后，选择我们想要生成标签的样式，点击下面的url然后创建就可以了,这里我们直接复制一个使用在MarkDown页面里面URL

![GitHub package.json version](https://img.shields.io/github/package-json/v/DanielLeefu/DeploymentGuide)
![GitHub Repo stars](https://img.shields.io/github/stars/DanielLeefu/DeploymentGuide?style=flat-square)
![GitHub repo file count](https://img.shields.io/github/directory-file-count/DanielLeefu/DeploymentGuide)

