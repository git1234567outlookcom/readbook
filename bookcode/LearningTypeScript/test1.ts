var n : number = 1 ;

var x :any = {/*...*/ };

if (typeof x === 'string'){
    console.log(x.slice(3, 1));
}

x.foo();

console.log("log", );

// 定义一个接口
interface ICustomConsole{
    log(arg:string):void;
}
// 增加一个对象
declare var costomConsole : ICustomConsole;


// 流程控制


var isValid :boolean = true;

if(isValid){
    alert("is valid")
}

// 
var b :boolean  = true
if (b) {
    alert("ture")
}else{
    alert("not true")
}

// 

var f :boolean = false ;
var message =  f ? 'true' : 'false';
alert(message)

// 

enum AlertLevel{
    info,waring,error
}

function getAlertSubscribers(level:AlertLevel) {
    var emails = new Array<string>();

    switch( level){
        case AlertLevel.info:
            emails.push("this is info");
            break;
        
        case AlertLevel.waring:
            emails.push('this is waring')
            break;

        case AlertLevel.error:
            emails.push('this is error')
            break ;
        
        default:
            throw new Error('invalid argument')         
    }

    return emails;
}

getAlertSubscribers(AlertLevel.info)

// 

var i : number = 0 ; 
while (i < 5 ){
    i += 1 ; 
    console.log(i);
}

// 

var i : number = 0 ; 
do{
    i += 1 ;
    console.log(i);
}while (i < 5 )




// 

var obj : any ={ a:1 , b:2 , c:3};
obj.forEach(x => {
    console.log(x);
});

// 会沿着对象的远行链进行迭代，枚举出包括继承的属性
for (var key in obj){
    console.log(key + "=" + obj[key]);
}

// 只枚举自己的属性

// for (var key in obj){
//     if(obj.hasOwnProperty(prop)){

//     }
// }

// 

for (var  i :number = 0 ; i < 9 ; i ++){
    console.log(i);
}


// 匿名函数

var fun = function(name?:string): string {
    if(name){
        return 'hi ' + name;
    }else{
        return 'hi';
    }
}

var fun2 = (name:string):string=>{

    if(name){
        return 'hi' + name ;
    }else{
        return ' hi ' 
    }
}


// 使用箭头函数语法将会改变this操作符的工作机制


// 回调函数

function sume(a:number , b :number,
    callback:(result:number)=>void){
        callback(a + b )
    }


// 类


class Character{
    fullname :string;
    // 构造函数
    constructor(firstname:string,lastname:string){
        this.fullname = firstname + " " + lastname;
    }

    greet(name?: string){
        if(name){
            return 'hi ' + name  + 'my name is ' + this.fullname;
        }else{
            return 'hi'
        }
    }
}

var spark = new Character('jacob','keyss')
var msg = spark.greet();
alert(msg)
var msg1 = spark.greet('jom')
alert(msg1)


//  接口 确保类拥有指定的结构

interface LoggerInterface{
    log(arr:any):void;
}

class Logger implements LoggerInterface{
    log(arg){
        if (typeof console.log === "function") {
            console.log(arg);
        }else{
            alert(arg);
        }
    }
}

// 命名空间  可以使用namespace和export关键字

// 使用namespace中的类或接口 加上  export 关键字 才可以在外部访问得到

module Genmetry{
    export interface Vector2dInterface{
        toArray(callback : (x :number[]) => void): void;
        length():number;
        normalize();
    }

    export class Vector2d implements Vector2dInterface{
        private _x:number;
        private _y:number;

        constructor(x:number,y:number){
            this._x = x;
            this._y = y ;
        }

        toArray(callback: (x: number[]) => void): void {
            callback([this._x,this._y]);
        }        
        length(): number {
            return Math.sqrt(this._x * this._y + this._y * this._y);
            // throw new Error("Method not implemented.");
        }
        normalize() {
            // throw new Error("Method not implemented.");
            var len = 1 / this.length();
            this._x *= len;
            this._y *= len;
        }

       

        
    }
}

