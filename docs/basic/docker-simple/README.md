# 云服务器

## 本地 docker 安装

- [docker](https://www.docker.com/get-started/)
- [docker.hub](https://hub.docker.com/signup)

## 前提

我们可以使用腾讯云或者阿里云购买一个云服务器，然后对我们的项目进行部署

- [腾讯云购买地址]()
- [阿里云购买地址]()

本示例使用的服务器镜像为 `CentOS 8.2` 版本。然后在服务器中安装 docker

**安装 docker**

```sh
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

启动 docker,并且设置开机自启动

```sh
sudo systemctl enable docker
sudo systemctl start docker
```

测试 docker 是否安装成功

```sh
docker run --rm hello-world
```

如果输出 Hello from Docker!，则表示 docker 安装成功， 这时候，我们使用 docker images 查看镜像，或者使用其他 docker 命令的时候，可能会出现报错。因为 docker 命令只有 root 用户和 docker 用户才可以使用 Unix socket 与 Docker 引擎通信，一般我们不使用 root 用户，所以将当前用户加入到 docker 用户组中

```sh
sudo groupadd docker   #建立 docker 组
sudo usermod -aG docker $USER  #将当前用户加入docker组
```

**安装 docker-compose**

使用二进制包方式安装

```sh
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

赋予执行权限

```sh
sudo chmod +x /usr/local/bin/docker-compose
```

卸载 直接删除二进制文件

```sh
sudo rm /usr/local/bin/docker-compose
```

使用 docker-compose -v 查看是否安装成功