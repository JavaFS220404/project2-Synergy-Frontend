import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private userService:UserService) { }

  //loggedInUser:any = this.userService.activeUser?.username; //"No one";
  loggedInUser:string = "No one";


  ngOnInit(): void {
  }

}
