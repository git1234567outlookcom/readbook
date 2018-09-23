# JavaScript编程全解

# 概述

dom编程就是浏览器和用户之间的接口

dom对客户端js来说，仅仅是一个宿主对象


- 客户端
    - dom + 内置宿主对象
- 服务器端
    - 内置宿主对象
- 浏览器扩展
    - 宿主对象
    
- js核心语言内置对象


不同的运行环境，有这不同的内置宿主对象

扩展语言是在内建对象的应用程序（就是宿主环境）中运行的程序

宿主应用程序会在这时收到一些运行时的上下文信息


js会以全局对象作为根节点的对象树的形式

启动时，js从宿主环境获取的对象树就被成为宿主对象

全局对象在程序启动前就已经存在了

客户端js的全局对象被称作windoss对象
 

## js特点

- 解释型语言
- 基于原型的面向对象
- 动态语言



js对象的属性值可以由函数指定

js具备成为原型链的构造，类似于继承

prototype 对象的属性和实例属性，都是以对象实例的形式来进行访问的

例： str.length   str.trim()

prototype 对象的属性和实例属性之间的不同点在于不是否进行了继承



- 数据类型
    - 字符串
    - 数值
    - 布尔
    - null
    - undefinded
    - object 

类型就是行为方式上的共性，每个对象都具有共同的行为方式，所以可以使用原型对象

这样的编程风格称为基于原型的风格



基本数据类型变量：直接保存有数值等类型的数据的值

引用类型变量：则保存有对象的引用


内建数据类型 build in type分为五种基本数据类型和object


--- 


new String 实际上用的是构造函数 

字符串的内容是不可变的

数字在53位以内


--- 


new Number

参数无法转换为数值类型，就会返回的NaN


NaN 进行任何运算结果都是NaN


--- 

布尔型，只能够取真true和false


---

null型 只能够取null这一个值


undefined 型 只能够取undefined 这一个值  


是一个预定义的全局变量

null 是一种字面量而undefined是一个变量名

要使一个变量的值为null，必须将null以字面量的形式赋值给该变量

undefined值最多只能算是某个没有经过显示赋值的变量的初始值，没有定义或没有初始化

```js
var x  ;
console.log(typeof x);
console.log(typeof xx);
```

- 未初始化的变量的值
- 不存在的属性的值
- 在没有传入实参而调用函数时，该函数内相应参数的值
- 没有return 语句或是return 语句中不含表达式的函数的返回值
- 对void运算符求值的结果（通常使用 void 0 来获取一个undefined值）


--- 



object 类型

除了五种基本类型，其他说有类型都是object类型


---

## 数据类型转换


- 字符串转换为数值

Number ：如果有非数值则返回NaN
parseInt  parseFloat ： 将会忽略数字以外的其他字符

- 数值转字符串

- 转换为布尔

0 、 NaN 、 null 、 undefined 、 空字符串值




# 语句、表达式和运算符


- 标识符

必须是除保留字以外

除true 、 false 、 null 以外

以Unicode 非空字符开始

单词长度没有限制

区分大小写

下划线开始的会被作为内部标示符



- for in 

枚举的顺序：是以字面量书写的顺序来进行枚举的

无法被枚举的属性：一些属性树不能够被枚举的

由原型继承而来的属性：可以枚举由原型继承而来的属性

```js
 var obj = {x:1,y:2,z:3};
 
 for (var i in obj){
     console.log(i)
 } 
```

- for each in 

- break 

- continue

- return 


```js
try {
  console.log('this is try ')
} catch (e) {
  console.log('打印错误')
} finally {
  console.log('始终都会执行')
}
```

---


- 全等运算符
    - x与y数据类型不相符，则结果为flase
    - 都会undefined值或者两者都是null值情况，结果为真
    - 两者都是数值，数值相等为true
    - 都为字符串，内容一致为真
    - 布尔值，一致为true
    - 对象引用，引用的是同一个对象则结果为true，否则结果为flase
    
