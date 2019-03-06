export class Cliente {
    name: string
    username: string
    email: string
    password: string
    pais: string
    estado: string
    fechaNacimiento: string
  
    constructor(name:string="",email:string="",
    username:string="",password: string="",pais: string="",estado: string="",fechaNacimiento:string=""){
        this.name=name;
        this.email=email;
        this.username=username;
        this.password=password;
        this.pais=pais;
        this.estado=estado;
        this.fechaNacimiento=fechaNacimiento;
        
    }
}