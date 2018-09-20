
class test1{
      username :string ;
      age: number;
    constructor(a:number , b:number){
        console.log(a+b)
    }

    add( a,b){
        console.log(a+b)
    }

    avg(){
        console.log((1+2)/2)
    }
}

new test1(1,4)


var arr = [1,2,3,4]

console.log(arr)


var b1 = new String('abc');

var b2 = new String('abc');

var b3 = 'abc'
console.log('两个对象之间比较的是地址，地址不同 false')
console.log(b1 === b2 )
console.log(b1 == b2 )

console.log('比较的是内容，内容相同true')
console.log(b1 == b3)
console.log(b1 === b3)


console.log(typeof (b1))
console.log(typeof (b3))

console.log(b1.charAt(1))
console.log(b3.charAt(1))



console.log(0.1+0.2 +' 不等于0.3')


console.log(Number.MAX_VALUE)

console.log(Number.MIN_VALUE)

var x  ;
console.log(typeof x)
// console.log(typeof xx)

console.log('-------------')

for ( var i  in test1.prototype){
    console.log(i)

}


var  t1 = new test1(1,2);

for ( var i in t1){
    console.log(i)
}
console.log('-------------')
var obj = {x:1,y:2,z:3}

for (var i in obj){


    console.log(i)
}

console.log('---------919----')

Object.getOwnPropertyNames(t1)

console.log(test1.prototype)


var  f1 = {x :4 }

function f() {
   console.log(this.f1)
}


f.apply(f1)


f.call(f1)

console.log('原型链')

function  MyClass() {
    this.x = ' x in myclass'
}

var m1 = new MyClass()

console.log(m1.x)

MyClass.prototype.z= 'z in prototype'

console.log(m1.z)


console.log(Object.getOwnPropertyDescriptor(t1,'a'))

console.log(Object.getOwnPropertyNames(t1))


console.log('闭包')


function f2(){
    function g(){
        console.log('this is g')
    }
    g()  // 这里是函数调用,会生call对象
    // return  g 这是直接返回函数,而不会进行调用,不会生成call对象
}

f2()



console.log('----');



function f3(arg){
    
}


console.log('回调');



var emitter = {
    // 能够注册多个回调函数,通过数组管理
    callbacks:[],
    // 回调函数的注册方法
    register:function(fn){
        this.callbacks.push(fn);
    },
    // 事件的触发处理

    onOpen:function(){
         this.callbacks.forEach(element => {
             element();
         });
    }

}

console.log('闭包注册');


emitter.register(
    (function(){
        var msg = 'closure1';
        return function(){
            console.log(msg + ' this is ');
        }
    })()
);

emitter.onOpen();



console.log('##数组');


var arr = [3,4,5]

console.log(typeof arr)

console.log(arr.length);

console.log(Object.getOwnPropertyNames(arr));

var arr2 = [].concat(arr)


var zoo = ['dog','pig']