- == 会进行隐式数据转换
    - 数据类型相同，与全等运算结果想过相同
    - 数据类型不相同时：
        - null == undefined    true
        - 当类型不一致时会先进行隐式转换，在进行比较
        
        
---        
        

in 检验属性是否存在的运算符

instanceof  用于类型判断的运算符

typeof 用于数据类型判定的单目运算符

new 用于生成对象

delete 用于删除属性的单目运算符

void 是undefined类型的单目运算符


.  [] 访问属性的运算符

() 来实现函数额调用




# 第五章 变量与对象

变量又分为基本类型变量和引用类型的变量

引用类型：用于指出对象的位置的标记

局部变量是在调用函数时被隐式生成的对象的属性

被隐式生成的对象称为call对象




## 构造函数与 new 表达式

- 构造函数本身和普通的函数声明形式相同
- 构造函数通过new表达式来调用
- 调用构造函数的 new 表达式的值是被新生成的对象的引用
- 通过new表达式调用的构造函数内的this引用  引用的被新生成的对象、


---

new 表达式在求值时的操作

首先生成一个不具有特别的操作对象

之后通过new表达式调用指定的函数

构造函数内的this引用  引用了新生成的对象

构造函数会在最后隐式的执行 return this操作



--- 


## 属性的访问

.  或者  [] 

当指定的是不存在的属性名，则会新增该属性


--- 

实现不可变对象的方式

- 将属性隐藏，不提供变更擦欧总
- 灵活使用 writable、configurable、setter、getter


seal 的作用是将属性的configurable属性置为false

freeze是将writable属性置为false



## 方法


this  引用可以在最外层代码使用，

this引用  引用的是一个对象

在最外层的代码用，this引用的是全局对象

在函数内
- 构造函数调用，this  所生成的对象
- 方法调用， this  接受方对象
- apply或者是call调用，this  apply或者call的参数指定的对象
- 其他方式的调用， this  全局对象





## 原型继承


原型链

- 所有的函数对象都具有名为prototype的属性
- 所有对象都含有一个隐藏的链接，指向在对象生成过程中所使用的构造函数（function对象）的prototype对象

对象属性读取顺序

- 对象自身的属性
- 隐式链接所引用的对象（构造函数的prototype对象）的属性
- 第二项中的对象的隐式链接所引用的对象的属性
- 反复按第三项的规则查找，直至全部查找完毕（终点是object.prototype对象）

本质就是对隐式链接的属性继承


如果修改原型上面的属性，已经生成的对象也会发生相应的变化




原型对象

对象的隐式链接_proto_属性 所引用的对象称为原型对象


# 第六章 函数与闭包

## 函数是一种对象

## 嵌套函数声明与闭包

闭包closure:是一种具状态的函数,相关的局部变量在函数调用结束之后将会继续存在

同一段代码生成具有不同状态的函数,这就是所谓的闭包

闭包指的是一种特殊的函数,这种函数会在被调用时保持当时的变量名查找的执行环境

闭包仅仅是保持了变量名查找的状态,并没有保持对象所有的状态

虽然保持了隐式生成的call对象,但无法保持call对象的属性引用的之前的对象状态

如果函数内有两个函数声明,这两者将会引用同一个call对象

- 前提条件是需要在函数声明的内部声明另一个函数,就是嵌套函数声明
- 调用函数时将会隐式的生成call对象,调用完成之后call对象将被销毁
- 通过闭包实现信息隐藏
- 利用函数作用域可以封装名称
- 闭包可以使名称在函数调用结束后依然存在

---

表达式闭包

可以省略 return 和{} 


## 回调函数设计模式

- 回调函数与控制反转

回调函数只是单纯的函数而不具有状态




如果把回调方改为对象,就需要使用bind,用于明确的指示出方法调用时的this引用

对于函数来说,调用了bind之后会返回一个新的函数,会执行与原函数相同的内容

此时的this引用是被指定为它的第一个参数的哪个对象

apply与call将会立即调用目标函数,bind则返回一个函数闭包






# 第七章 数据处理


## 数组

数组中不需要确保数组元素类型的一致性

数组是一种对象,可以通过new表达式调用Array的构造函数以生成数组

