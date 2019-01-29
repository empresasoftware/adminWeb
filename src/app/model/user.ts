export class User {
    username: string
    email: string
    password: string
    name:string
    telefono:string
    constructor(username:string="",email:string="",password:string="", name:string="", telefono:string=""){
        this.username=username;
        this.email=email;
        this.password=password;
        this.name=name;
        this.telefono=telefono;
    }
}
