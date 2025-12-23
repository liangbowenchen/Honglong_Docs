# Honglong Docs
<div align="center">
	<img src="./docs/public/honglong.png" style="zoom: 15%;" />
    <p>
		<img src="https://img.shields.io/badge/version-beta-blue"/>
		<img src="https://img.shields.io/github/stars/liangbowenchen/Honglong_Docs?style=social"/>
        <img src="https://gitee.com/clbw2005/Honglong_Docs/badge/star.svg"/>
    </p>
    <h5><font face="consolas">西南石油大学RoboMaster泓龙战队文档站</font></h5>

[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Documentation](https://img.shields.io/badge/docs-online-brightgreen)](https://honglong.org.cn/)
[![CI/CD](https://github.com/liangbowenchen/Honglong_Docs/actions/workflows/deploy.yml/badge.svg)](https://github.com/liangbowenchen/Honglong_Docs/actions/workflows/deploy.yml)
</div>

## 编写指南
 
### 组内文档结构
``` plaintext 
ElecCtrl/                   #技术组文件夹
├── train/                  #培训文档存放路径
│   ├── 00_name/            #培训章节0
│   ├── 01_name/            #培训章节1
│   ├── 02_name/
│   |   ├── index.md        #章节介绍
|   |   └── 文章1.md         #培训文档1 
|   |   └── 文章2.md    
|   └── index.md            #培训总介绍
├── news/
│   ├── index.md            #消息发布首页
│   └── 消息1.md             #具体消息
├── image/                  #文档图片存放路径
└── index.md                #技术组介绍
```
### 编写步骤
#### 下载git,markdown推荐编辑器 typeora win免费版可于电控组NAS下载
``` bash
sudo apt install git # ubuntu中安装git，windows请去官网或下载NAS里的安装包
``` 
#### 克隆仓库
``` bash
git clone https://github.com/liangbowenchen/Honglong_Docs.git
```
#### 配置git 
``` bash
git config --global user.name  "your name"
git config --global user.email "your email"
```
#### 修改文档并提交修改
``` bash
git add .
git commit -m "提交信息"
```
#### 推送到远程仓库
``` bash
git push 
```
#### 等待审核并自动部署到网站