改写数组元素的方法,称为破坏性方法,效率高
- pop
- push
- reverse
- shift
- sort
- splice
- unshift


数组的赋值时代入的只是引用,实际上没有复制数据的元素

数组复制的方法:concat、slice 


元素删除:splice(位置,个数)

筛选:map 、 filter


---

内部实现

数组的实体是一个对象,实现并不是占用一段连续的内存空间



---

迭代器

一种对循环操作进行抽象化的功能

需要共一个有各种元素的集合中取出下一个所需的元素

---

生成器

生成器就像一个普通的函数

生成器与通常的函数的不同之处在于是否能在内存进行了yield调用


---

数组的内包

是以种通过生成器生成数组时的功能

和python的直接生成数组类似

json字符串可以同过eval函数的方式将json字符串转换为js对象

json2.js



## 日期处理


- epoch 保存于数据库中的值
- Date类  js代码的内部形式
- 字符串  
- 年月日等数值

## 正则

# 第八章 客户端js与html


网页显示过程中的处理流程

- 分析html
- 构造dom树
- 载入外部js及css
- 载入图像等外部资源
- js在分析后开始执行
- 全部完成


执行顺序
- script 标签 : 解析之后就会立即执行js,无法操作标签之后的dom元素
- DOMContentLoaded :完成html解析后发生的世间
- 读取外部js文件
- 动态载入 :js文件在下载过程中并不会阻断其他的操作
- onload


## window 对象


- Navigator:浏览器信息
- Location:当前显示url相关的一些信息
    - href
    - assign
    - replace
    - reload
- History
- Screen
- Document 


# 第九章 DOM



> DOM  文档对象模型


dom树中的一个个对象被称为节点

节点之间形成了一个树形结构


## 节点的选择

```js
    document.getElementById();
    document.getElementsByTagName()
```


getElementsByTagName 取得的对象是一个NodeList对象，是一个live对象，live对象始终具有dom树实体的引用

dom树做出的变更也会在live对象中得到体现


通过nodelist对象获取元素将花费相当的时间，先将其转换为array对象后再使用比较好





- XPath

- selector API


## 节点的创建和新增

```js
    document.createElement('div')
    document.createTextNode("")
    document.removeChild('')
```

## innerHTML / textContent

innerHTML 属性赋值之后， 浏览器会分析其内容，将分析结果设为该元素的子元素


textContent 可以取得包含子元素在内的纯文本部分


```js
    document.createDocumentFragment()  // 可以降低画面的重绘次数
```


# 第十章 事件


事件驱动程序设计


## 事件处理程序/事件侦听器的设定


对事件的处理方式被称为事件处理程序或事件侦听器

- 指定为html元素的属性 事件处理程序
- 指定为dom元素的属性  事件处理程序
- 通过EventTarget.addEventListener（） 进行值定   事件侦听器


```js

test.onclick = say

```




事件处理

- 捕获阶段
    事件将会从window对象开始向下遍历dom树来传播

- 目标阶段
    被事件目标注册的事件侦听器将会被执行
    
- 事件冒泡阶段
    时间的传播方式为从事件目标开始向上遍历dom树，知道windows对象结束
    
    


事件所有具有的元素
- type 
- target 
- currentTarget
- eventPhase
- eventPhase  事件传播到哪一个阶段
- timeStamp
- bubbles 事件处于冒泡状态
- cancelable 事件能够执行preventDefault方法



## 标准事件

- htmlEvent
- mouseEvent
- UIEvent  元素是否获取焦点
- MutationEvent  dom节点操作相关


## 自定义事件


通过createEvent方法来创建一个事件对象

通过目标节点的dispatch方法来分发这一事件对象








# 第十一章  客户端js实践



classList 
- contains() 判断是否含有class
- add（）
- remove
- toggle（）
 ```js

var d1 = document.getElementById();
d1.onclick = function() {
    this.classList.toggle()
    // class 名中含有该样式，有删除之后添加
}

```




## 更改style

## 直接更改样式表


