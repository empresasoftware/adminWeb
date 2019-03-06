import { Injectable } from '@angular/core';
import { Http, Headers, ResponseContentType } from '@angular/http';
import { map } from 'rxjs/operators';
import { User } from '../model/user';
import { SERVICES_SCORTS, SERVICES_CLIENTE } from '../config.app';
import * as JWT from 'jwt-decode';
import { Cliente } from '../model/cliente';
 
@Injectable({
  
  providedIn: 'root'
})
export class ClienteService {
  // url = "https://young-hollows-26999.herokuapp.com/api/auth/"
  // url = "http://localhost:5000/api/auth/"
  users: User[] = []
  cliente: Cliente
  constructor(
    private http: Http
  ) { }

 

  createCliente(cliente: Cliente) {
    //let token = "Bearer " + JSON.parse(localStorage.getItem("currentUser")).accessToken
    const headers = new Headers({
      'Content-Type': 'application/json',
      //'Authorization': token
    })
    return this.http.post(SERVICES_CLIENTE.CREATE_CLIENTE, {
      "name": cliente.name,
      "username": cliente.username,
      "email": cliente.email,
        "password": cliente.password,
        "pais": cliente.pais,
        "estado": cliente.estado,
        "fechaNacimiento": cliente.fechaNacimiento
    }, { headers: headers }).pipe(
      map(data => data.json())).toPromise()
  }

 
  // getUsers(){
  //   let token = "Bearer " + JSON.parse(localStorage.getItem("currentUser")).accessToken
  //   const headers = new Headers({
  //     'Content-Type': 'application/json',
  //     'Authorization': token
  //   })
  //   return this.http.get(SERVICES_AUTH.GET_USERS, { headers: headers }).pipe(
  //     map(data => data.json())).toPromise()
  // }

  // updateUser(user: User) {
  //   let id = JSON.parse(localStorage.getItem('currentUser')).username;
  //   let token = "Bearer " + JSON.parse(localStorage.getItem("currentUser")).accessToken
  //   const headers = new Headers({
  //     'Content-Type': 'application/json',
  //     'Authorization': token
  //   })
  //   return this.http.put(SERVICES_AUTH.UPDATE + id, {
  //     telefono: user.telefono,
  //   },{ headers: headers }).pipe(
  //     map(data => data.json())).toPromise()
  // }
  }