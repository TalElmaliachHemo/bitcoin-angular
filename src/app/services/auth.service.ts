import { UserService } from 'src/app/services/user.service';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) { }

  checkLoggedIn() {
    const user = this.userService.getUser()
    return !!user
  }
}