pisition 位置
- static 
- fixed  将会以浏览器窗口为基准来确定元素的相对位置，页面滚动，元素位置不会发生改变
- absolute 相对位置进行定位，通常相对与body
- relative  相对定位，不会再设置top、left




位置
- screenX  屏幕坐标
- clientX  窗口坐标
- pageX   获取元素在文档中的位置



## JSONP

将script标签的src 属性指定为其他域中的js文件载入


iframe攻击

通过iframe来进行跨源通信


# 第十二章 库

jQuery 没用过，打算了解一下的时候，github竟然把它抽离了出来。又迟疑，现在项目功能还没有需要的地方，观望下


## 链式语法

大部分方法都会返回一个jquery对象

调试的时候麻烦



#  第十四章 web应用程序


## History API


## Application Cache

通过text/cache-manifest这一MIME Type来发布缓存清单文件

使用Apache，则将在缓存清单文件所在的同一个文件夹内创建一个名为.htaccess的文件并记录AddType目录信息

以设定支持特定扩展名的MIME Type





缓存清单文件

- 缓存清单文件的创建
    是一个记录了缓存规则的简单的文本文件
    
- 缓存的更新
    浏览器将首先引用被缓存的文件并显示，之后在后台自动确认缓存文件清单是否需要更新
    
- NETWORK 区段
    NETWORK： 之后的部分都将被作为NETWORK区段
    
- FLALLBACK区段
    指定某一资源无法被访问时的替代资源
    
    
## ApplicationCache API




# 第十五章  与桌面应用的协作


- Drag Drop API  一种能够在浏览器中实现DOM元素的拖动与释放的API


Data Transfer ：所有的拖动事件的事件对象中，都含有dataTransfer属性，用来接收数据
- 数据的接收
- 数据处理方式的指定
- 拖动图像的设定




## 基本的拖动与释放


- 拖动元素的设定 
```html
<div draggable="true" ></div>
```

- 拖动方的设定

需要在开始拖动的时候将数据设置于 dataTransfer中

调用setData方法来将拖动的数据设置给dataTransfer 

- 释放方的设定

getData是一种只能在drop事件处理程序中执行的方法


```js
// 释放区域
var drophere = document.getElementById('drophere')

// 拖拽到释放区域之上
drophere.ondragover  = function(event) { // 将drop事件取消
    for ( var i = 0 ; i < event.type[i] == 'text/plain';i ++) {
        if (event.dataTransfer.types[i] === 'text/plain'){ // 判断类型为text时候生效
            event.preventDefault();  // 用于取消浏览器的默认操作的方法
            break;
        } 
    }
}


// 拖拽元素被释放于释放区域中时
drophere.ondrop = function(event) {
    event.preventDefault(); // 取消浏览器默认操作
    
    // 获取拖拽数据
    
    var youname = event.dataTransfer.getData('text/plain')
    alert('hellp' + youname)
}
```



## 自定义显示

- 拖动图像的更改


只能在dragstart事件中调用setDragImage 或这addelement，可以以任意DOM元素为参数的


- 释放区域的强调显示

dragover事件中添加效果

需要在dragover事件中添加能够对动作进行说明的效果

在dragleave事件中以及drop事件中删除效果 

```js

element.ondragenter = function(e) {
    //添加效果
}

```


--- 


文件的Drag-In / Drag-Out
 


获取桌面程序中的文件


```js

element.ondragover =function(e) {
   e.preventDefault(); // 拖动有效
}



```



## File API



# 第十六章 存储

web storage 是一种可以简单的将js所处理的数据永久保存的接口

- k-v 形式存储
- 能够与普通的js对象相同的方式来进行读写操作
- 能够保存大量数据


--

localStorage、sessionStorage

在全局对象中定义的localStorage与sessionStorage这两种对象

- localStorage没有显示的删除,即使浏览器重启也不会丢失
- sessionStorage中数据仅能在同一个会话内得以保留



sessionStorage的生命周期
- 共享
  通常的页面跳转时

  在iframe内打开了子页面

  从崩溃中恢复时

  重新载入时
  

- 没有共享sessionStorage的情况

