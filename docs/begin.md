---
title: 开始使用
---



#### 第一步 clone项目
```base
git clone xxxx.git
```

> clone到本地后删除.git文件或者修改git的地址为自己项目的地址

#### 第二步 写组件
在`components`目录下写自己的组件
> 目前组件文档名称只能是`index.md`,如果有其他需求，需要修改`_theme`下得解析规则

#### 第三步 发布组件
```base
npm run build
```
> 默认会执行`test`脚本，搜索组件目录下得所有测试脚本执行，只有测试脚本都测试通过的情况下才会继续执行发布流程

#### 第四部 发布组件网站

```base
npm run site
```
编译完毕后把`_site`目录下的文件部署到你服务器上




是不是简单