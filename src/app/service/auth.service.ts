import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { User } from '../model/user';
import { SERVICES_AUTH } from '../config.app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // url = "https://young-hollows-26999.herokuapp.com/api/auth/"
  // url = "http://localhost:5000/api/auth/"
  users: User[] = []
  constructor(
    private http: Http
  ) { }

  registerUser(user: User, role, idS?) {
    if (idS!=undefined)
      return this.http.post(SERVICES_AUTH.REGISTER, {
        "name": user.name,
        "username": user.username,
        "email": user.email,
        "password": user.password, 
        "role":role,
        "sucursal":idS
      }).pipe(
        map(data => data.json())).toPromise()
    else
      return this.http.post(SERVICES_AUTH.REGISTER, {
        "name": user.name,
        "username": user.username,
        "email": user.email,
        "password": user.password,
        "role": role
      }).pipe(
        map(data => data.json())).toPromise()
  }

  loginUser(user: User) {
    return this.http.post(SERVICES_AUTH.LOGIN, {
      "usernameOrEmail": user.username,
      "password": user.password
    }).pipe(
      map(data => data.json())).toPromise()
  }

  // getUser() {
  //   let id = JSON.parse(localStorage.getItem('currentUser')).username;
  //   let token = "Bearer " + JSON.parse(localStorage.getItem("currentUser")).accessToken
  //   const headers = new Headers({
  //     'Content-Type': 'application/json',
  //     'Authorization': token
  //   })
  //   return this.http.get(SERVICES_AUTH.GET_USER + id, { headers: headers}).pipe(
  //     map(data => data.json())).toPromise()
  // }

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