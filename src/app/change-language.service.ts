import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeLanguageService {
  isEnglish: boolean = true;

  constructor() { }

  changeLanguage() {
    this.isEnglish = !this.isEnglish;
  }
}