在新窗口或标签页中打开了页面

窗口被关闭又被重新打开时



---


源origin

指的是协议、主机名与端口号所组成的标识符

web Storage中保存额数据只能被在同一个源中执行的程序所共享

同源的情况下允许访问的规则称为同源策略

不同源直接的安全进行访问,会用到Cross-Origin Resource Sharing  CORS 跨源资源共享



- Cookie
    - 只有4kb
    - 向服务器发生请求时Cookie将被一起发送
    - 常用于保存会话信息等重要的信息

# Indexed Database

是一种在浏览器中通过js进行操作的数据库


```js

var db = null;

var request = indexedDB.open();

request.onsuccess = function(event){
    db =event.target.result
}

```

这数据库没怎么听说,如果真的起来了,应用还挺广泛的


# 第十七章 WebSocket

一种用于在服务器与客户端之间实现高效的双向通信的机制



```js

var ws = new WebSocket('ws://www.foo.org.bar','subprotocol')


```

通过握手之后,就建立了一个链接


wss 协议能够以TLS对通信加密

没有指定端口,则将分别默认使用80和443端口,将不会受到同源策略的制约


```js
 ws.open =function(event) {
   //建立链接处理的程序
 }
 
 
 ws.send('hello');  //发送数据

ws.onmessage = function(event) {  //接收数据
  var receivedMessage = event.data;
}
```


进行收发的数据格式 字符串、Blob、以及ArrayBuffer 


# 第十八章  Web Workers

是一种能够在另外的线程中创建新的js运行环境，以使js代码能够在后台处理的一种机制，不妨碍用户的ui操作



通常客户端js运行环境称作主线程，通过web workers 创建的后台js运行环境称为工作线程worker 

可以在主线程中创建工作线程，且能够同时创建多个工作线程

主线程与工作线程的sj运行环境是相互分离的，无法相互引用，各自的环境中分别准备了全局对象

工作线程中的环境无法引用document对象的 

可以通过window这一名称来引用主线程的全局对象

通过self引用工作线程的全局对象


则dom的修改和引用只能在主线程中进行

要在工作线程中进行需要通过消息收发接口postMessage方法message事件来进行


```js

var worker = new Worker('worker.js')



//主线程消息收发
worker.postMessage('test');
worker.onmessage = function(e) {
    var receivedMessage = e.data ; // 获取发送数据
}

// 主线程中进行删除
worker.terminate()
self.close() ; // 工作线程中删除自身的情况


// 读取外部文件
self.importScripts('test.js');
```



```js
//工作线程实现搜索

var  userList=[
    'test'
]

self.onmessage = function(event) { //接收消息
  var reg  = new RegExp(event.data,'i'),html = '';
  
  userList.forEach(function(user) {
    if (reg.test(user)){
        html +=  '<li>' + user + '</li>';
    } 
  })
}

// 发送消息
self.postMessage(html)


// 主线程处理



var worker = new Worker('test.js'), // 创建工作线程

text = document.getElementById('textbox'),

results = document.getElementById('resulets');

worker.onmessage = function(event) { // 接收工作线程的数据
    results.innerHTML = event.data;
}



```



中断工作线程的处理


- 重新创建工作线程（ 在主线程）
- 使用计时器（在工作线程）



## 共享工作线程

一个工作线程可以被多个页面共享引用，此时同源策略限制存在，但是可以在不同的窗口之间引用同一个共享线程



```js
var  worker = new SharedWorker('test.js')


worker.port.postMessage('发送消息')


worker.port.onmessage = function(event) {
  var receiveData = event.data;  // 接收消息
}
```


在主线程中常见共享线程后

就会触发工作线程的connect事件

connect事件中有一个MessagePort对象

该对象与请求连接的主线程中所具有的MessagePort对象是相对应的


```js

self.onconnect = function(connectEvent) {
  //获取连接请求方的messagePort
  var  port = connectEvent.port[0];
  
   port.postMessage('发送消息')
   
   port.onmessage = function(messageEvent) {
     var data = messageEvent.data ;  // 接收消息
   }
}
```