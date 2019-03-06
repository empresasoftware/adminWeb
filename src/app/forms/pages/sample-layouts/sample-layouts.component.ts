import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { User } from '../../../model/user';
import { AuthService } from '../../../service/auth.service';
import { ClienteService } from '../../../service/cliente.service';
import { Cliente } from '../../../model/cliente';

@Component({
  selector: 'app-sample-layouts-page',
  templateUrl: './sample-layouts.component.html',
  styleUrls: [ './styles/sample-layouts.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class SampleLayoutsPageComponent {
  formStacked: FormGroup;
  formHorizontal: FormGroup;
  formRegister: FormGroup;
  formLogin: FormGroup;
  
    public email: AbstractControl;
    public password: AbstractControl;
    public user: User = new User();
    
    public cliente: Cliente = new Cliente();
    public name: AbstractControl
    public pass: AbstractControl
    public pais: AbstractControl
    public estado: AbstractControl
    public fechaNac: AbstractControl
    public username: AbstractControl
    public emailr: AbstractControl
    public birthday: AbstractControl
  constructor(fb: FormBuilder,public authService: AuthService,public serviceCliente: ClienteService) {
    this.formStacked = fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
      newsletter: new FormControl(true),
      
    });
    this.formHorizontal = fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
      remember: new FormControl(true)
    });
    this.formRegister = fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      cpassword: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      pais: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required)
    });
    this.formLogin = fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

   
  this.email = this.formLogin.controls['email'];
  this.password = this.formLogin.controls['password'];
  
  this.emailr = this.formRegister.controls['email']
  this.pass = this.formRegister.controls['password']
  this.name = this.formRegister.controls['name']
  this.username = this.formRegister.controls['username']
  this.pais = this.formRegister.controls['pais']
  this.birthday = this.formRegister.controls['birthday']
  }

  public onSubmit(values: Object): void {
    if (this.formLogin.valid) {
        
        this.user = new User(this.email.value, '', this.password.value, '')
        this.authService.loginUser(this.user).then((data) => {
            localStorage.setItem('currentUser', JSON.stringify(data))
            
            alert('Login OK')
        }).catch(() => {
           
           
        })
    }
}

createCliente(values: Object) {
  this.cliente.name = this.name.value
  this.cliente.username=this.username.value
  this.cliente.password=this.pass.value
  this.cliente.email = this.emailr.value
  this.cliente.pais= this.pais.value
  this.cliente.estado='Activo'
  this.cliente.fechaNacimiento=this.birthday.value
  var date:Date = this.birthday.value
  this.cliente.fechaNacimiento = (date.getDay()+'-'+date.getMonth()+'-'+date.getFullYear())
  this.cliente.fechaNacimiento ='12-05-1993'
  console.log(this.cliente)
  this.serviceCliente.createCliente(this.cliente
    
    ).then(data => {
      
      console.log(data)
      
    })
}


}

export function emailValidator(control: FormControl): { [key: string]: any } {
  var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  if (control.value && !emailRegexp.test(control.value)) {
      return { invalidEmail: true };
  }
}

