import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectService {
  private userChoice!: string;

  constructor() { }

  setUserChoice(choice: string) {
    this.userChoice = choice;
  }
  getUserChoice(): string {
    return this.userChoice;
  }

}
