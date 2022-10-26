import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public getGreeting(): string {
    const date = new Date();
    const hours = date.getHours();
    if (hours > -1 && hours < 5) return "Good Night";
    if (hours > 4 && hours < 13) return "Good Morning";
    if (hours > 12 && hours < 18) return "Good Afternoon";
    if (hours > 17 && hours < 21) return "Good Evening";
    else return "Good Night";
  }
}
