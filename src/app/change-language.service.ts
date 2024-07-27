import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { __values } from 'tslib';

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
