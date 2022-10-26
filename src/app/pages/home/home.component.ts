import { UtilService } from './../../services/util.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService,
    private utilService: UtilService) { }

  user: User = {} as User
  greeting: string = ''

  ngOnInit(): void {
    this.user = this.userService.getUser()
    this.greeting = `Hello ${this.user.name} ${this.utilService.getGreeting()} !`
  }
}
