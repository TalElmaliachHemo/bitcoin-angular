import { User } from 'src/app/models/user.model';
import { UtilService } from './util.service';
import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';

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

  constructor(private storageService: StorageService,
    private utilService: UtilService) { }

  public getUser() {
    return this.storageService.loadFromStorage('loggedinUser')|| null
}

  public loginSignup(username: string) {
    const users = this.storageService.loadFromStorage('user') || []
    const userIdx = users.findIndex((user: User) => user.name === username)

    if (userIdx !== -1) {
      const user = users[userIdx]
      this.storageService.saveToStorage('loggedinUser', user)
      return user
    }

    const user = {
      _id: this.utilService.makeId(),
      name: username,
      coins: 1500000,
      moves: []
    }

    users.push(user)
    this.storageService.saveToStorage('loggedinUser', user)
    this.storageService.saveToStorage('user', users)
    return user
  }

  public logout() {
    this.storageService.saveToStorage('loggedinUser', null)
}
}
