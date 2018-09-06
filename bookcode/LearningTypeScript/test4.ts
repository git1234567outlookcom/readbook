class Person {
    public name: string;
    public surname: string;
    public email: string;

    constructor(name: string, surname: string, email: string) {
        this.email = email;
        this.name = name;
        this.surname = surname;

    }

    greet(){
        alert('hi ')
    }

}

//


class Teacher extends  Person{
    public subjects :string[];

    constructor(name:string, surname:string, email:string,subjects:string[]){
        super(name, surname, email);
        this.subjects = subjects;
    }

    greet(){
        super.greet();
        alert('i teach' + this.subjects);
    }

    teach(){
        alert('welcome to maths class')
    }
}





// 迭代所有父类的实现 和 属性

function applyMixinns( deriveCtor:any, baseCtors:any[]) {
    baseCtors.forEach(baseCtor =>{
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name =>{
            if (name !== 'constructor'){
                deriveCtor.prototype[name] = baseCtor.prototype[name]
            }
        })
    })
}


// 范型类 


interface ValidatableInterface {
    isValid():boolean;
}



class User  implements  ValidatableInterface{
    isValid(): boolean {
        return true;
    }

    public  name :string;
    public password:string;


}


class Talk implements  ValidatableInterface{

    isValid(): boolean {
        return false;
    }
    
}


class GenericRepositoryWithConstraint < T extends ValidatableInterface> {
    private _url :string;

    constructor( url: string )
    {
        this._url = url;
    }
}


// 范型中的new 操作


function factoryNotWorking<T>() : T {
    var type:{
        new(): T ;
    };
    return new type();
}



//======== 里氏替换原则


interface PersistanceServiceInterface{
    save(entry :any):number;
}



// 命名空间
// 命名空间可以嵌套

namespace  app {
    // 可以使用export 关键字导出公共部分
    export  class UserModel {
        
    }
}


// 模块



class  UserModuel {

}

export { UserModuel  as User }; // 使用别名

// 如果接口和类名相同 则都输出


//   es6  运行时与程序设计时引入一个模块

// import {User} from  './'

//外部语法模块  仅在程序设计阶段可用


//import User = require('./')


