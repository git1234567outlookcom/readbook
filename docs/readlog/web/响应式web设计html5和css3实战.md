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


> 像素密度 PPI
PPI pixel per inch  像素每英寸



> 设备像素  device pixel  physical pixel
DPI dots per inch  每英寸点数


> 设备像素比 device pixel ratio DPR
设备像素过小，系统分辨率下每个像素会等于多个设备像素


一个css像素应该是与一个设备像素大小相等

在高清设备或用户缩放的过程中，一个css像素也可以大于或等于多个设备像素


> 视口 可视区域的大小 layout viewport viewport


```css

<meta name="viewport" content='width=device-width, initial-scale=1.0' />

```

# 第三章 弹性布局与响应式图片

## 响应式布局 flex

## 响应式图片

```html
<img src="small.jpg" srcset=" medium.jpg 1.5px , large.jpg 2x">
```

```css
/*换行*/
word-wrap:break-word;

/*文本截断*/
text-overflow:ellipsis;
white-space:no-wrap;


```

水平图片滚动

```css


width:100%；
white-space:nowrap;
overflow-x:auto;
overflow-y:hidden;
-webkit-overflow-scrolling:touch;
-ms-overflow-style:none;



.lastitem::-webkit-scrollbar{
    display: none;
}
```

匹配列表中的第一项

```css
div.last-child{
    
}
```


修改指定位置的样式
``` css
div:nth-child(odd)
```

css 自定义属性和变量

``` css

:root{
    -- MainFont:sans-serif;
}

.test{
    font-family:var(-- MainFont);
}
```

css计算


``` css
.test{
    width:calc(50% - 10px)
}

```


svg(Scalable Vector Graphics) 可伸缩矢量图

使用xml 来描述




- css3 
    - 过渡 transition
    - 变形 transform
    - 动画 animation



- transtion-property  过渡的css属性的名字
- transtion-duation 过渡时长
- transtion-timing-function 过渡的速度
- transtion-delay 过渡开始前的延迟时间


css 2d 变形
- transform
    - scale:放大、缩小
    - translate:在屏幕上移动元素
    - rotate:旋转元素
    - skew:沿x和y轴对元素进行斜切
    - matrix:以像素精度来控制变形效果

``` css
.test:hover{
    transform:scale(1.4);
   
}
```

 transform-style:preserve-3d;  // 子元素也保持3d效果


 
 
 
 
> 图片自适应

```css
< img sizes= "(max-width:640px) 100vm, (max-width:960px) 50vm  calc(100vm /3 )"
 srcset = "large.jpg 1024w,medium.jpg 640w, small.jpg 320w">

```