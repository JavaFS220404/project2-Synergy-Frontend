import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  logout(){
    console.log("logging out");
    this.userService.logout();
  }
}