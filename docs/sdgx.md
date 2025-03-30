# 手动适配USF插件
* 当mc更新新新版本时，usf官方还未进行适配，你可以选择尝试自己更新usf插件
- 该教程适用于有一定开发能力的人

## 准备工作
你必须先有 
* 1.mc
* 2.usf插件
* 3.一台电脑（手机也可以）

## 查看@minecraft/server 版本
* 将你手里面没有适配新版本的usf插件导入mc存档
* 进入设置-创建者 找到“内容日志设置”把他打开
![image](upload/202402/20241220001.jpg)
* 打开日志功能后就进入导入好的mc存档，然后退出存档
* 再一次前往进入设置-创建者-内容日志设置 点击“内容日志历史”
* 如图得到下图
![image](upload/202402/20241220002.png)
![image](upload/202402/20241220005.png)
在图片中间你会发现@minecaft/server - x.x.x
在图片最下面圈起来的就是@minecraft/server版本，记住这版本号

## 修改@minecraft/server api
将usf插件（xxx.mcpack）解压你会得到以下文件
![image](upload/202402/20241220003.jpg)
* 把manifest.json和manifestR.json中的 @minecraft/server 版本更改成上面你程序到的版本号
* 保存压缩导入mc就可以所有usf插件了
![image](upload/202402/20241220004.png)
