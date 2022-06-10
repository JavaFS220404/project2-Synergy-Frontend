import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user';
import { SharedService } from 'src/app/services/shared.service';
import { UserService } from 'src/app/services/user.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = '';
  password:string = '';

  sharedUser:User = new User(0,"","","","","");

  constructor(private userService:UserService, private router:Router, private sharedService:SharedService) { }

  ngOnInit(): void {
    this.sharedService.sharedUser.subscribe(message => this.sharedUser = message)
  }

  login(){
    let user:User = new User(0, this.username, this.password, "","","");
    this.userService.attemptLogin(user).subscribe(
      {
        next:(authUser:User)=>{
          this.userService.activeUser = authUser;
          this.userService.loggedIn = true;
          this.router.navigate(["/characters"]);
          this.sharedUser = authUser;
        },
        error:()=>{
          this.userService.activeUser = null;
          console.log("login failed");
          this.userService.loggedIn = false;
          this.router.navigate(["/register"]);
        }
      }
    );    
  }
}