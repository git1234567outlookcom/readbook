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




