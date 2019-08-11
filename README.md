<<<<<<< HEAD
# coisini
微信小程序-窗帘商城
=======
# wxapp-mi-mall
仿小米商城小程序
### 主要特性

- 小程序发布以来，凭借无需安装、用完即走、触手可及、无需注册、无需登录、以及社交裂变等多个优势，一路高歌，变得愈来愈火爆，它革命性的降低了移动应用的开发成本，也正好迎合了用户的使用应用的习惯。小程序魅力如此之大，作为一枚程序猿，我想怎么不自己做一个呢？话不多说，咱撸起袖子就是干
#喜欢的给个star吧。感谢感谢

# 本案例可以作为新手练习vue-router案例

![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)

**目录 (Table of Contents)**

# 效果截图
#### 功能的展示与实现
![](http://ofmyguueq.bkt.clouddn.com/%E6%95%88%E6%9E%9C%E6%88%AA%E5%9B%BE.gif)
## 想学习交流小程序的童鞋可以关注H5开发社区

> 扫码关注送前端学习教程
![](http://ofmyguueq.bkt.clouddn.com/360%E6%88%AA%E5%9B%BE20180615014555487.jpg)

#### 关注有惊喜哦

后期还会为大家送上更多的前端学习资料。

    <?php
        echo "Hello world!";
    ?>
#### 项目目录结构
├── assets                   用到的一些图标文件
├── lib
    ├── weui.wxss            引用了weui
├── modules                    
    ├── showDetail.js        跳转展示商品详情的公共js文件  
    ├── showcDetail.js      
├── pages                    项目的各个页面
    ├── index                商城首页
    ├── categories           商品分类页
    ├── discovery            发现页
    ├── channel              商品频道目录
        ├── phone            手机频道
        ├── tv               电视频道
        ├── computer         电脑频道
    ├── cart                 购物车
    ├── mine                 个人信息页
    ├── goods                商品详情页
    ├── selectGoods          商品属性选择页
    ├── search               商品搜索页
    ├── addr                 收货地址页
├── template                 使用到的模版文件               
    ├── slide                轮播图模版  
    ├── goods_list           商品展示模版
    ├── cover                商品展示模版
├── util                     使用到的工具类               
    ├── mock.js              项目中使用到的一些数据  
├── app.js                   项目逻辑
├── app.wxss                 项目公共样式表
└── app.json                 项目公共设置

###### 写到最后
**码字不易，如果大家喜欢的话，就Star一下吧,项目地址，我会不定时更新的哦。 项目还存在很多缺陷，希望大家提出宝贵建议**
点赞给stard的同时还可以关注H5开发社区送学习教程
![](http://ofmyguueq.bkt.clouddn.com/360%E6%88%AA%E5%9B%BE20180615014555487.jpg)
### End
## 踩坑记
- 注意`wx.navigateTo`和`wx.switchTab`的区别
- 在做分类页时，用到了`scroll-view`，但是随着页面内容的增多，滚动页面时，左边导航栏和右边分类内容都会滚动，这时设置整个页面和最外层`view`的样式为：
```css
page,.container{
    height:100vh;
}
```
即设置整个页面为一屏的高度。
- 内容超过一屏时，`scroll-view`产生滚动条，嗯，这严重影响美观，通过以下样式隐藏：
```css
::-webkit-scrollbar{  
  height: 0;
  width: 0;
  color: transparent;
}
```
- `scroll-view`的值应为它的子元素的`id`值，但是这个id**不能以数字开头**，否则会报错：`id属性格式错误，如不能包含数字`（还是要仔细看看开发手册::>_<::）
>>>>>>> Initial Commit
