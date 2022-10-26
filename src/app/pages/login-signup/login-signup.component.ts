import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router) { }

  username: string = ''

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.userService.loginSignup(form.value.username)
    form.resetForm()
    this.router.navigate([''])
  }

}
