
//  第三章的代码


function geetNamed(name : string) :string {
    if(name)
    {
        return 'hi' + name;
    }
}
//  不是一个函数  只能先声明后调用
var  greetUnnamed = function(name:string) :string{
    if ( name)
    {
        return  'hi ' + name ;
    }
}

console.log(geetNamed('john'));

console.log(greetUnnamed('john'));


//  解释器会首先在代码解析阶段执行函数声明
//  除非函数表达式被赋值，否则不会被执行
//  主要区别是变量提升的过程


//  可选参数

function  add(a :number ,b:number, c ?: number){
    // c 就是可选参数
    console.log(a + b + c );
}

add(1,2);
add(1,2,3);

// 默认参数

function add2(a:number, b :number , c: number = 0 ): number{
    //  c 的默认值为 0
    return a + b + c
}


// void 0   是编译器检测一个变量是否为undefined 的用法

// 可变参数

function add3(...foo :number[]): number{
    // foo 为可变参数
    for ( var i in foo){
        console.log(i);
    }
    return 0 ;
}

//  js函数有一个被称为 arguments的内建对象
// 是一个非常想数组的对象，包含了函数调用时的所有参数

add3(1,2);

// 函数重载  名称相同 不同参数数量 或类型

function myfun(value:string,value1:boolean);
function myfun(value:number);

// 签名重载必须兼容所有重载签名
function myfun(value: (string|number)){
    switch (typeof value){
        case 'string':
            return 'string';
        case 'number':
            return 'number'
        default :
            console.log('error');
    }
};





// 函数作用域
// 垃圾回收机制
// 使用程序的运行时堆栈状态开指定那些变量被应用（动态作用域）
// 使用程序的源代码结构来指定那些变量被引用（词法作用域）
// ts使用的就是词法作用域


function foo1():void{
    if(true){
        var bar: number = 0 ;
    }
    alert(bar);
}


// 在运行时中，所有的变量声明都会在函数执行前移动到函数的顶端
// 这种行为被称为变量提升


// let 可以将作用域设置在代码段而不是函数中

// 立即调用函数
// 立即调用函数表达式是一种设计模式
// 使用函数作用域作为一个词法作用域
// 可以被用于防止全局作用域中的变量提升导致的污染

