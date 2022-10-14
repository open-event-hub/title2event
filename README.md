# Title2Event Homepage

The website is hosted on Github. The url is <https://title2event.github.io/>.

# 项目依赖

* hugo

# 使用说明

## 安装hugo

* https://gohugo.io/getting-started/installing/

## 本项目hugo零基础跑法，这一节后面删掉
0. 安装hugo
1. clone本项目到本地
2. 进入目录
3. `hugo server` 可以本地查看效果，方便调试
4. 按照自己到需求修改若干页面和信息，第一次跑可能需要熟悉一下，相对还是比较简单的，很容易上手
5. `hugo -d docs` 将网页生成到docs目录，#因为github page是在docs路径上deploy的
6. `git add、commit、push`，将修改push到master
7. 等待自动部署，可以在github页面搜索Actions进去看具体部署情况，一分钟多就ok了
8. 查看效果 https://title2event.github.io/

## 修改leaderboard

1. 更改`data/leaderboard.json`
2. 运行`hugo server`本地查看效果
3. 运行`hugo`生成静态文件
4. 运行`git add .`添加修改
5. 运行`git commit -m 'xxxx'`保存修改
6. 运行`git push`将代码提交到远程仓库
7. 在Gitee Pages更新代码，帮助文档见https://gitee.com/help/articles/4136#article-header0
