# 使用问题
治好你使用USF时的疑难杂症

## 如何获取USF
- [MineBBS官方帖下载](https://www.minebbs.com/resources/usf.5475/history)
- [官方下载站](https://usfdown.zuyst.top/)

## 如何反馈bug
1. __若无法使用USF__   
您应该检查您的Minecraft版本与usf版本是否匹配，详见[兼容表](edition.html)
然后检查是否正确安装USF  

2. __检查Bug是否修复__  
如果版本兼容，您应该查看[更新日志](change-log.html)。每个版本更新时都会修复大量bug。如果该bug已在新版本中被修复，您应该更新到最新版本。如果没有提及，您可以反馈该bug。  

3. __其它情况，需要反馈bug__  

* __进入游戏打开如下选项__   
![image](upload/202402/20241220001.jpg)  
* 重复出现bug的操作  
* 将出现的报错截图发到群里，最好[在Github创建issuse](https://github.com/USFrameTeam/Unknown-Server-Framework/issuses/new)   

## USF在服务端不加载

1. 中文文件夹  
- 问题描述:部分情况下(例如LinuxWine环境)，当behavior_packs文件夹内USF文件夹名字带有中文，USF可能不加载  
- 解决办法:删除中文  

2. USF没有正常添加
- 问题描述:当按照文档内教程或者Minecraft机制原因(部分版本添加模组在MC文件而非存档文件)时，USF没有正常添加  
- 解决方法:检查behavior_packs.json，查看USF UUID是否正确，如果没有behavior_packs.json，需要创建一个并按照json格式填写USF的UUID  
如果有而且USF的UUID正确，检查behavior_packs文件夹内是否有USF文件，如果没有需要添加

## 服务器不是OP
- 我在存档里获取了最高op，存档拷贝到服务器后，却不显示op
- 原因：BE版游戏账户数据在本地是局域网账户，当使用xbox认证后进入服务器，数据库并没有你的信息，所以本质上服务器已经有最高op了，但你却不是。
- 获取 __服务器__ op：`op <你的Xbox ID>`      
- __进入服务器__，在服务器内输入`/function reset`  
- 在 __30秒内__ 输入`/reload`   
- 然后重新输入`/function get_owner`

## 无法设置领地或在领地内还可以挖东西
- __无法设置领地__：检查插件设置-插件命令设置是否开启+land命令  
领地设置内计分板输入是否正确，检查计分板名是否重复
- __领地内可以挖东西__：确认领地设置，圈地为三维