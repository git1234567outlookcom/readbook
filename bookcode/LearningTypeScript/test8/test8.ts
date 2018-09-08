
function logClass(target:any) {
    console.log('logclass ...')



    console.log('logclass end')
}

@logClass
class Person {
    public  name :string;
    public  surname:string;


    constructor(name:string,surname:string){
        this.name =name ;
        this.surname = surname;
    }


    public  saySomething(something:string):string
    {
        return this.name + " " + this.surname +"says: " + something;
    }
}



import 'reflect-metadata'

class Demo {
    @logType
    public  attr1:string;
}

function logType(target:any,key:string) {
    var t = Reflect.getMetadata('design:type',target,key);
    console.log(`${key} type: ${t.name}`);
}