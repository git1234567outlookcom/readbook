class Person {
    public name : string;
    public surname : string;

    constructor(name :string ,surname : string){
        this.name = name;
        this.surname = surname;
    }


    public  greet(city: string, cuntry: string){
        var msg = ` hi , my name is $(this.name) $(this.surname)`;

        msg += `i im  form $(city) ($(country))`;

        console.log(msg)
    }
}

var person = new Person('liu','hua');

person.greet.call(person,'liu','hua');

person.greet.apply(person,['liu','hua']);


// 可以使用bind 方法来使 greet函数成为一个具有相同作用域和函数体的新函数

var greet = person.greet.bind(person);

// 再次使用bind 或apply方法来调用greet函数
// 函数内部的this操作符的值都将不会被改变





// 闭包

function makeArray(){
    var shooters = [];
    for( var i = 0; i <10 ; i++){

        var shooter = function(){
            alert(i)
        }
         // shooter 就相当于一个闭包，这时候 = 10 
        shooters.push(shooter)
    }
   return shooters;
}

//  解决 闭包问题
function makeArray2(){
    var shooters = []
    for (var i = 0 ; i < 10 ; i++ ){
        (function(i){
            var shooter = function(){
                alert(i);
            }
            shooters.push(shooter)
        })(i);
    }
    return shooters;
}

// 使用闭包来模拟静态属性

var Counter = (function(){
    // 闭包上下文
    var _COUNTER = 0 ; 

    function changeBy(val){
        _COUNTER +=val; 
  }

    function Counter(){};
    Counter.prototype.increment = function(){
        changeBy(1);
    };

    Counter.prototype.decrement = function (params?:any) {
        changeBy(-1)
    };
    return Counter;
})