import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { User } from '../models/user.model';

const USER = {
  _id: 'u101',
  name: "Ochoa Hyde",
  coins: 100,
  moves: []
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public getUser(): User {
    return USER
  }
}
