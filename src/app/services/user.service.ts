import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string = 'http://localhost:8084/users/';

  activeUser:User|null = null;

  constructor(private http:HttpClient) { }

  attemptLogin(user:User):Observable<User>{
    return (this.http.post(this.url,user,{withCredentials:true}) as Observable<User>)
  }

  // provideActiveUser():Observable<string>{
  //   let uname:unknown;
  //   if (this.activeUser != undefined){
  //      uname = this.activeUser?.username;
  //   } else {
  //     uname = "No one";
  //   }
  //   return (uname as Observable<string>);
  // }

  registerUser(user:User):Observable<unknown>{
    console.log("registering user: " + user);
    return this.http.post(this.url+"register", user);
  }

}
