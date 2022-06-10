import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class SharedService {

  private activeUser = new BehaviorSubject(new User(0,"","","","",""));
  sharedUser = this.activeUser.asObservable();

  constructor() { }

  nextUser(user:User) {
    this.activeUser.next(user);
  }
  
}