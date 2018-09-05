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
