import { lastValueFrom } from 'rxjs';
import { BitcoinService } from './../../services/bitcoin.service';
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
    private utilService: UtilService,
    private bitcoinService: BitcoinService) { }

  user: User = {} as User
  greeting: string = ''
  rate!: object

  async ngOnInit() {
    this.user = this.userService.getUser()
    this.greeting = `Hello ${this.user.name}, ${this.utilService.getGreeting()} !`

    this.rate = await lastValueFrom(this.bitcoinService.getRate())
  }
}
