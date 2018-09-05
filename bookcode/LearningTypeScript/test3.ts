//  第三章的代码

function geetNamed(name: string): string {
  if (name) {
    return "hi" + name;
  }
}
//  不是一个函数  只能先声明后调用
var greetUnnamed = function(name: string): string {
  if (name) {
    return "hi " + name;
  }
};

console.log(geetNamed("john"));

console.log(greetUnnamed("john"));

//  解释器会首先在代码解析阶段执行函数声明
//  除非函数表达式被赋值，否则不会被执行
//  主要区别是变量提升的过程

//  可选参数

function add(a: number, b: number, c?: number) {
  // c 就是可选参数
  console.log(a + b + c);
}

add(1, 2);
add(1, 2, 3);

// 默认参数

function add2(a: number, b: number, c: number = 0): number {
  //  c 的默认值为 0
  return a + b + c;
}

// void 0   是编译器检测一个变量是否为undefined 的用法

// 可变参数

function add3(...foo: number[]): number {
  // foo 为可变参数
  for (var i in foo) {
    console.log(i);
  }
  return 0;
}

//  js函数有一个被称为 arguments的内建对象
// 是一个非常想数组的对象，包含了函数调用时的所有参数

add3(1, 2);

// 函数重载  名称相同 不同参数数量 或类型

function myfun(value: string, value1: boolean);
function myfun(value: number);

// 签名重载必须兼容所有重载签名
function myfun(value: string | number) {
  switch (typeof value) {
    case "string":
      return "string";
    case "number":
      return "number";
    default:
      console.log("error");
  }
}

// 函数作用域
// 垃圾回收机制
// 使用程序的运行时堆栈状态开指定那些变量被应用（动态作用域）
// 使用程序的源代码结构来指定那些变量被引用（词法作用域）
// ts使用的就是词法作用域

function foo1(): void {
  if (true) {
    var bar: number = 0;
  }
  alert(bar);
}

// 在运行时中，所有的变量声明都会在函数执行前移动到函数的顶端
// 这种行为被称为变量提升

// let 可以将作用域设置在代码段而不是函数中

// 立即调用函数 IIFE
// 使用函数作用域作为一个词法作用域
// 可以被用于防止全局作用域中的变量提升导致的污染

var bar = 0;

(function(global) {
  var foo: number = 0;
  bar = 1; // 全局作用域
  console.log(global.bar);
  console.log(foo);
})(this);

//  闭包的职责是引用自由变量
// 函数定义的位置所在的闭包会记住它所在的环境（作用域内的变量）

// 范型
// do not repeat  youself   DRY原则减少各种类型的信息重复

function getEntities<T>(url: string, cb: (list: T[]) => void): void {
  //  T 表示一个范型
}

class User {
  name: string;
  age: number;
}

getEntities<User>("url", function(users: User[]) {
  for (var i; users.length; i++) {
    console.log(users[i].name);
  }
});

// tag 函数和标签模版

var my = "liu";
// 可以使用tag函数扩展和修改模版字符串的行为
// 当我们在模版字符串上应用一个tag函数时
// 这个模版字符就变成了标签模版

// 一个标签模版必须返回一个字符串

function htmlEscape(literals, ...placeholdre) {
  let result = " ";
  for (var i; i < placeholdre.length; i++) {
    result += literals[i];
    result += placeholdre[i].replace(/&/g, "&amp;");
  }

  return result;
}

// 回调函数
// 函数可以作为参数传给其他函数
// 被传递给其他函数的函数叫做回调
// 函数也可以被另一个函数返回

// 那些接受函数为参数（回调）或返回另一个函数的函数被称为高阶函数

var f2 = function() {
  // 回调
  console.log("this is f2");
};

function bar2(cb: () => void) {
  // 高阶函数
  console.log("this is bar ");
  cb();
}

bar2(f2);

// 箭头函数

class Person {
  name: string;

    constructor(name: string, surname: string, email: string) {
    this.name = name;
  }
  greet() {
    //  方法内部， this 操作符 指向 装载了greet 方法的对象
    alert("hi , my name  is $(this.name)");
  }
}

var remo = new Person("liu", surname, email);

remo.greet();

//  当定义一个异步函数时或回调函数
// this关键字就会改变它指向的指
// 指向匿名函数

class Person2 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet() {
    alert("hi  my name is $(this.name)");
  }
  greetDelay(time: number) {
    setTimeout(() => {
      alert("hi my name is  $(this.name");
    }, time);
  }
}

// 通过使用箭头函数
//  可以保证 this操作符指向 是实例 而不是 回调函数
// ts 编译器会生成一个_this的别名，来确保this 指向 的是正确的对象

// 回调函数问题

// promise
// 对异步操作结果的一个承诺

//  pending ：promise的初始化状态
// fulfilled：代表异步操作成功的promise状态
// rejected：代表异步操作失败的promise状态

function fooo() {
  return new Promise((fulfill, reject) => {
    try {
      fulfill();
    } catch (e) {
      reject();
    }
  });
}

//

class ViewAsync {
  private _container: string;
  private _templateUrl: string;
  private _serviceUrl: string;
  private _agrs: any;

  constructor(config) {
    this._container = config.container;
    this._templateUrl = config.templateUrl;
    this._serviceUrl = config.serviceUrl;
    this._agrs = config.agrs;
  }
}
// 生成器
//调用一个函数，这个函数开始运行，在它运行完成之前其他代码都不能运行
// 一种新的函数可能会在函数执行的过程中将这个函数暂停一次或多次
// 并在随后恢复它的运行
// 而且可以让其他代码在暂停的过程中运行
// 这种新型的函数被成为生成器
// 一个生成器代表了一个值的序列
// 生成器对象的接口只是一个迭代器
// 可以使用next（)函数来使他产生结果

// 可以使用function 关键字后跟着一个 * 定以一个生成器的构造函数
// yield 关键字被用来暂停函数的执行并返回一个值

function* foo3() {
  yield 1;
  yield 2;
  return 3;
}

// 有返回值的函数不能使用new
var f3 = foo3();

f3.next();

//  无限循环不会移除
function* fo4() {
  var i = 1;
  while (true) {
    yield i++;
  }
}

// 异步函数
// 在异步操作中被调用的函数
// 可以使用awair关键字等待异步结果的到来而不会阻塞程序的执行

// var p = Promise < number> = /* ... */;
// async function fn() :Promise<number> {
//   var i = await p;
//   return 1 + i
// }
