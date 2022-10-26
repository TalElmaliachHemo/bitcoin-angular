import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {

  constructor(private userService: UserService,
    private router: Router) { }

  menuClass = false

  logout() {
    this.userService.logout()
    this.router.navigate(['/login-signup'])
  }

  openMenu() {
    this.menuClass = true
  }

  closeMenu() {
    this.menuClass = false
  }
}
