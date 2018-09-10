# 响应式web设计html5和css3实战



# 第二章 媒体查询



css3 媒体查询可以让我们针对特定的设备能力或条件为网页应用特定的css样式

媒体查询包括媒体类型和零个或多个检测媒体特性的表达式

使用媒体查询，可以不必修改内容本身，而让网页适配不同的设备

```html
@media screen and (min-width:320px){

    background-color:yellow;
    
}

```



- 在link 标签中使用




## meta 标签

name = "viewport"   表示针对窗口

conetent =  "initial-scale =2.0"   内容放大为实际大小的两倍

user-scalable=no  禁止用户缩放



# 第三章 弹性布局与响应式图片



## 响应式布局 flex


## 响应式图片

```html
<img src="small.jpg" srcset=" medium.jpg 1.5px , large.jpg 2x">
```