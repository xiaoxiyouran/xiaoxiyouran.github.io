# xiaoxiyouran.github.io 的个人主页



## 背景

这里是小夕的个人主页，和一些设计说明。 



## 访问

1： 通过 github 域名访问：[https://xiaoxiyouran.github.io](https://xiaoxiyouran.github.io), 在 仓库的 `setings` 中可以看到。 

2:   通过腾讯云域名访问:  [https://xiaoxiyouran.xyz](https://xiaoxiyouran.xyz)


## 主要包含的个人大的主页板块
尽量做到一目了然，避免太过分散。 每个主题下，可以包含细分主题。 


1： 主页个人导航
2： 简历 
        - 个人介绍
        - 所获成就
        
4： 博客 + GitHub 
5： 最近的书单 + 准备看的技术分类； 
6： 生活广场： 最喜欢的歌单； 电影； 



## git 提交事项
默认在 **master** 分支上修改即可。 

1： 要提交到远程的 master 分支

    # 如果 在 gh-pages 修改的，就将本地的 gh-pages 覆盖掉远程的 maser 
    $ git push origin gh-pages:master -f



2： 这个是之前的分支提交： 

```sh
1- 在GitHub上建立好文件夹
2- git checkout --orphan gh-pages # 本地切换到gh-pages 分支
3- git add .
4- git commit -m "xx"
5- git remote add origin https://github.com/xiaoxiyouran/blogger.git # 添加终端
6-  git push origin gh-pages # 推送到终端的当前分支

```



3： ==**<u>*个人主页现在需要用 master 分支提交*</u>**==

```sh
  1- 在GitHub上建立好文件夹
  echo “xiaoxiyouran.xyz”   # 注意，这里不能加头 www. , 否则会解析不出来
  2- git checkout —orphan master# 个人主页现在需要用 master 分支提交
  3- git add .
  4-git commit -m “update today"
  5- git remote add origin https://github.com/xiaoxiyouran/blogger.git # 添加终端
  6-  git push origin master # 推送到终端的当前分支

```





## 更新日志



| date     | content  |
| -------- | -------- |
| 20201121 | 仓库更新 |
|          |          |
|          |          |

## 开发工具
1： 采用 websotrm 开发。 




## 博客参考
1： 三分钟搭建: https://zhuanlan.zhihu.com/p/28321740
2： hexo 搭建更精美的博客图: https://zhuanlan.zhihu.com/p/35668237


